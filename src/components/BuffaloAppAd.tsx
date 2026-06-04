import BBAppBlack from "../assets/imgs/BBApp/BBAppIconBlack.png";
import BBAppWhite from "../assets/imgs/BBApp/BBAppWhite.png";
import QRCode from "../assets/imgs/BBApp/QRCode.png";
import iOSDownload from "../assets/imgs/BBApp/iOSDownload.svg";
import AndroidDownload from "../assets/imgs/BBApp/AndroidDownload.svg";

export default function BuffaloAppAd() {
    return (
        <div className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:py-14 md:px-8 lg:px-12">

            <div className="flex flex-col items-center gap-8 rounded-3xl p-4 sm:p-6 md:flex-row md:p-10">
                <div className="hidden max-w-[600px] flex-row md:flex">
                    <img
                        src={BBAppBlack}
                        alt="Buffalo App Black"
                        className="h-[594px] w-[288px] object-cover md:relative md:-top-12"
                    />

                    <img
                        src={BBAppWhite}
                        alt="Buffalo App White"
                        className="h-[594px] w-[288px] object-cover md:relative md:-bottom-12"
                    />
                </div>
                <div className="w-full max-w-[700px] rounded-3xl bg-[#F4F4F4] p-4 shadow-lg sm:p-6 md:p-10">
                    <div className="relative flex flex-col items-center">
                        <div className="absolute -top-6 z-20 rounded-xl bg-orange-500 px-4 py-2 text-xs font-black text-white sm:-top-8 sm:text-sm md:text-xl">
                            GET THE
                        </div>
                        <div className="rounded-xl bg-white px-4 py-2.5 text-center text-2xl font-black text-[#151515] shadow-sm sm:px-6 sm:py-3 sm:text-3xl md:text-5xl">
                            REAL DEAL
                        </div>
                    </div>

                    <p className="mx-auto max-w-[520px] pt-5 text-center text-xs leading-5 text-[#3A3A3A] sm:pt-8 sm:text-sm md:text-2xl">
                        Download the app for unbeatable deals,
                        personalized food suggestions and loyalty
                        points that actually matter.
                    </p>
                    <div className="mx-auto mt-6 flex w-full max-w-fit flex-col items-center gap-4 rounded-3xl bg-[#1A1A1A] p-4 sm:mt-8 sm:gap-6 sm:p-6 md:flex-row">
                        <img
                            src={QRCode}
                            alt="QR Code"
                            className="w-[96px] rounded-lg bg-white p-2 sm:w-[110px] md:w-[120px]"
                        />
                        <div className="flex flex-col gap-3 sm:gap-4">

                            <img
                                src={AndroidDownload}
                                alt="Google Play"
                                className="h-[60px] w-auto cursor-pointer transition hover:scale-105"
                            />

                            <img
                                src={iOSDownload}
                                alt="App Store"
                                className="h-[60px] w-auto cursor-pointer transition hover:scale-105"
                            />

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}