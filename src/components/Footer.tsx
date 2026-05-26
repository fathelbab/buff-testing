import BBLogoDark from "../assets/imgs/LogoDark.svg";
import iOSDownload from "../assets/imgs/BBApp/iOSDownload.svg";
import AndroidDownload from "../assets/imgs/BBApp/AndroidDownload.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import LanguageSelect from "./LanguageSelect";

export default function Footer() {
    return (
        <div className="bg-page-dark object-fill p-20">
            <div >
                <img
                    src={BBLogoDark}
                    className="max-w-[224px] max-h-[48px] object-cover sm:mb-5"
                />
            </div>
            <div className="md:flex md:text-center justify-start gap-x-25">
                <div className="md:pt-10 text-headings-light">
                    <div className="h-auto w-fit text-sm">CALL US</div>
                    <div className="text-4xl font-black">16320</div>
                </div>
                <div className="md:flex md:px-20 gap-65 py-5">
                    <div className="md:pt-10 text-headings-light">
                        <div className="h-[30px] w-fit text-sm">HOME</div>
                        <div className="h-[30px] w-fit text-sm">MENU</div>
                        <div className="h-[30px] w-fit text-sm">CART</div>

                    </div>
                    <div className="md:pt-10 text-headings-light">
                        <div className="h-[30px] w-fit text-sm">LOYALTY PROGRAM</div>
                        <div className="h-[30px] w-fit text-sm">OUR BRANCHES</div>
                    </div>
                    <div className="md:pt-10 text-headings-light">
                        <div className="h-[30px] w-fit text-sm">TERMS AND CONDITIONS</div>
                        <div className="h-[30px] w-fit text-sm">PRIVACY POLICY</div>
                    </div>
                </div>
                <div className="flex md:ml-auto md:pt-10">
                    <div className="flex flex-col gap-4">
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
            <div className="flex flex-col-reverse gap-6 pt-10 md:pt-20 md:flex-row md:items-center md:justify-between">

                <div className="md:self-end lg:text-bottom text-center w-fit text-sm text-[#898989]">
                    © 2026 BUFFALO BURGER. All rights reserved.
                </div>

                <div className="flex gap-5 items-center">
                    <FaXTwitter color="white" size={30}  />
                    <FaInstagram color="white" size={30} />
                    <CiFacebook color="white" size={40} />
                    <LanguageSelect />
                </div>

            </div>
        </div>
    )
}