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
        <div className="border-[2] border-border-default rounded-[8] p-[16]">
          <span className="text-headline-xs text-text-body-default"> THE REAL THING </span>
        </div>
        <h2 className="text-headline-2xl text-text-body-default text-center"> HUNGRY FOR MORE? </h2>
      </div>
      <div>
        <Carousel></Carousel>
      </div>

    </>
  )
}

