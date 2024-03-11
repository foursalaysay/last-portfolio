import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  
export default function Header() {

    const scrollToSection = () => {
        const selectElement = document.getElementById('themeSelector') as HTMLSelectElement | null;
        
        if (selectElement) {
          const selectedValue = selectElement.value;
          const selectedSection = document.getElementById(selectedValue + '-section');
      
          if (selectedSection) {
            selectedSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
  return (
    <div className='w-screen h-20 justify-between'>
        {/* LOGO HERE */}
        <h1>JK</h1>
        <div >
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent id='themeSelector' onChange={scrollToSection}>
                <SelectItem value="light">Pros</SelectItem>
                <SelectItem value="dark">Tech Stacks</SelectItem>
                <SelectItem value="system">Contact Me</SelectItem>
            </SelectContent>
        </Select>

        </div>
    </div>
  )
}
