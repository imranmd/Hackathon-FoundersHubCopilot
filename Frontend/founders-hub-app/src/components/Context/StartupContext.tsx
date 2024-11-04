// StartUpContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface StartUpContextProps {
  data: any;
  error: string | null;
}

const StartUpContext = createContext<StartUpContextProps | undefined>(undefined);

export const StartUpProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://foundershub-backend-webapp-cya8bgevbtfeekey.southindia-01.azurewebsites.net/startups/1/?format=json");
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        setError((error as Error).message);
      }
    };
    getData();
  }, []);

  return (
    <StartUpContext.Provider value={{ data, error }}>
      {children}
    </StartUpContext.Provider>
  );
};

export const useStartUp = () => {
  const context = useContext(StartUpContext);
  if (!context) {
    throw new Error('useStartUp must be used within a StartUpProvider');
  }
  return context;
};