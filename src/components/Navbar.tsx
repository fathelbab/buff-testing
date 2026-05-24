import { useState } from "react";
import myImage from "../assets/imgs/BBlogo.png";

import { TbShoppingBag } from "react-icons/tb";
import { BiStoreAlt } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";

import LocationSelect from "./LocationSelect";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between p-4 text-black shadow-sm md:px-8">

                <img
                    className="w-[125px] md:w-[150px] object-scale-down"
                    src={myImage}
                    alt="Logo"
                />

                <div className="hidden items-center gap-3 lg:flex">
                    <LocationSelect/>

                    <button className="bg-[#E8E8E8] shadow-md justify-items-center hover:bg-black hover:text-white  text-black font-bold py-2 px-4 rounded-lg">
                        <TbShoppingBag />
                        PICKUP
                    </button>

                    <button className="bg-[#E8E8E8] shadow-md justify-items-center hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-lg">
                        <BiStoreAlt />
                        DINE IN
                    </button>
                </div>

                <div className="hidden gap-4 md:flex">
                    <button className="flex h-[56px] w-[130px] items-center justify-center rounded-xl border border-[#B0B0B0] bg-white font-bold shadow-md transition hover:bg-black hover:border-white hover:text-white">
                        LOGIN
                    </button>

                    <button className="flex h-[56px] w-[130px] items-center justify-center rounded-xl bg-orange-500 font-bold text-white shadow-md transition hover:bg-orange-700">
                        SIGN UP
                    </button>
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex items-center justify-center rounded-lg p-2 md:hidden"
                >
                    {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                </button>
            </nav>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="flex flex-col gap-4 bg-white px-4 pb-6 shadow-md md:hidden">

                    <LocationSelect />

                    <button className="flex h-[56px] w-[32] items-center justify-center gap-2 rounded-4xl bg-[#E8E8E8] font-bold shadow-md">
                        <TbShoppingBag size={20} />
                        PICKUP
                    </button>

                    <button className="flex h-[56px] items-center justify-center gap-2 rounded-4xl bg-[#E8E8E8] font-bold shadow-md">
                        <BiStoreAlt size={20} />
                        DINE IN
                    </button>

                    <button className="flex h-[56px] items-center justify-center rounded-2xl border border-[#B0B0B0] bg-white font-bold shadow-md">
                        LOGIN
                    </button>

                    <button className="flex h-[56px] items-center justify-center rounded-2xl bg-orange-500 font-bold text-white shadow-md">
                        SIGN UP
                    </button>
                </div>
            )}
        </>
    );
}