'use client'


import Image from "next/image";
import Header from "./components/navbar";
import NewHeader from "./components/header";

import { Separator } from "@/components/ui/separator";



export default function Home() {
  return (
    <div >
        <NewHeader />
        <Separator />
    </div>
  );
}
