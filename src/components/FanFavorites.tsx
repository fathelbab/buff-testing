import apple from "../assets/imgs/FanFav/ApplePie.png"
import chicken from "../assets/imgs/FanFav/ChickenMat.png"
import wings from "../assets/imgs/FanFav/ChickenWing.png"
import truffle from "../assets/imgs/FanFav/TruffleFam.png"

interface FavoriteItem {
    image: string
    label: string
    category: string
}

const favorites: FavoriteItem[] = [
    { image: truffle, label: "TRUFFLE FAMILY", category: "BEEF" },
    { image: wings, label: "CHICKEN WINGS", category: "APPETIZERS" },
    { image: chicken, label: "CHICKEN MATTRESS", category: "CHICKEN" },
    { image: apple, label: "APPLE PIE", category: "DESSERT" },
]

export default function FanFavorites() {
    return (
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 lg:px-12">
            <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:hidden">
                {favorites.map((item) => (
                    <a key={item.label} className="group cursor-pointer shrink-0 snap-start">
                        <div className="relative flex w-[140px] flex-col items-center pb-10">
                            <img
                                className="h-[140px] w-[140px] rounded-lg bg-surface-warm object-cover"
                                src={item.image}
                                alt={item.label}
                                loading="lazy"
                            />
                            <div className="absolute bottom-0 z-10 flex w-fit items-center justify-center rounded-lg bg-surface-card px-2 py-2 text-center text-[12px] font-extrabold outline-2 outline-border-default">
                                <div className="absolute -top-5 z-20 flex w-fit items-center justify-center rounded-md bg-surface-brand px-1 py-1 text-[12px] font-extrabold text-white shadow-xl transition duration-300 group-hover:bg-action-hover">
                                    {item.category}
                                </div>
                                {item.label}
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="hidden grid-cols-1 justify-items-center gap-8 sm:grid lg:grid-cols-4">
                {favorites.map((item) => (
                    <a key={item.label} className="group cursor-pointer">
                        <div className="relative flex flex-col items-center pb-10">
                            <img
                                className="h-[140px] w-[140px] rounded-lg bg-surface-warm object-cover sm:h-[150px] sm:w-[150px] md:h-[190px] md:w-[190px] lg:h-[310px] lg:w-[310px]"
                                src={item.image}
                                alt={item.label}
                                loading="lazy"
                            />
                            <div className="absolute bottom-0 z-10 flex w-fit items-center justify-center rounded-lg bg-surface-card px-2 py-2 text-center text-[12px] font-extrabold outline-2 outline-border-default md:text-[24px] md:p-2">
                                <div className="absolute -top-5 z-20 flex w-fit items-center justify-center rounded-md bg-surface-brand px-1 py-1 text-[12px] font-extrabold text-white shadow-xl transition duration-300 group-hover:bg-action-hover lg:bottom-11">
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
