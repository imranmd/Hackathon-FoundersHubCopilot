import './App.css';
import React from 'react';
import MiniDrawer from './Drawer';
import { LoadingProvider } from './components/Loader/LoadingContext';
import { StartUpProvider } from './components/Context/StartupContext';

const App: React.FC = () => {
  return (
    <StartUpProvider>
    <LoadingProvider>
      <div className="app">
        <MiniDrawer />
      </div>
    </LoadingProvider>
    </StartUpProvider>
  );
};

export default App;
