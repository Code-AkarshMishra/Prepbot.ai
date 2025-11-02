import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactPlayer from "react-player"; // Sahi import
import { courseData } from '../data/courses.js';
import './VideoPage.css';

const VideoPage = () => {
  const { level, subject } = useParams();
  const navigate = useNavigate();

  // Data ko courses.js se fetch karein
  const course = courseData[level]?.[subject];

  // Agar course ya video list na mile
  if (!course || !course.videos || course.videos.length === 0) {
    return (
      <div style={{ color: 'white', padding: '50px', textAlign: 'center' }}>
        <h1>No Videos Found</h1>
        <p>Sorry, videos for "{subject}" are not available yet.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  // State ko pehli video se hi initialize karein
  const [selectedVideo, setSelectedVideo] = useState(course.videos[0]);

  // Agar kisi vajah se selectedVideo null ho
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="video-page-container">
      
      {/* 1. Main Video Player Area */}
      <div className="video-player-area">
        <h1 className="video-page-title">{selectedVideo.title}</h1>
        <div className="player-wrapper">
          <ReactPlayer
            // --- YEH LINE SABSE ZAROORI FIX HAI ---
            // 'key' badalne se ReactPlayer naye video ko force-load karta hai
            key={selectedVideo.id} 
            className="react-player"
            url={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
            width="100%"
            height="100%"
            controls={true}
            playing={true} // Taaki video load hote hi play ho
          />
        </div>
      </div>

      {/* 2. Video List Sidebar */}
      <div className="video-list-sidebar">
        <h3>{course.title} - Chapters</h3>
        <div className="video-items-list">
          {course.videos.map((video, index) => (
            <div
              key={video.id}
              className={`video-item ${video.id === selectedVideo.id ? 'active' : ''}`}
              onClick={() => setSelectedVideo(video)}
            >
              <span className="video-item-index">{index + 1}</span>
              <span className="video-item-title">{video.title}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default VideoPage; // <-- Yeh line zaroori hai