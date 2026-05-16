import { MapPin, ChevronDown, Bike } from "lucide-react";
import { useState } from "react";
import "flag-icons/css/flag-icons.min.css";

export default function LocationSelect() {
    const [selected, setSelected] = useState("Add Location");
    const [open, setOpen] = useState(false);

    const locations = [
        "Cairo",
        "Nasr City",
        "Maadi",
        "Heliopolis",
    ];

    return (
        <div className="relative inline-block">
            {/* BUTTON */}
            <button
                onClick={() => setOpen(!open)}
                className="flex min-w-[210px] items-center justify-between rounded-xl border border-gray-300 bg-[#f5f5f5] px-4 py-1 shadow-sm transition hover:shadow-md"
            >
                <div className="flex items-center gap-3">
                    {/* Flag */}
                    <span className="fi fi-eg"></span>
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-1 text-xs uppercase tracking-wide text-gray-500">
                            DELIVER TO
                            <Bike size={14} />
                        </div>

                        <span className="text-lg font-medium text-gray-800">
                            {selected}
                        </span>
                    </div>
                </div>

                <ChevronDown
                    size={20}
                    className={`transition ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* DROPDOWN */}
            {open && (
                <div className="absolute left-0 top-[110%] z-50 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                    {locations.map((location) => (
                        <button
                            key={location}
                            onClick={() => {
                                setSelected(location);
                                setOpen(false);
                            }}
                            className="flex w-full items-center gap-2 px-4 py-3 text-left transition hover:bg-gray-100"
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