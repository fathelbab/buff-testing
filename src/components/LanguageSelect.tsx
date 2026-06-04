import Select from "react-select";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const options = [
    { value: "en", label: "EN" },
    { value: "ar", label: "AR" },
];

export default function LanguageSelect() {
    return (
        <div className="w-24 sm:w-28 md:w-[130px]">
            <Select
                defaultValue={options[0]}
                options={options}
                isSearchable={false}
                menuPosition="fixed"
                menuPortalTarget={document.body}
                classNamePrefix="language-select"
                className="language-select"
                aria-label="Select language"
                components={{
                    IndicatorSeparator: () => null,
                }}
                formatOptionLabel={(option) => (
                    <div className="flex items-center gap-1.5">
                        <HiOutlineGlobeAlt size={16} className="text-page-dark md:size-6" />
                        <span className="text-sm font-semibold md:text-2xl">
                            {option.label}
                        </span>
                    </div>
                )}
            />
        </div>
    );
}
