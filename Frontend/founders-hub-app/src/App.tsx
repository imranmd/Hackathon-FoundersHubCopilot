import './App.css';
import React from 'react';
import LandingPage from './landing-page/LandingPage';
import MiniDrawer from './Drawer';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* <div className="top-bar">
        <div className="icon settings-icon">⚙️</div>
        <div className="icon profile-icon">👤</div>
      </div>
      <h1 className="main-heading">Welcome to Founders Hub</h1> */}
      <LandingPage/>
      <MiniDrawer />
    </div>
  );
};

export default App;
