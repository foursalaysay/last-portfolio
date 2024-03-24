
'use client'

import React from 'react'
import { IDashProps, DashIcon } from './header'
import {
    GraduationCap,
    Cpu,
    CodeXml,
    FolderGit2
} from 'lucide-react'

const sidecons = [
    {
        id : 1,
        sideC : "Educational Background",
        DashIcon : GraduationCap
    },
    {
        id : 2,
        SideC : "Tech Stack",
        DashIcon : Cpu 
    },
    {
        id : 3,
        sideC : "Skills",
        DashIcon : CodeXml 
    },
    {
        id : 4,
        sideC : "Projects",
        DashIcon : FolderGit2
    }
]



export default function SideContent() {

  const {id, sideC, DashIcon }  : any = sidecons;

  return (
    <div className='w-full h-full flex items-center justify-end'>
        <div className='flex flex-col items-center justify-center'>
            {sidecons.map(() => (
                <div key={id} className='flex flex-row gap-0 bg-transparent'>
                    <DashIcon
                        Icon={DashIcon} 
                        size={20}/>
                    <h5>{sideC}</h5>
                </div>
            ))}
        </div>
    </div>
  )
}
