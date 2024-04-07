import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function MainContent() {
  return (
    <ScrollArea className="w-calc([100vw - 400px]) h-full">
        <div id='section-1' className='h-96 bg-gray-400 w-full'>
            <h1   h1>hello world</h1>
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
    </ScrollArea>
  )
}
