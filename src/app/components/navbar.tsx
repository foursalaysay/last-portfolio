'use client'

import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { AlignJustify } from 'lucide-react';

  
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
    <div className='w-screen h-32 flex flex-row justify-between px-5'>
        {/* LOGO HERE */}
        <div >
        <Select>
            <SelectTrigger className='w-[150px] mr-10'> 
                <AlignJustify />
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
