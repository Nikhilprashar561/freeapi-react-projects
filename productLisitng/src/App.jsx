import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [productData, setProductData] = useState([]);
  const [pages, setpages] = useState(1);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/randomproducts?page=${pages}`,
      );
      const data = await response.json();

      setProductData(data.data.data);
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
      <h1 className="h">Product Listing</h1> 

    <div className="card-container">
      {/* Product Image Section */}
      {loading ? ( <div>Loading...</div> ) : (
        productData.map((product) => {
         return  <div key={product.id} className="product-card">
      <div className="card-header">
        <img src={product.thumbnail} alt={product.title} className="main-thumbnail" />
        <span className="category-badge">{product.category}</span>
        <span className="discount-tag">-{product.discountPercentage}% OFF</span>
      </div>

      <div className="card-body">
        <div className="brand-row">
          <span className="brand-name">{product.brand}</span>
          <div className="rating">
            ⭐ {product.rating} <span className="id-tag">#{product.id}</span>
          </div>
        </div>

        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>

        <div className="price-section">
          <span className="current-price">${product.price}</span>
          <span className="stock-info">
             {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
          </span>
        </div>

        {/* Mini Gallery for additional images */}
        <div className="image-gallery">
          {product.images.slice(0, 4).map((img, index) => (
            <img key={index} src={img} alt={`view-${index}`} className="gallery-img" />
          ))}
          {product.images.length > 4 && (
            <div className="gallery-more">+{product.images.length - 4}</div>
          )}
        </div>

        <button className="buy-button">Add to Cart</button>
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
  )
}

export default App
