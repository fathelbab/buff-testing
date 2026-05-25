import Select from "react-select";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const options = [
    { value: "en", label: "EN" },
    { value: "ar", label: "AR" },
];

export default function LanguageSelect() {
    return (
        <div className="w-[130px] h-full">
            <Select
                defaultValue={options[0]}
                options={options}
                isSearchable={false}
                menuPosition="fixed"
                menuPortalTarget={document.body}
                components={{
                    IndicatorSeparator: () => null,
                }}
                styles={{
                    menuPortal: (base) => ({
                        ...base,
                        zIndex: 9999,
                    }),

                    control: (base, state) => ({
                        ...base,
                        minHeight: "44px",
                        borderRadius: "14px",
                        borderColor: "#D9D9D9",
                        backgroundColor: "#FAFAFA",
                        boxShadow: state.isFocused
                            ? "0 0 0 1px #D9D9D9"
                            : "none",
                        padding: "5px",
                        cursor: "pointer",
                        "&:hover": {
                            borderColor: "#D9D9D9",
                        },
                    }),

                    valueContainer: (base) => ({
                        ...base,
                        padding: "5px 2px",
                        display: "flex",
                        alignItems: "center",
                        gap: "0",
                    }),

                    singleValue: (base) => ({
                        ...base,
                        color: "#1A1A1A",
                        fontWeight: 500,
                        fontSize: "24px",
                    }),

                    dropdownIndicator: (base) => ({
                        ...base,
                        color: "#1A1A1A",
                        paddingRight: "10px",
                        "&:hover": {
                            color: "#1A1A1A",
                        },
                    }),

                    menu: (base) => ({
                        ...base,
                        borderRadius: "14px",
                        overflow: "hidden",
                    }),

                    option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isFocused
                            ? "#F3F3F3"
                            : "#FFFFFF",
                        color: "#1A1A1A",
                        cursor: "pointer",
                    }),
                }}
                formatOptionLabel={(option) => (
                    <div className="flex items-center gap-2 text-2xl">
                        <HiOutlineGlobeAlt
                            size={22}
                            className="text-[#1A1A1A]"
                        />
                        <span>{option.label}</span>
                    </div>
                )}
            />
        </div>
    );
}