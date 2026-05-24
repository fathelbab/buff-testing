import BBAppBlack from "../assets/imgs/BBApp/BBAppIconBlack.png";
import BBAppWhite from "../assets/imgs/BBApp/BBAppWhite.png";
import QRCode from "../assets/imgs/BBApp/QRCode.png";
import iOSDownload from "../assets/imgs/BBApp/iOSDownload.svg";
import AndroidDownload from "../assets/imgs/BBApp/AndroidDownload.svg";

export default function BuffaloAppAd() {
    return (
        <div className="mx-auto w-full max-w-[1400px] px-4 py-14 md:px-8 lg:px-12">

            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">

                {/* PHONES SECTION */}
                <div className="relative flex min-w-[45%] items-end justify-center">

                    {/* BACK PHONE */}
                    <img
                        src={BBAppBlack}
                        alt="Buffalo App Black"
                        className="
              relative
              z-10
              w-full
              max-h-150
              object-scale-down"
                    />

                    {/* FRONT PHONE */}
                    <img
                        src={BBAppWhite}
                        alt="Buffalo App White"
                        className="
                        relative
                        z-20
                        -ml-12
                        mt-16
                        w-full
                        max-h-150
                        object-scale-down
            "
                    />

                </div>

                {/* RIGHT CONTENT */}
                <div className="w-full max-w-[620px] rounded-3xl bg-[#F4F4F4] p-6 shadow-lg md:p-10 ">

                    {/* TITLE */}
                    <div className="relative flex flex-col items-center">

                        <div className="absolute -top-5 z-20 rounded-xl bg-orange-500 px-5 py-2 text-sm font-black text-white md:text-lg">
                            GET THE
                        </div>

                        <div className="rounded-xl bg-white px-6 py-3 text-center text-3xl font-black text-[#151515] shadow-sm md:text-5xl">
                            REAL DEAL
                        </div>

                    </div>

                    {/* DESCRIPTION */}
                    <p className="mx-auto max-w-[520px] pt-8 text-center text-sm text-[#3A3A3A] md:text-xl">
                        Download the app for unbeatable deals,
                        personalized food suggestions and loyalty
                        points that actually matter.
                    </p>

                    {/* QR + STORES */}
                    <div className="mx-auto mt-8 flex w-fit flex-col items-center gap-5 rounded-3xl bg-[#1A1A1A] p-5 md:flex-row">

                        {/* QR */}
                        <img
                            src={QRCode}
                            alt="QR Code"
                            className="w-[100px] rounded-lg bg-white p-2 md:w-[120px]"
                        />

                        {/* STORE BUTTONS */}
                        <div className="flex flex-col gap-3">

                            <img
                                src={AndroidDownload}
                                alt="Google Play"
                                className="
                  h-[45px]
                  md:h-[52px]
                  w-auto
                  cursor-pointer
                  transition
                  hover:scale-105
                "
                            />

                            <img
                                src={iOSDownload}
                                alt="App Store"
                                className="
                  h-[45px]
                  md:h-[52px]
                  w-auto
                  cursor-pointer
                  transition
                  hover:scale-105
                "
                            />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}