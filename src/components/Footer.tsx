import BBLogoDark from "../assets/imgs/LogoDark.svg";
import iOSDownload from "../assets/imgs/BBApp/iOSDownload.svg";
import AndroidDownload from "../assets/imgs/BBApp/AndroidDownload.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import LanguageSelect from "./LanguageSelect";

export default function Footer() {
    return (
        <div className="bg-page-dark object-fill p-6 sm:p-10 lg:p-20">
            <div >
                <img
                    src={BBLogoDark}
                    className="max-h-[48px] max-w-[224px] object-cover sm:mb-5"
                />
            </div>
            <div className="flex flex-col gap-10 md:flex-row md:justify-between md:text-center">
                <div className="pt-6 text-headings-light md:pt-10">
                    <div className="h-auto w-fit text-sm">CALL US</div>
                    <div className="text-4xl font-black">16320</div>
                </div>
                <div className="grid grid-cols-2 gap-6 py-5 md:flex md:gap-16 md:px-10 lg:px-20">
                    <div className="text-headings-light md:pt-10">
                        <div className="h-[30px] w-fit text-sm">HOME</div>
                        <div className="h-[30px] w-fit text-sm">MENU</div>
                        <div className="h-[30px] w-fit text-sm">CART</div>

                    </div>
                    <div className="text-headings-light md:pt-10">
                        <div className="h-[30px] w-fit text-sm">LOYALTY PROGRAM</div>
                        <div className="h-[30px] w-fit text-sm">OUR BRANCHES</div>
                    </div>
                    <div className="text-headings-light md:pt-10">
                        <div className="h-[30px] w-fit text-sm">TERMS AND CONDITIONS</div>
                        <div className="h-[30px] w-fit text-sm">PRIVACY POLICY</div>
                    </div>
                </div>
                <div className="flex md:ml-auto md:pt-10">
                    <div className="flex flex-row gap-4 md:flex-col">
                        <img
                            src={iOSDownload}
                            alt="App Store"
                            className="h-[60px] w-auto cursor-pointer transition hover:scale-105"
                        />
                        <img
                            src={AndroidDownload}
                            alt="Google Play"
                            className="h-[60px] w-auto cursor-pointer transition hover:scale-105"
                        />
                    </div>
                </div>

            </div>
            <div className="flex flex-col-reverse gap-6 pt-10 md:flex-row md:items-center md:justify-between md:pt-20">

                <div className="w-fit text-center text-sm text-[#898989] md:self-end lg:text-bottom">
                    © 2026 BUFFALO BURGER. All rights reserved.
                </div>

                <div className="flex flex-wrap items-center gap-5">
                    <FaXTwitter color="white" size={30}  />
                    <FaInstagram color="white" size={30} />
                    <CiFacebook color="white" size={40} />
                    <LanguageSelect />
                </div>

            </div>
        </div>
    )
}