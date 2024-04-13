import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function MainContent() {
  return (
    <>
        <div id='section-1' className=' bg-gray-400 w-calc([100vw - 350px]) h-screen'>
            <h1>hello world</h1>
        </div>
        <div id='section-2' className='h-screen bg-orange-400 w-full'>
            <h1>hello world</h1>
        </div>
        <div id='section-3' className='h-96 bg-gray-400 w-full'>
            <h1>hello world</h1>
        </div>
        <div id='section-4' className='h-screen bg-orange-400 w-full'>
            <h1>hello world</h1>
        </div>
    </>
  )
}
