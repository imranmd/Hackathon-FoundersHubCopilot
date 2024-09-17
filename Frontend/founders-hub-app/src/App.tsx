import './App.css';
import React from 'react';
import LandingPage from './landing-page/LandingPage';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="top-bar">
        <div className="icon settings-icon">⚙️</div>
        <div className="icon profile-icon">👤</div>
      </div>
      <LandingPage/>
    </div>
  );
};

export default App;
