import { useState } from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
     <div>
      <h3 class="border-2 justify-items-center border-[#868585] font-extrabold inline p-2 text-black">
        THE REAL THING</h3>
      <h1 class="font-stretch-expanded font-extrabold">HUNGRY FOR MORE?</h1>
     </div>
    <div>
     <Carousel></Carousel>
  </div>

    </>
  )
}

export default App
