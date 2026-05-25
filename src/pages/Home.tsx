import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import AddressBox from '../components/AddressBox'
import OurMenu from '../components/OurMenu'
import FanFavorites from '../components/FanFavorites'
import Promos from '../components/Promos'
import BuffaloAppAd from '../components/BuffaloAppAd'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <>
      <div className="bg-page">
        <div>
          <Navbar />
        </div>
        <div>
          <div className="flex flex-col items-center pt-3 py-1 md:py-4">
            <span className="outline-1 
            outline-[#E8E8E8] 
            text-[#151515] 
            font-black 
            p-3 
            rounded  
            leading-5.5
            text-lg 
            md:text-[20px]
            md:p-4"> THE REAL THING </span>
          </div>
          <h2 className="justify-center text-3xl text-[#151515] leading-5 font-black text-center md:py-3 md:text-[60px]"> HUNGRY FOR MORE? </h2>
        </div>
        <div>
          <Carousel />
        </div>
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 lg:px-12">
          <AddressBox />
        </div>
        <div className="flex flex-col items-center pt-10 md:pt-14">
          <span className="outline-1 
            outline-[#E8E8E8] 
            text-[#151515] 
            font-black 
            p-3 
            rounded  
            leading-5.5
            text-lg 
            md:text-[20px]
            md:p-4"> OUR MENU </span>
        </div>
        <div className="pt-8 md:pt-12">
          <OurMenu />
        </div>
        <div className="flex flex-col items-center pt-10 md:pt-14">
          <span className="outline-1 
            outline-[#E8E8E8] 
            text-[#151515] 
            font-black 
            p-3 
            rounded  
            leading-5.5
            text-lg 
            md:text-[20px]
            md:p-4"> FAN FAVORITES </span>
        </div>
        <div className="pt-8 md:pt-12">
          <FanFavorites />
        </div>
        <Promos/>
        <BuffaloAppAd/>
        <Footer/>
      </div>
    </>
  )
}

