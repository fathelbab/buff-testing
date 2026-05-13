import myImage from '../assets/BBlogo.png';
import { TbShoppingBag } from "react-icons/tb";
import { BiStoreAlt } from "react-icons/bi";
import Select from 'react-select'


export default function Navbar() {
    return (
        <>
            <nav className="flex items-center justify-between p-4 text-white">
                <img
                    src={myImage}
                />
                <div className="flex gap-2">
                    <Select placeholder="Add Location"
                        classNames={{
   
                        }}/>
                    <button class="border-solid bg-[#E8E8E8] justify-items-center hover:bg-black hover:text-white  text-black font-bold py-2 px-4 rounded">
                        <TbShoppingBag />
                        PICKUP
                    </button>

                    <button class="bg-[#E8E8E8] justify-items-center hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded">
                        <BiStoreAlt />
                        DINE IN
                    </button>
                </div>

                <div className="flex gap-4">
                    <button class="border-solid bg-white hover:bg-black hover:text-white  text-black font-bold py-2 px-4 rounded">
                        LOGIN
                    </button>

                    <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        SIGN UP
                    </button>
                </div>
            </nav >
        </>
    );
}
