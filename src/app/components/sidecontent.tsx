
import React, { useState, useEffect } from 'react';
import { GraduationCap, Cpu, Binary , FolderGit2, LucideIcon } from 'lucide-react';

import { Link } from "react-scroll";
import { motion } from 'framer-motion'
import { Secular_One } from 'next/font/google';



export interface sideCProps {
  sideCProps: sideCType[];
}

export type sideCType = {
  id: number;
  sideC: string;
  DashIcon: LucideIcon;
  secName : string;
};

const sidecons: sideCType[] = [
  {
    id: 1,
    sideC: 'Educational Background',
    DashIcon: GraduationCap,
    secName :"section-1"
  },
  {
    id: 2,
    sideC: 'Tech Stack',
    DashIcon: Cpu,
    secName :"section-2"
  },
  {
    id: 3,
    sideC: 'Skills',
    DashIcon: Binary ,
    secName :"section-3"
  },
  {
    id: 4,
    sideC: 'Projects',
    DashIcon: FolderGit2,
    secName :"section-4"
  },
];

export default function SideContent() {

  const [ activeLink, setActiveLink ] = useState<string | null>(null);

  useEffect(() => {
    // Set the first link as active when the component mounts
    setActiveLink(sidecons[0].secName);
  }, []);

  const handleClick  = (secName : string ) => {
    setActiveLink(secName)
  }
  return (
    <div className="flex flex-col items-start justify-center p-10 gap-3">
      {sidecons.map(({ id, sideC, DashIcon, secName }) => (
        <motion.div 
        key={id} className="flex flex-row h-10 w-full" whileHover={{x : 20}}>
          
          <Link
          to={secName}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active" // Apply the active class when the link is active
          className={`flex flex-row h-full bg-transparent gap-2 items-center p-1 w-full rounded-lg cursor-pointer border-l-4 ${secName === activeLink ? 'border-sky-500' : 'border-transparent'} pl-2`}
          onClick={() => handleClick(secName)}
            // to={secName}
            // spy={true}
            // smooth={true}
            // offset={-70}
            // duration={500}
            // className="flex flex-row h-full bg-transparent items-center hover:bg-gray-200 p-1 w-full rounded-lg cursor-pointer"
            //  // Apply hover effect using Framer Motion directly to the Link
          >
           
                <DashIcon size={20} />
                <h5 className='font-semibold text-sm'>{sideC}</h5>
              
          </Link>
        </motion.div>
      ))}
    </div> 
  );
}
