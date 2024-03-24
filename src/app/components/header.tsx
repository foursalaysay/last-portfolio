import React from 'react';
import { Facebook, Github, LucideIcon, Linkedin, CodeXml } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';


interface IDashProps {
  Icon: LucideIcon;
  className?: string;
  size?: number;
}

const DashIcon: React.FC<IDashProps> = ({
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
  },
  {
    id: 2,
    DashIcon: Github,
  },
  {
    id: 3,
    DashIcon: Linkedin,
  },
  // Add more icons as needed
];

export default function NewHeader() {

    const [hoveredIcons, setHoveredIcons] = useState<boolean[]>(Array(Icons.length).fill(false));

    const handleIconHover = (index: number, isHovered: boolean) => {
      const newHoveredIcons = [...hoveredIcons];
      newHoveredIcons[index] = isHovered;
      setHoveredIcons(newHoveredIcons);
    };

  return (
    <div className='w-screen h-full bg-transparent flex flex-row justify-between p-10'>
      <div className='flex flex-col'>
        <h1 className='text-6xl font-Poppin mb-2'>John Kyle Salaysay</h1>
        <div className='flex flex-row gap-3 items-center justify-start'>
            <CodeXml size={20} />
            <h5>Software Engineer</h5>
        </div>
       
      </div>
      {/* SOCIALS */}
      <div className='flex flex-row gap-2 justify-center'>
      {Icons.map((iconData, index) => (
        <>
        
        <Button key={iconData.id} 
        variant="secondary" 
        className='hover:border-x-black hover:border-2'
        onMouseEnter={() => handleIconHover(index, true)}
        onMouseLeave={() => handleIconHover(index, false)}

        > {/* Assuming you want contained buttons */} <DashIcon
            Icon={iconData.DashIcon}
            size={20} // Set the size as per your requirement
            className='' // Add any additional classes for styling
          />
        </Button>
        {hoveredIcons[index] && (
            console.log('PUT HERE FIRST MODAL')
          )}
        </>
        
      ))}
       
    </div>
    </div>
  );
}
