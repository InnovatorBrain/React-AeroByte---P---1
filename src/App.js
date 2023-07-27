// Packages
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Style CSS
import './App.css';
import './styles/One.css';

// Components
import OneNavbar from './components/OneNavbar';
import OnePro from './components/OneMain';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <OneNavbar />
              <OnePro />
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
