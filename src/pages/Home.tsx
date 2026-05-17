import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'

export default function Home() {

  return (
    <>
      <div className="shadow">
        <Navbar></Navbar>
      </div>
      <div>
        <div className="flex flex-col items-center py-4">
          <span className="outline-1 outline-[#E8E8E8] p-2 rounded font-extrabold"> THE REAL THING </span>
        </div>
        <h2 className="justify-center text-headline-2xl text-4xl font-extrabold text-text-body-default text-center pb-3"> HUNGRY FOR MORE? </h2>
      </div>
      <div className="flex">
        <Carousel></Carousel>
      </div>

    </>
  )
}

