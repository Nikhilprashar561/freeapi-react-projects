import { useEffect, useState } from "react";

function App() {
  const [getMeals, setGetMeals] = useState([]);
  const [pages, setpages] = useState(1);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchingMeals = async function () {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/meals?page=${pages}`,
        { method: "GET", headers: { accept: "application/json" } },
      );

      const data = await response.json();
      setGetMeals(data.data.data)
      setloading(false);
    };
    fetchingMeals()
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

  function getIngredients(item) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = item[`strIngredient${i}`];
      const measure = item[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push(`${ingredient} (${measure})`);
      }
    }
    return ingredients;
  }


  return (
    <>
    <div className="meal-container">
      {loading ? ( <div>Loading...</div> ) : (
        getMeals.map((item) => {
          return <div key={item.id} className="meal-card">

        <img
          src={item.strMealThumb}
          alt={item.strMeal}
          className="meal-image"
          width={200}
          style={{width: "300px",}}
        />

        <h2 className="meal-title">{item.strMeal}</h2>
        <p className="meal-meta">Category: {item.strCategory} | Area: {item.strArea}</p>

        <div className="meal-section">
          <h4>Description</h4>
          <p className="instructions">
            {/* {item.strInstructions} */}
          </p>
        </div>

        <div className="meal-section">
          <h4>Tags</h4>
          <p>{item.strTags}</p>
        </div>

        <div className="meal-section">
          <h4>Ingredients</h4>
          {getIngredients(item).map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))}
        </div>

        <div className="meal-section">
          <h4>Extra Info</h4>
          <p>ID Meal: {item.id} | Local ID: {item.id}</p>
          <p>Drink Alternate: {item.strDrinkAlternate}</p>
          <p>Image Source: {item.strSource}</p>
          <p>Creative Commons: {item.strCreativeCommons}</p>
          <p>Date Modified: {item.dateModified}</p>
        </div>

        <div className="meal-links">
          <a href={item.strYoutube} target="_blank">
            YouTube
          </a>
          <a href={item.strSource} target="_blank">
            Source
          </a>
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
