import BBLogoDark from "../assets/imgs/LogoDark.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import LanguageSelect from "./LanguageSelect";
import AppStoreButtons from "./AppStoreButtons";

export default function Footer() {
    return (
        <footer className="bg-page-dark px-4 py-8 sm:px-6 sm:py-10 lg:px-20 lg:py-20">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="flex justify-start">
                    <img
                        src={BBLogoDark}
                        alt="Buffalo Burger Logo"
                        className="max-h-[48px] max-w-[224px] object-cover"
                    />
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-center sm:grid-cols-3 md:flex md:flex-1 md:justify-center md:gap-16 md:text-left">
                    <div className="text-headings-light md:pt-10">
                        <div className="h-auto w-full text-sm">CALL US</div>
                        <div className="text-3xl font-black sm:text-4xl">16320</div>
                    </div>
                    <div className="text-headings-light md:pt-10">
                        <a href="#" className="block h-[30px] w-full text-sm">HOME</a>
                        <a href="#" className="block h-[30px] w-full text-sm">MENU</a>
                        <a href="#" className="block h-[30px] w-full text-sm">CART</a>
                    </div>
                    <div className="text-headings-light md:pt-10">
                        <a href="#" className="block h-[30px] w-full text-sm">LOYALTY PROGRAM</a>
                        <a href="#" className="block h-[30px] w-full text-sm">OUR BRANCHES</a>
                    </div>
                    <div className="col-span-2 text-headings-light sm:col-span-1 md:pt-10">
                        <a href="#" className="block h-[30px] w-full text-sm">TERMS AND CONDITIONS</a>
                        <a href="#" className="block h-[30px] w-full text-sm">PRIVACY POLICY</a>
                    </div>
                </div>
                <div className="flex justify-start md:justify-end md:pt-10">
                    <AppStoreButtons layout="vertical" />
                </div>
            </div>

            <div className="flex flex-col-reverse gap-6 pt-10 text-left md:flex-row md:items-center md:justify-between md:pt-20 md:text-left">
                <div className="w-full text-sm text-text-muted md:w-fit md:self-end">
                    &copy; 2026 BUFFALO BURGER. All rights reserved.
                </div>

                <div className="flex flex-wrap items-center justify-start gap-4 md:justify-end">
                    <a href="#" aria-label="Follow us on X (Twitter)" className="text-headings-light"><FaXTwitter size={30} /></a>
                    <a href="#" aria-label="Follow us on Instagram" className="text-headings-light"><FaInstagram size={30} /></a>
                    <a href="#" aria-label="Follow us on Facebook" className="text-headings-light"><CiFacebook size={40} /></a>
                    <LanguageSelect />
                </div>
            </div>
        </footer>
    )
}
