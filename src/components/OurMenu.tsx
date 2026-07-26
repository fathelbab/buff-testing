import { categories } from "../data/categories";


export default function OurMenu() {
    return (
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 lg:px-12">

            {/* Mobile */}
            <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:hidden">
                {categories.map((category) => (
                    <a
                        key={category.id}
                        className="group cursor-pointer shrink-0 snap-start"
                    >
                        <div className="relative flex w-[120px] flex-col items-center pb-10">
                            <img
                                className="h-[120px] w-[120px] rounded-full bg-surface-warm object-cover"
                                src={category.image}
                                alt={category.name}
                                loading="lazy"
                            />

                            <div className="absolute bottom-5 z-10 flex w-[120px] items-center justify-center rounded-xl bg-surface-brand p-2 text-center text-[10px] font-extrabold text-white shadow-xl transition duration-300 group-hover:bg-action-hover">
                                {category.name}
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Desktop */}
            <div className="hidden grid-cols-2 justify-items-center gap-x-2 gap-y-6 sm:grid md:grid-cols-3 lg:grid-cols-5">
                {categories.map((category) => (
                    <a
                        key={category.id}
                        className="group cursor-pointer"
                    >
                        <div className="relative flex flex-col items-center pb-10">
                            <img
                                className="h-[120px] w-[120px] rounded-full bg-surface-warm object-cover sm:h-[150px] sm:w-[150px] md:h-[190px] md:w-[190px] lg:h-[236px] lg:w-[236px]"
                                src={category.image}
                                alt={category.name}
                                loading="lazy"
                            />

                            <div className="absolute uppercase bottom-5 z-10 flex w-[120px] items-center justify-center rounded-xl bg-surface-brand p-2 text-center text-[10px] font-extrabold text-white shadow-xl transition duration-300 group-hover:bg-action-hover sm:w-[156px] sm:p-3 sm:text-sm md:text-[24px] lg:w-53">
                                {category.name}
                            </div>
                        </div>
                    </a>
                ))}
            </div>

        </div>
    );
}