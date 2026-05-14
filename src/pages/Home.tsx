import { useState } from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'

export default function Home() {

  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
     <div>
      <h3 className="border-2 justify-items-center border-[#868585] font-extrabold inline p-2 text-black">
        THE REAL THING</h3>
      <h1 className="font-stretch-expanded font-extrabold">HUNGRY FOR MORE?</h1>
     </div>
    <div>
     <Carousel></Carousel>
  </div>

    </>
  )
}

