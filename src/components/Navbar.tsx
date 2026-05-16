import myImage from '../assets/BBlogo.png';
import { TbShoppingBag } from "react-icons/tb";
import { BiStoreAlt } from "react-icons/bi";
import Select from 'react-select'
import LocationSelect from './LocationSelect';

export default function Navbar() {
    return (
        <>
            <nav className="flex items-center justify-between p-4 text-black">
                <img
                    className="pl-3"
                    src={myImage}
                />
                <div className="flex items-center gap-2">
                    <LocationSelect></LocationSelect>
                    <button className="border-solid bg-[#E8E8E8] justify-items-center hover:bg-black hover:text-white  text-black font-bold py-2 px-4 rounded">
                        <TbShoppingBag />
                        PICKUP
                    </button>

                    <button className="border-solid bg-[#E8E8E8] justify-items-center hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded">
                        <BiStoreAlt />
                        DINE IN
                    </button>
                </div>

                <div className="flex gap-4">
                    <button className="border-solid bg-white hover:bg-black hover:text-white  text-black font-bold py-2 px-4 rounded">
                        LOGIN
                    </button>

                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        SIGN UP
                    </button>
                </div>
            </nav >
        </>
    );
}
