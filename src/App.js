import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Default Home Route */}
          <Route
            path="/"
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
