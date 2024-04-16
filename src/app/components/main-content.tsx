import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator';
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

import { useStore } from '../state-management/zustand';
import { motion } from 'framer-motion'

export default function MainContent() {

    const { activeLink } = useStore();

  return (
    <div className='w-calc([100vw - 350px]) h-screen'>
        
        { activeLink === 'section-1' && (
                <motion.div
                    initial={{ opacity: 0, x: -100 }} // Initial animation state (opacity: 0 and moved left)
                    animate={{ opacity: 1, x: 0 }} // Animation when activeLink is 'section-1' (opacity: 1 and moved to original position)
                    transition={{ duration: 0.5 }} 
                    
                    className='m-5'
                    >
                        <h1 className='text-5xl text-black'>Cebu Technological University</h1>
                        <div className='ml-5 mt-5'>
                            <p>Bachelor of Science in Information Technology</p>
                            <p>2021 - 2025</p>
                        </div>
                        <Link 
                        href=''
                        className={buttonVariants({ variant: "outline" })}>See More
                        </Link>

                        
                </motion.div>
            )
        }
        { activeLink === 'section-2' && (
                <motion.div
          initial={{ opacity: 0, x: -100 }} // Initial animation state (opacity: 0 and moved left)
          animate={{ opacity: 1, x: 0 }} // Animation when activeLink is 'section-1' (opacity: 1 and moved to original position)
          transition={{ duration: 0.5 }} // Animation duration
        >
          <h1>Animated Div for section-1</h1>
        </motion.div>
            )
        }
        { activeLink === 'section-3' && (
                <motion.div
          initial={{ opacity: 0, x: -100 }} // Initial animation state (opacity: 0 and moved left)
          animate={{ opacity: 1, x: 0 }} // Animation when activeLink is 'section-1' (opacity: 1 and moved to original position)
          transition={{ duration: 0.5 }} // Animation duration
        >
          <h1>Animated Div for section-1</h1>
        </motion.div>
            )
        }
        { activeLink === 'section-4' && (
                <motion.div
          initial={{ opacity: 0, x: -100 }} // Initial animation state (opacity: 0 and moved left)
          animate={{ opacity: 1, x: 0 }} // Animation when activeLink is 'section-1' (opacity: 1 and moved to original position)
          transition={{ duration: 0.5 }} // Animation duration
        >
          <h1>Animated Div for section-1</h1>
        </motion.div>
            )
        }
        
        {/* <div id='section-2' className='h-full bg-orange-400 w-full'>
            <h1>hello world</h1>
        </div>
        <div id='section-3' className='h-full bg-gray-400 w-full'>
            <h1>hello world</h1>
        </div>
        <div id='section-4' className='h-full bg-orange-400 w-full'>
            <h1>hello world</h1>
        </div> */}
    </div>
  )
}
