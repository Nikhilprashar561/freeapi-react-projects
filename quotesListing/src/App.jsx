import { useEffect, useState } from "react";

function App() {
  const [quoteData, setquoteData] = useState([]);
  const [pages, setpages] = useState(1);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/quotes?page=${pages}`,
      );
      const data = await response.json();

      setquoteData(data.data.data);
      setloading(false);
      // console.log(data.data.data);
    };
    fetchData();
  }, [pages]);

  function handlePrev() {
    if (pages === 1) {
      return;
    }
    setpages((p) => p - 1);
  }

  function handleNext() {
    setpages((p) => p + 1);
  }

  return (
    <>
    <h1 className="h">Quotes Listing</h1>
      <div className="container">
        {quoteData.map((item) => {
          return (
            <div key={item.id} className="card">
              <p className="content">
                {item.content}
              </p>

              <h3 className="author">— {item.author}</h3>

              <div className="meta">
                {item.tags.map((e) => {
                <span className="tag">{e}</span>
                })}
                <span className="date">Added: {item.authorSlug}</span>
                <span className="date">Length: {item.length}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination-container">
        <button onClick={handlePrev} className="btn prev-btn">
          ← Previous {pages}
        </button>

        <button onClick={handleNext} className="btn next-btn">
          Next {pages} →
        </button>
      </div>
    </>
  );
}

export default App;
