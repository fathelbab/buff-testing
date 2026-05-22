import offers from "../assets/Offers.png"

const menuItems = [
    { image: offers, label: "OFFERS" },
    { image: offers, label: "BEEF" },
    { image: offers, label: "CHICKEN" },
    { image: offers, label: "APPETIZERS" },
    { image: offers, label: "DESSERT" },
    { image: offers, label: "THE 100" },
    { image: offers, label: "KETO & LIGHT" },
    { image: offers, label: "DRINKS" },
    { image: offers, label: "SAUCES" },
    { image: offers, label: "BUFF STUFF" },
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
                            <div className="absolute bottom-0 z-10 flex w-[120px] md:w-[155px] lg:w-[180px] items-center justify-center rounded-xl bg-orange-500 py-3 text-sm md:text-base font-extrabold text-white shadow-xl transition duration-300 group-hover:bg-orange-600">
                                {item.label}
                            </div>

                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}