"use client"

import React, { createContext, useContext, useState } from "react";

const HoverActiveContext = createContext();

const HoverActiveProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setActive(false);
  };

  const handleMouseDown = () => {
    setActive(true);
  };

  const handleMouseUp = () => {
    setActive(false);
  };

  const value = {
    active,
    hovered,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
    },
  };

  return (
    <HoverActiveContext.Provider value={value}>
      {children}
    </HoverActiveContext.Provider>
  );
};

const useHoverActive = () => {
  const context = useContext(HoverActiveContext);
  if (!context) {
    throw new Error("useHoverActive must be used within a HoverActiveProvider");
  }
  return context;
};

export { HoverActiveProvider, useHoverActive };
