import { useEffect, useState } from "react";

function App() {
  const [catData, setCatData] = useState([]);
  const [pages, setpages] = useState(1);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/cats?page=${pages}`,
      );
      const data = await response.json();

      setCatData(data.data.data);
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
      <h1 className="h">Random Cat Viewer</h1>
      <div className="cat-container">
        {loading ? ( <div className="loading">Loading...</div> ) : (
          catData.map((item) => {
           return <div className="cat-card">

        <img
          src={item.image}
          alt="Abyssinian"
          className="cat-image"
          style={{ width: "200px" }}
        />

        <h2 className="cat-name">{item.name}</h2>
        <p className="cat-origin">Origin: {item.origin} ({item.country_codes})</p>

        <p className="cat-description">
          {item.description}
        </p>

        <div className="cat-section">
          <h4>Basic Info</h4>
          <p><strong>ID:</strong> {item.id}</p>
          <p><strong>Life Span:</strong> {item.life_span}</p>
          <p><strong>Weight:</strong> {item.weight.metric} ({item.weight.imperial})</p>
        </div>

        <div className="cat-section">
          <h4>Temperament</h4>
          <p>{item.temperament}</p>
        </div>

        <div className="cat-section">
          <h4>Ratings</h4>
          <p>Adaptability: {item.adaptability} | Affection: {item.affection_level} | Child Friendly: {item.child_friendly}</p>
          <p>Dog Friendly: {item.dog_friendly} | Energy: {item.energy_level} | Grooming: {item.grooming}</p>
          <p>Health Issues: {item.health_issues} | Intelligence: {item.intelligence} | Shedding: {item.shedding_level}</p>
          <p>Social Needs: {item.social_needs} | Stranger Friendly: {item.stranger_friendly} | Vocalisation: {item.vocalisation}</p>
        </div>

        <div className="cat-section">
          <h4>Traits</h4>
          <p>Indoor: {item.indoor} | Lap: {item.lap} | Hypoallergenic: {item.hypoallergenic}</p>
          <p>Experimental: {item.experimental} | Hairless: {item.hairless} | Natural: {item.natural}</p>
          <p>Rare: {item.rare} | Rex: {item.rex} | Short Legs: {item.short_legs}</p>
        </div>

        <div className="cat-links">
          <a href={item.cfa_url} target="_blank">CFA</a>
          <a href={item.vetstreet_url} target="_blank">Vetstreet</a>
          <a href={item.vcahospitals_url} target="_blank">VCA</a>
          <a href={item.wikipedia_url} target="_blank">Wikipedia</a>
        </div>

      </div>
          })
        )}
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
