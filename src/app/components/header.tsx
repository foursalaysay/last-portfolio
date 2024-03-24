import React from 'react';
import { Facebook, Github, LucideIcon, Linkedin, CodeXml } from 'lucide-react';
import { Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';


export interface IDashProps {
  Icon: LucideIcon;
  className?: string;
  size?: number;
}

 export const DashIcon: React.FC<IDashProps> = ({
  Icon,
  className = '',
  size,
  ...props
}) => {
  return <Icon className={className} size={size} {...props} />;
};

const Icons = [
  {
    id: 1,
    DashIcon: Facebook,
    url : "https://www.facebook.com/johnkyle.salaysay.7"
  },
  {
    id: 2,
    DashIcon: Github,
    url : "https://github.com/foursalaysay"
  },
  {
    id: 3,
    DashIcon: Linkedin,
    url : "https://www.linkedin.com/in/john-kyle-salaysay-b58110295"
  },
  // Add more icons as needed
];

export default function NewHeader() {

    const  name : string = "< Software Engineer />"

  return (
    <div className='w-screen h-full bg-transparent flex flex-row justify-between p-10'>
      <div className='flex flex-col'>
        <h1 className='text-6xl font-Poppin mb-2'>John Kyle Salaysay</h1>
        <div className='flex flex-row gap-3 items-center justify-start'>
            <h5>{name}</h5>
        </div>
      </div>
      {/* SOCIALS */}
      <div className='flex flex-row gap-2 justify-center mt-7'>
        {Icons.map((iconData ) => (
          <a key={iconData.id}
          href={iconData.url}>
          <Button 
            variant="secondary" 
            className='relative overflow-hidden hover:border-none group'>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-900 transition-all duration-300 transform origin-left group-hover:w-full group-hover:h-1"></span>
              <DashIcon
                Icon={iconData.DashIcon}
                size={20} // Set the size as per your requirement
                className='' // Add any additional classes for styling
              />
            </Button>
          </a>

        ))}
       
    </div>
    </div>
  );
}
