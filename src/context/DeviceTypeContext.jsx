'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const DeviceTypeContext = createContext();

export const DeviceTypeProvider = ({ children }) => {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setDeviceType('desktop');
      } else if (width >= 1000) {
        setDeviceType('tablet');
      } else {
        setDeviceType('mobile');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <DeviceTypeContext.Provider value={deviceType}>
      {children}
    </DeviceTypeContext.Provider>
  );
};

export const useDeviceType = () => {
  return useContext(DeviceTypeContext);
};
