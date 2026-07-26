import image from "../assets/imgs/AddressBox/DiningType.png"
import { HiOutlineLocationMarker } from "react-icons/hi";
import Button from "./Button";

export default function AddressBox() {
    return (
        <div className="flex w-full flex-col items-stretch gap-4 rounded-3xl bg-surface-card p-4 shadow-xl lg:flex-row lg:items-center lg:px-6 lg:pb-10 lg:pt-8">
            <div className="hidden items-center pr-1 md:flex">
                <img
                    src={image}
                    alt="Dining type illustration"
                    className="object-scale-down md:w-70 md:p-2 lg:w-xl"
                />
            </div>

            <div className="flex-1 md:border-l md:border-border-default md:pl-6">
                <h3 className="pb-2 font-semibold">
                    Enter your Address
                </h3>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="flex min-w-0 flex-1 items-center rounded-xl border border-border-input px-4">
                        <HiOutlineLocationMarker className="mr-3 text-3xl text-gray-400" />

                        <input
                            id="address-input"
                            className="h-12 w-full bg-transparent outline-none text-sm sm:text-base"
                            placeholder="e.g Building 123, Street 25, Nasr City"
                        />
                    </div>
                    <div className="flex items-center gap-2 sm:shrink-0">
                        <Button variant="primary" className="w-full px-4 py-3 sm:w-32">
                            <span className="hidden md:inline">SEARCH HERE</span>
                            <span className="md:hidden">GO</span>
                        </Button>
                        <span className="hidden gap-1 md:flex">
                            <span className="text-text-secondary">or</span>
                            <button type="button" className="font-semibold underline text-text-primary">LOGIN</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
