import { useState, useEffect } from 'react';

function useResponsiveSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width < 500 ? 10 : 20;
}

export default useResponsiveSize;