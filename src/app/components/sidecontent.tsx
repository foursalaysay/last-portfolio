import React from 'react';
import { GraduationCap, Cpu, CodeXml, FolderGit2, LucideIcon } from 'lucide-react';

import { Link, animateScroll as scroll } from "react-scroll";

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
    DashIcon: CodeXml,
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
  return (
      <div className="flex flex-col items-start justify-center p-10">
        {sidecons.map(({ id, sideC, DashIcon, secName }) => (
        // activeClass="active"
        // to="section1"
        // spy={true}
        // smooth={true}
        // offset={-70}
        // duration={500}
         
         
             <Link
             key={id}
             to={secName}
             spy={true}
             smooth={true}
             offset={-70}
             duration={500}
             className="flex flex-row h-10 gap-3 bg-transparent items-center hover:bg-gray-200 p-1 w-3/4 rounded-lg cursor-pointer" 
             >
            <DashIcon size={20} />
            <h5 className='font-semibold text-sm'>{sideC}</h5>
            </Link>
          
          
        ))}
      </div>
  );
}
