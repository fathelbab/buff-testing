import offers from "../assets/Offers.png"

//TODO: Change into API instead of hardcoded images

export default function OurMenu() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 justify-items-center">
            <a>
              <div className="relative flex flex-col items-center pb-10">

    {/* IMAGE */}
    <img
      className="h-[220px] w-[220px] rounded-full object-cover"
      src={offers}
      alt="Offers"
    />

    {/* FLOATING ORANGE BUTTON */}
    <div className="absolute bottom-5 z-10 flex w-[190px] items-center justify-center rounded-xl bg-orange-500 py-4 text-xl font-extrabold text-white shadow-xl transition duration-300 group-hover:scale-105 group-hover:bg-orange-600">
      OFFERS
    </div>

  </div>
            </a>
            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700">
                        <span className="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700">
                        <span className="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700">
                        <span className="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700">
                        <span className="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700">
                        <span className="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700">
                        <span className="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>

            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700">
                        <span className="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700">
                        <span className="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
        </div>
    );
}
