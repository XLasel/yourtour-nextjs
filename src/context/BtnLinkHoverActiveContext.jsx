"use client";
import React, { createContext, useContext, useState } from "react";

export const BtnLinkHoverActiveContext = createContext();

export const BtnLinkHoverActiveProvider = ({ children }) => {
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
    <BtnLinkHoverActiveContext.Provider value={value}>
      {children}
    </BtnLinkHoverActiveContext.Provider>
  );
};

export const useBtnLinkHoverActive = () => {
  const context = useContext(BtnLinkHoverActiveContext);
  if (!context) {
    throw new Error(
      "useBtnLinkHoverActive must be used within a BtnLinkHoverActiveProvider"
    );
  }
  return context;
};
