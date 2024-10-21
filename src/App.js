import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';
import VideoPage from './components/VideoPage';

function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(true); // Track first load

  useEffect(() => {
    // Check if the video has already been watched
    const videoWatched = sessionStorage.getItem('videoWatched'); 

    // If it has been watched, set isFirstLoad to false
    if (videoWatched) {
      setIsFirstLoad(false);
    }
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          {/* Show VideoPage only on first load */}
          {isFirstLoad && (
            <Route 
              path="/" 
              element={<VideoPage onVideoEnd={() => setIsFirstLoad(false)} />} 
            />
          )}
          {/* Default Home Route */}
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          {/* Other Routes */}
          <Route path="/projects" element={<><Navbar /><Projects /></>} />
          <Route path="/skills" element={<><Navbar /><Skills /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /></>} />
          <Route path="/about" element={<><Navbar /><About /></>} />

          {/* Redirect any unmatched routes */}
          <Route path="*" element={<Navigate to={isFirstLoad ? "/" : "/home"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
