'use client'

import { useState } from 'react'

import NewHeader from "./components/header";
import SideContent from "./components/sidecontent";
import MainContent from "./components/main-content";

import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Element } from "react-scroll";


export default function Home() {

  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
<div className="w-screen h-screen flex flex-col">
  <div className="h-[172px] w-screen">
    <NewHeader />
  </div>
  <Separator />
  <div className="w-screen h-calc([100vh - 172px]) flex flex-row">
    <div className="w-[350px] h-full">
      
      <Element name="sideContent" className="sticky top-0 h-full overflow-y-auto">
        <SideContent />
      </Element>
    </div>

    <div className="w-calc([100vw - 350px]) h-full">
      
         <MainContent />
       

    </div>
  </div>
</div>

  );
}
