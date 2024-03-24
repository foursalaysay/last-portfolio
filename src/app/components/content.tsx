import React from 'react'


export default function Content() {

// Component for the section you want to track scrolling
const ScrollingSection = () => {
    const setSectionScrolled = useScrollStore((state) => state.setSectionScrolled);
  
    const handleScroll = () => {
      // Example logic to determine if section is scrolled
      const isScrolled = window.scrollY > 100; // You can adjust this threshold
      setSectionScrolled(isScrolled);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return <section>Your scrolling section content here</section>;
  };

  return (
    <div>
      
    </div>
  )
}
