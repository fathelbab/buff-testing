import { MapPin, ChevronDown, Bike } from "lucide-react";
import { useState } from "react";
import "flag-icons/css/flag-icons.min.css";

const locations = [
    "Cairo",
    "Nasr City",
    "Maadi",
    "Heliopolis",
];

export default function LocationSelect() {
    const [selected, setSelected] = useState("Add Location");
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block w-full sm:w-auto">
            <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label="Select delivery location"
                className="flex w-full min-w-0 items-center justify-between rounded-xl border border-gray-300 bg-surface-input px-3 py-2 shadow-sm transition hover:shadow-md sm:min-w-[210px] sm:px-4 sm:py-1"
            >
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <span className="fi fi-eg" aria-label="Egypt"></span>
                    <div className="flex min-w-0 flex-col items-start">
                        <div className="flex items-center gap-1 text-xs uppercase tracking-wide text-gray-500">
                            DELIVER TO
                            <Bike size={14} />
                        </div>
                        <span className="max-w-[140px] truncate text-base font-medium underline text-gray-800 sm:text-lg">
                            {selected}
                        </span>
                    </div>
                </div>
                <ChevronDown
                    size={20}
                    className={`transition ${open ? "rotate-180" : ""}`}
                />
            </button>

            {open && (
                <div className="absolute left-0 top-[110%] z-50 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl" role="listbox">
                    {locations.map((location) => (
                        <button
                            key={location}
                            onClick={() => {
                                setSelected(location);
                                setOpen(false);
                            }}
                            className="flex w-full items-center gap-2 px-4 py-3 text-left transition hover:bg-surface-hover"
                            role="option"
                            aria-selected={selected === location}
                        >
                            <MapPin size={16} />
                            {location}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
