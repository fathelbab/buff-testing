import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import AddressBox from '../components/AddressBox'
import OurMenu from '../components/OurMenu'

export default function Home() {

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="flex flex-col items-center pt-3 py-1 md:py-4">
          <span className="outline-1 outline-[#E8E8E8] p-3 rounded font-extrabold text-lg md:text-xl md:p-4"> THE REAL THING </span>
        </div>
        <h2 className="justify-center text-3xl  font-extrabold text-center md:py-3 md:text-6xl"> HUNGRY FOR MORE? </h2>
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <AddressBox />
      </div>
      <div className="flex flex-col items-center pt-8 md:pt-12">
        <span className="outline-1 outline-[#E8E8E8] p-3 rounded font-extrabold text-lg md:text-xl md:p-4"> OUR MENU </span>
      </div>
      <div>
        <OurMenu />
      </div>

    </>
  )
}

