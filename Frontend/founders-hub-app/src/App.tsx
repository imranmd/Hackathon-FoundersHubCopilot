import './App.css';
import React from 'react';
import MiniDrawer from './Drawer';
import { LoadingProvider } from './components/Loader/LoadingContext';

const App: React.FC = () => {
  return (
    <LoadingProvider>
      <div className="app">
        <MiniDrawer />
      </div>
    </LoadingProvider>
  );
};

export default App;
