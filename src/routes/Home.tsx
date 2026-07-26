import Carousel from '../components/Carousel'
import AddressBox from '../components/AddressBox'
import OurMenu from '../components/OurMenu'
import FanFavorites from '../components/FanFavorites'
import Promos from '../components/Promos'
import BuffaloAppAd from '../components/BuffaloAppAd'
import SectionHeading from '../components/SectionHeading'

export default function Home() {
  return (
<>
      <section>
      
        <Carousel />
      </section>

      <div className="mx-auto w-full max-w-350 px-4 md:px-8 lg:px-12">
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

</>
  )
}
