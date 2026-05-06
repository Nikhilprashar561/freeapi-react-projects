import { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState([]);
  const [pages, setpages] = useState(1);

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch(
          `https://api.freeapi.app/api/v1/public/randomjokes?page=${pages}`,
        );
        const data = await response.json();

        setApiData(data.data.data);
      } catch (error) {
        console.log(`Error`, error);
      }
    };
    fetchData();
  }, [pages]);

  function handleprev() {
    if (pages === 1) {
      return;
    }
    setpages((p) => p - 1);
  }

  function handleNext() {
    setpages((p) => p + 1);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-3xl">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-10">
           Funny Jokes
        </h1>

        <div className="space-y-5">
          {apiData.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 o backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-indigo-100"
            >
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 text-center">
                {item.content}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {item.categories.map((cat) => (
                  <span
                    key={cat}
                    className="bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
          <button
            disabled={pages === 1}
            onClick={handleprev}
            className="px-6 y py-2 rounded-full bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 active:scale-95 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          <span className="px-5 y py-2 bg-white border border-indigo-200 rounded-full text-indigo-700 font-semibold shadow-sm">
            Page {pages}
          </span>

          <button
            onClick={handleNext}
            className="px-6 y p-12 py-2 rounded-full bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 active:scale-95 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;