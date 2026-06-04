import offers from "../assets/imgs/OurMenu/Offers.png"
import beef from "../assets/imgs/OurMenu/Beef.png"
import chicken from "../assets/imgs/OurMenu/Chicken.png"
import appetizers from "../assets/imgs/OurMenu/Appetizers.png"
import dessert from "../assets/imgs/OurMenu/Dessert.png"
import the100 from "../assets/imgs/OurMenu/The100.png"
import keto from "../assets/imgs/OurMenu/Keto.png"
import drinks from "../assets/imgs/OurMenu/Drinks.png"
import sauces from "../assets/imgs/OurMenu/Sauces.png"
import buffstuff from "../assets/imgs/OurMenu/BuffStuff.png"

interface MenuItem {
    image: string
    label: string
}

const menuItems: MenuItem[] = [
    { image: offers, label: "OFFERS" },
    { image: beef, label: "BEEF" },
    { image: chicken, label: "CHICKEN" },
    { image: appetizers, label: "APPETIZERS" },
    { image: dessert, label: "DESSERT" },
    { image: the100, label: "THE 100" },
    { image: keto, label: "KETO & LIGHT" },
    { image: drinks, label: "DRINKS" },
    { image: sauces, label: "SAUCES" },
    { image: buffstuff, label: "BUFF STUFF" },
]

export default function OurMenu() {
    return (
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 lg:px-12">
            <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:hidden">
                {menuItems.map((item) => (
                    <a key={item.label} className="group cursor-pointer shrink-0 snap-start">
                        <div className="relative flex w-[120px] flex-col items-center pb-10">
                            <img
                                className="h-[120px] w-[120px] rounded-full bg-surface-warm object-cover"
                                src={item.image}
                                alt={item.label}
                                loading="lazy"
                            />
                            <div className="absolute bottom-5 z-10 flex w-[120px] items-center justify-center rounded-xl bg-surface-brand p-2 text-center text-[10px] font-extrabold text-white shadow-xl transition duration-300 group-hover:bg-action-hover">
                                {item.label}
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="hidden grid-cols-2 justify-items-center gap-x-2 gap-y-6 sm:grid md:grid-cols-3 lg:grid-cols-5">
                {menuItems.map((item) => (
                    <a key={item.label} className="group cursor-pointer">
                        <div className="relative flex flex-col items-center pb-10">
                            <img
                                className="h-[120px] w-[120px] rounded-full bg-surface-warm object-cover sm:h-[150px] sm:w-[150px] md:h-[190px] md:w-[190px] lg:h-[236px] lg:w-[236px]"
                                src={item.image}
                                alt={item.label}
                                loading="lazy"
                            />
                            <div className="absolute bottom-5 z-10 flex w-[120px] items-center justify-center rounded-xl bg-surface-brand p-2 text-center text-[10px] font-extrabold text-white shadow-xl transition duration-300 group-hover:bg-action-hover sm:w-[156px] sm:p-3 sm:text-sm md:text-[24px] lg:w-53">
                                {item.label}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
