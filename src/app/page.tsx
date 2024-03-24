'use client'


import Image from "next/image";
import Header from "./components/navbar";
import NewHeader from "./components/header";
import SideContent from "./components/sidecontent";

import { Separator } from "@/components/ui/separator";



export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="h-[172px] w-full">
        <NewHeader />
      </div>
        <Separator />
      <div className="w-full h-calc([100vh - 172px]) flex flex-row">
        <div className="w-[400px] h-full">
          <SideContent />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
