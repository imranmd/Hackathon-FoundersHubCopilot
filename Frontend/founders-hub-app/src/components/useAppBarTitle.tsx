import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAppBarTitle = (title: string) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    const handleTitleChange = () => {
      const event = new CustomEvent('titleChange', { detail: title });
      window.dispatchEvent(event);
    };
    handleTitleChange();

    return () => {
      window.removeEventListener('titleChange', handleTitleChange);
    };
  }, [location, title]);
};

export default useAppBarTitle;
