import BBAppBlack from "../assets/imgs/BBApp/BBAppIconBlack.png";
import BBAppWhite from "../assets/imgs/BBApp/BBAppWhite.png";
import QRCode from "../assets/imgs/BBApp/QRCode.png";
import iOSDownload from "../assets/imgs/BBApp/iOSDownload.svg";
import AndroidDownload from "../assets/imgs/BBApp/AndroidDownload.svg";

export default function BuffaloAppAd() {
    return (
        <div className="mx-auto w-full max-w-[1400px] px-4 py-14 md:px-8 lg:px-12">

            <div className="flex flex-col items-center rounded-3xl p-6 gap-15 md:flex-row md:p-10">
                <div className="hidden md:flex flex-row max-w-600">
                    <img
                        src={BBAppBlack}
                        alt="Buffalo App Black"
                        className="w-[288px] h-[594px] object-cover md:relative md:-top-12"
                    />

                    <img
                        src={BBAppWhite}
                        alt="Buffalo App White"
                        className="w-[288px] h-[594px] object-cover md:relative md:-bottom-12"
                    />
                </div>
                <div className="max-w-[700px] rounded-3xl bg-[#F4F4F4] p-6 shadow-lg md:p-10 justify-end">
                    <div className="relative flex flex-col items-center">
                        <div className="absolute -top-8 z-20 rounded-xl bg-orange-500 px-5 py-2 text-sm font-black text-white md:text-xl">
                            GET THE
                        </div>
                        <div className="rounded-xl bg-white px-6 py-3 text-center text-3xl font-black text-[#151515] shadow-sm md:text-5xl">
                            REAL DEAL
                        </div>
                    </div>

                    <p className="mx-auto max-w-[520px] pt-8 text-center text-sm text-[#3A3A3A] md:text-2xl">
                        Download the app for unbeatable deals,
                        personalized food suggestions and loyalty
                        points that actually matter.
                    </p>
                    <div className="mx-auto mt-8 flex w-fit flex-col items-center gap-6 rounded-3xl bg-[#1A1A1A] p-6 md:flex-row">
                        <img
                            src={QRCode}
                            alt="QR Code"
                            className="w-[120px] rounded-lg bg-white p-2"
                        />
                        <div className="flex flex-col gap-4">

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