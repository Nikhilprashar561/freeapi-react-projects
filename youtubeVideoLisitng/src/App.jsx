import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [pages, setpages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.freeapi.app/api/v1/public/youtube/videos?page=${pages}`
        );

        const data = await response.json();

        console.log("API Response:", data);

        // ✅ SAFE CHECK (important fix)
        if (data && data.data && Array.isArray(data.data.data)) {
          setVideos(data.data.data);
        } else {
          setVideos([]);
        }

      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pages]);

  console.log("Videos State:", videos);

  function handlePrev() {
    if (pages === 1) return;
    setpages((p) => p - 1);
  }

  function handleNext() {
    setpages((p) => p + 1);
  }

  return (
    <>
      <header className="youtube-header">
        <div className="header-content">
          <div className="logo">
            <svg viewBox="0 0 24 24" className="logo-icon">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
            </svg>
            <span>Video Listing</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading videos...</p>
          </div>
        ) : videos.length > 0 ? (
          <div className="videos-grid">
            {videos.map((item) => {
              return (
                <div key={item.items.id} className="video-card">
                  <div className="thumbnail-container">
                    <img 
                      src={item.items.snippet.thumbnails.high.url} 
                      alt={item.items.snippet.title}
                      className="thumbnail"
                    />
                    <div className="duration">
                      {item.items.contentDetails.duration || "0:00"}
                    </div>
                  </div>

                  <div className="video-info">
                    <h3 className="video-title">{item.items.snippet.localized.title}</h3>

                    <div className="channel-info">
                      <p className="channel-name">{item.items.snippet.channelTitle}</p>
                    </div>

                    <div className="video-stats">
                      <span className="views">
                        {item.items.statistics?.viewCount ? `${(item.items.statistics.viewCount / 1000000).toFixed(1)}M views` : "0 views"}
                      </span>
                      <span className="dot">•</span>
                      <span className="upload-date">
                        {item.items.snippet.publishedAt || "Recently"}
                      </span>
                    </div>

                    <p className="description">
                      {item.items.snippet.description?.substring(0, 100) || "No description"}...
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-videos">No videos available</div>
        )}
      </main>

      <div className="pagination-container">
        <button className="btn prev-btn" onClick={handlePrev} disabled={pages === 1}>
          ← Previous
        </button>
        <span className="page-info">Page {pages}</span>
        <button className="btn next-btn" onClick={handleNext}>
          Next →
        </button>
      </div>
    </>
  );
}

export default App;