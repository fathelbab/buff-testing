import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import AddressBox from '../components/AddressBox'
import OurMenu from '../components/OurMenu'
import FanFavorites from '../components/FanFavorites'
import Promos from '../components/Promos'

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
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 lg:px-12">
        <AddressBox />
      </div>
      <div className="flex flex-col items-center pt-10 md:pt-14">
        <span className="outline-1 outline-[#E8E8E8] p-3 rounded font-extrabold text-lg md:text-xl md:p-4"> OUR MENU </span>
      </div>
      <div className="pt-8 md:pt-12">
        <OurMenu />
      </div>
      <div className="flex flex-col items-center pt-10 md:pt-14">
        <span className="outline-1 outline-[#E8E8E8] p-3 rounded font-extrabold text-lg md:text-xl md:p-4"> FAN FAVORITES </span>
      </div>
      <div className="pt-8 md:pt-12">
        <FanFavorites />
      </div>
      <div className="py-14 px-58 max-w-[1400px]">
        <Promos/>
      </div>
    </>
  )
}

