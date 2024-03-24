'use client'

import React, { useState, createContext, useContext, useEffect } from 'react';

// Provider component to manage scrolling state
const ScrollProvider = ({ children } : React.ReactNode) => {
    const [isSectionScrolled, setIsSectionScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 100; // Adjust as needed
        setIsSectionScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <ScrollContext.Provider value={{ isSectionScrolled }}>
        {children}
      </ScrollContext.Provider>
    );
  };