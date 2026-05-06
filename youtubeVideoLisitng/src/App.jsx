import { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/youtube/videos?page=1"
      );
      const data = await res.json();

      // correct path
      setVideos(data.data.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {videos.map((item) => (
        <div className="card" key={item.id}>
          <img
            src={item.snippet?.thumbnails?.high?.url}
            alt={item.snippet?.title}
            className="thumbnail"
          />

          <div className="card-body">
            <h3 className="title">{item.snippet?.title}</h3>
            <p className="channel">{item.snippet?.channelTitle}</p>
            <p className="date">
              {new Date(item.snippet?.publishedAt).toDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;