import React from 'react';
import useAppBarTitle from './useAppBarTitle';

const DesignOptimization: React.FC = () => {
  useAppBarTitle("Design Optimization");
  return <h1 className="main-heading">Design Optimization Page</h1>;
};

export default DesignOptimization;