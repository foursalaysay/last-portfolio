import React, { useEffect } from 'react'
import { useScrollStore } from '../state-management/zustand';


export default function Content() {

// Component for the section you want to track scrolling
const ScrollingSection = () => {
    const setSectionScrolled = useScrollStore((state) => state.setSectionScrolled);
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
      // Example logic to determine if section is scrolled
      const isScrolled1 = window.scrollY < 100; // You can adjust this threshold
      setSectionScrolled(isScrolled1);

      const isScrolled2 = window.scrollY > 100 && window.scrollY < 200; // You can adjust this threshold
      setSectionScrolled(isScrolled2);


    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
  
    return <section>Your scrolling section content here</section>;
  };

  return (
    <div>
      
    </div>
  )
}
