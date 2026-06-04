import { useState } from "react";
import BBLogo from "../assets/imgs/BBlogo.png";
import { TbShoppingBag } from "react-icons/tb";
import { BiStoreAlt } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";
import LocationSelect from "./LocationSelect";
import Button from "./Button";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between p-4 text-text-primary shadow-sm md:px-8">
                <img
                    className="max-w-[224px] max-h-[48px] object-cover"
                    src={BBLogo}
                    alt="Buffalo Burger Logo"
                />

                <div className="hidden items-center gap-3 lg:flex">
                    <LocationSelect />

                    <Button variant="secondary" size="md" icon={<TbShoppingBag />}>
                        PICKUP
                    </Button>

                    <Button variant="secondary" size="md" icon={<BiStoreAlt />}>
                        DINE IN
                    </Button>
                </div>

                <div className="hidden gap-4 md:flex">
                    <Button variant="outlined" size="lg">
                        LOGIN
                    </Button>

                    <Button variant="primary" size="lg">
                        SIGN UP
                    </Button>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    className="flex items-center justify-center rounded-lg p-2 md:hidden"
                >
                    {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                </button>
            </nav>

            {menuOpen && (
                <div className="flex flex-col gap-4 bg-white px-4 pb-6 shadow-md md:hidden">
                    <LocationSelect />

                    <Button variant="secondary" className="flex h-[56px] items-center justify-center gap-2 rounded-4xl" icon={<TbShoppingBag size={20} />}>
                        PICKUP
                    </Button>

                    <Button variant="secondary" className="flex h-[56px] items-center justify-center gap-2 rounded-4xl" icon={<BiStoreAlt size={20} />}>
                        DINE IN
                    </Button>

                    <Button variant="outlined" className="flex h-[56px] items-center justify-center rounded-2xl">
                        LOGIN
                    </Button>

                    <Button variant="primary" className="flex h-[56px] items-center justify-center rounded-2xl">
                        SIGN UP
                    </Button>
                </div>
            )}
        </>
    );
}
