import offers from "../assets/Offers.png"

//TODO: Change into API instead of hardcoded images

export default function OurMenu() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            <a>
                <div className="relative w-59 h-59">
                    <img
                        className="rounded-full w-xs"
                        sizes="100vw"
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700"><span class="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700"><span class="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700"><span class="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700"><span class="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700"><span class="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a> <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700"><span class="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700"><span class="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>

            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700"><span class="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
            <a>
                <div className="w-59 h-59">
                    <img
                        className="rounded-full "
                        src={offers}
                    />
                    <div className="flex items-center justify-center w-[190] py-[16] lg:w-[236] rounded-[8] bg-(--color-surface-brand) font-bold text-white shadow-md transition hover:bg-orange-700"><span class="text-headline-xs text-text-body-light">العروض</span></div>
                </div>
            </a>
        </div>
    );
}
