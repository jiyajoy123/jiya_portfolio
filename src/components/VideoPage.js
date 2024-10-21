import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoPage = ({ onVideoEnd }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const videoElement = document.getElementById('introVideo');

    // Navigate to Home after video ends
    videoElement.onended = () => {
      sessionStorage.setItem('videoWatched', 'true'); // Mark video as watched
      onVideoEnd(); // Call the callback to update isFirstLoad in App
      navigate('/home'); // Navigate to Home
    };

    // Fallback navigation after a set timeout
    const timeout = setTimeout(() => {
      sessionStorage.setItem('videoWatched', 'true');
      onVideoEnd(); // Call the callback to update isFirstLoad in App
      navigate('/home'); // Navigate to Home
    }, 50000); 

    return () => clearTimeout(timeout); // Clean up timer
  }, [navigate, onVideoEnd]);

  return (
    <div className="video-container" style={{ backgroundColor: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
>
      <video
  id="introVideo"
  width="80%" 
  height="500" 
  autoPlay
  muted
  controls={false}
  style={{ transform: 'scale(0.95)', margin: '0 auto', display: 'block' }} 
>
  <source src="/video/intro.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

    </div>
  );
};

export default VideoPage;
