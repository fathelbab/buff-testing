import apple from "../assets/imgs/FanFav/ApplePie.png"
import chicken from "../assets/imgs/FanFav/ChickenMat.png"
import wings from "../assets/imgs/FanFav/ChickenWing.png"
import truffle from "../assets/imgs/FanFav/TruffleFam.png"


const menuItems = [
    { image: truffle, label: "TRUFFLE FAMILY", category: "BEEF" },
    { image: wings, label: "CHICKEN WINGS", category: "APPETIZERS" },
    { image: chicken, label: "CHICKEN MATTRESS", category: "CHICKEN" },
    { image: apple, label: "APPLE PIE", category: "DESSERT" },
]

export default function FanFavorites() {
    return (
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
                {menuItems.map((item) => (
                    <a key={item.label} className="group cursor-pointer">
                        <div className="relative flex flex-col items-center pb-10">
                            <img
                                className="h-[140px] w-[140px] rounded-lg bg-[#F5E6D8] object-cover sm:h-[150px] sm:w-[150px] md:h-[190px] md:w-[190px] lg:h-[310px] lg:w-[310px]"
                                src={item.image}
                                alt={item.label}
                            />
                            
                            <div className="absolute bottom-0 z-10 flex w-fit items-center justify-center rounded-lg bg-[#FAFAFA] px-2 py-2 text-center text-[12px] font-extrabold outline-2 outline-[#E8E8E8] md:text-[24px] md:p-2">
                                <div className="absolute -top-5 z-20 flex w-fit items-center justify-center rounded-md bg-surface-brand px-1 py-1 text-[12px] font-extrabold text-white shadow-xl transition duration-300 group-hover:bg-orange-600 lg:bottom-11">
                                    {item.category}
                                </div>
                                {item.label}
                            </div>

                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}