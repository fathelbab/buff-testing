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




const menuItems = [
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
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
                {menuItems.map((item) => (
                    <a key={item.label} className="group cursor-pointer">
                        <div className="relative flex flex-col items-center pb-10">

                            {/* CIRCULAR IMAGE */}
                            <img
                                className="h-[150px] w-[150px] md:h-[190px] md:w-[190px] lg:h-[236px] lg:w-[236px] rounded-full object-cover bg-[#F5E6D8]"
                                src={item.image}
                                alt={item.label}
                            />

                            {/* FLOATING LABEL */}
                            <div className="absolute bottom-5 z-10 flex w-[156px] md:w-[156px] lg:w-53 items-center justify-center rounded-xl bg-surface-brand p-3 text-center text-sm md:text-[24px] font-extrabold text-white shadow-xl transition duration-300 group-hover:bg-orange-600">
                                {item.label}
                            </div>

                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}