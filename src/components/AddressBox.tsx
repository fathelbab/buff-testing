
import image from "../assets/imgs/AddressBox/DiningType.png"
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function AddressBox() {
    return (
        <div className="flex w-full flex-col items-stretch gap-4 rounded-3xl bg-[#FAFAFA] p-4 shadow-xl lg:flex-row lg:items-center lg:px-6 lg:pb-10 lg:pt-8">        
            {/* LEFT SECTION */}
            <div className="hidden md:flex items-center pr-1">
                <img
                    src={image}
                    className="object-scale-down md:w-70 md:p-2 lg:w-xl"
                />
            </div>

            {/* RIGHT SECTION */}
            <div className="flex-1 md:border-l md:border-[#E8E8E8] md:pl-6">
                <h3 className="pb-2 font-semibold">
                    Enter your Address
                </h3>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="relative min-w-0 flex-1">
                        <HiOutlineLocationMarker
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400"
                        />

                        <input
                            className="w-full rounded-xl border border-[#D8D8D8] py-3 pl-12 pr-4 text-sm sm:text-base"
                            placeholder="e.g Building 123, Street 25, Nasr City"
                        />
                    </div>
                    <div className="flex items-center gap-2 sm:shrink-0">
                        <button className="w-full rounded-xl bg-orange-500 px-4 py-3 font-bold text-white shadow-md transition hover:bg-orange-700 sm:w-32">
                            <span className="hidden md:inline">SEARCH HERE</span>
                            <span className="md:hidden">GO</span>
                        </button>
                        <span className="hidden md:flex gap-1">
                            <h3>or</h3>
                            <h3 className="font-semibold underline">LOGIN</h3>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
}
