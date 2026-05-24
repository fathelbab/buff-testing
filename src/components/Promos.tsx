import Discount1 from "../assets/imgs/Promos/Discount1.png";
import Discount2 from "../assets/imgs/Promos/Discount2.png";
import Discount3 from "../assets/imgs/Promos/Discount3.png";


const discounts = [
    { image: Discount1, label: "10% Discount" },
    { image: Discount2, label: "25% Discount" },
    { image: Discount3, label: "50% Discount" },

]
export default function Promos() {
    return (
        <div className="mx-auto w-full max-w-[1400px]  px-4 py-14 md:px-8 lg:px-12">
            <div className="flex justify-between items-center gap-4 rounded-xl bg-surface-light">
                <div className="p-14 w-[451px]">
                    <div className="relative flex flex-col items-center pt-6">

                        {/* TOP LABEL */}
                        <div className="absolute top-4 z-20 w-fit rounded-lg bg-[#1A1A1A] px-4 py-2 text-center text-sm font-extrabold text-white md:text-[24px]">
                            JOIN THE
                        </div>

                        {/* MAIN CARD */}
                        <div className="mt-6 flex w-fit items-center justify-center rounded-lg border-2 border-[#E8E8E8] bg-[#FAFAFA] p-4 text-center text-sm font-black text-[#151515] md:text-[40px]">
                            BUFF CLUB
                        </div>

                    </div>
                    <div className="text-center py-1 text-[20px]">
                        Earn loyalty points with every order and
                        enjoy member exclusive benefits!
                    </div>
                    <a href="">
                        <div className="flex flex-col items-center bg-surface-brand text-center rounded-lg min-w-27 p-4 text-[16px] text-[#FAFAFA] font-black leading-5 ">
                            CREATE ACCOUNT
                        </div>
                    </a>
                    <div className="flex justify-center pt-1 items-center gap-2">
                        <div className="text-[16px] text-[#3A3A3A]">
                            ALREADY A MEMBER?
                        </div>
                        <a href="">
                            <div className="underline">
                                LOGIN
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex gap-[32px] p-8">
                {discounts.map((item) => (
                    <a key={item.label} href={item.label} className="group cursor-pointer">

                        {/* CIRCULAR IMAGE */}
                        <img
                            className=""
                            src={item.image}
                            alt={item.label}
                        />

                    </a>
                ))}
                </div>
            </div>
        </div>
    )
}