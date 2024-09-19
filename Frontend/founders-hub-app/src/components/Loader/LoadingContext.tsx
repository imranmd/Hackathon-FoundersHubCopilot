// LoadingContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface LoadingContextProps {
  loading: boolean;
  setLoading: (loading: boolean, message?: string) => void;
  loadingMessage: string;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoadingState] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const setLoading = (loading: boolean, message: string = '') => {
    setLoadingState(loading);
    setLoadingMessage(message);
  };

  return (
    <LoadingContext.Provider value={{ loading, setLoading, loadingMessage }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};