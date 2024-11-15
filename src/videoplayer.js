import React, { useRef } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoName }) => {
    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
    };

    return (
        <div className="video-player">
            <video ref={videoRef} controls>
                <source src={`/api/play/${videoName}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button onClick={handlePlay}>Play</button>
        </div>
    );
};

export default VideoPlayer;
