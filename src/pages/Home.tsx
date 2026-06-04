import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import AddressBox from '../components/AddressBox'
import OurMenu from '../components/OurMenu'
import FanFavorites from '../components/FanFavorites'
import Promos from '../components/Promos'
import BuffaloAppAd from '../components/BuffaloAppAd'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'

export default function Home() {
  return (
    <div className="bg-page">
      <Navbar />

      <section>
        <div className="flex flex-col items-center pt-3 py-1 md:py-4">
          <SectionHeading label="THE REAL THING" />
        </div>
        <h2 className="text-center text-3xl font-black leading-5 text-text-primary md:py-3 md:text-[60px]">
          HUNGRY FOR MORE?
        </h2>
        <Carousel />
      </section>

      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 lg:px-12">
        <AddressBox />
      </div>

      <section>
        <div className="flex flex-col items-center pt-10 md:pt-14">
          <SectionHeading label="OUR MENU" />
        </div>
        <div className="pt-8 md:pt-12">
          <OurMenu />
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center pt-10 md:pt-14">
          <SectionHeading label="FAN FAVORITES" />
        </div>
        <div className="pt-8 md:pt-12">
          <FanFavorites />
        </div>
      </section>

      <Promos />
      <BuffaloAppAd />
      <Footer />
    </div>
  )
}
