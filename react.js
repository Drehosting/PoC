import React, { useState, useEffect } from 'react';
import VideoPlayer from 'react-video-js-player';

const VideoLibrary = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('/api/videos')
            .then(res => res.json())
            .then(data => setVideos(data));
    }, []);

    return (
        <div>
            {videos.map((video, index) => (
                <VideoPlayer key={index} src={`https://yourblobstorage.blob.core.windows.net/videos/${video}`} />
            ))}
        </div>
    );
};

export default VideoLibrary;
