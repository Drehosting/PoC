import React, { useEffect, useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

const App = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Fetch video list from the backend API
        fetch('/api/videos')
            .then((res) => res.json())
            .then((data) => setVideos(data))
            .catch((err) => console.error('Error fetching videos:', err));
    }, []);

    return (
        <div className="app">
            <h1>Video Library</h1>
            <div className="video-library">
                {videos.map((video, index) => (
                    <VideoPlayer key={index} videoName={video} />
                ))}
            </div>
        </div>
    );
};

export default App;
