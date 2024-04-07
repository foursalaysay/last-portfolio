'use client'



import NewHeader from "./components/header";
import SideContent from "./components/sidecontent";
import MainContent from "./components/main-content";

import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="h-[172px] w-screen">
        <NewHeader />
      </div>
        <Separator />
      <div className="w-screen h-calc([100vh - 172px])">
        <div className="w-[400px] h-full">
          <SideContent />
        </div>
          <div className="w-calc([100vw - 400px]) h-full">
            <MainContent />
          </div>
      </div>
    </div>
  );
}
