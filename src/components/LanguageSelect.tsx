import Select from "react-select";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const options = [
    { value: "en", label: "EN" },
    { value: "ar", label: "AR" },
];

export default function LanguageSelect() {
    return (
        <div className="w-35 md:w-[90px] md:w-[130px]">
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
                        minHeight: window.innerWidth < 768 ? "40px" : "52px",
                        borderRadius: "14px",
                        borderColor: "#D9D9D9",
                        backgroundColor: "#FAFAFA",
                        boxShadow: state.isFocused
                            ? "0 0 0 1px #D9D9D9"
                            : "none",

                        padding: 0,
                        cursor: "pointer",

                        display: "flex",
                        alignItems: "center",

                        "&:hover": {
                            borderColor: "#D9D9D9",
                        },
                    }),

                    valueContainer: (base) => ({
                        ...base,
                        padding: window.innerWidth < 768 ? "0 6px" : "0 10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }),

                    dropdownIndicator: (base) => ({
                        ...base,
                        color: "#1A1A1A",
                        padding: window.innerWidth < 768 ? "0 6px" : "0 6px",
                        display: "flex",
                        alignItems: "center",

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
                        fontSize: window.innerWidth < 768 ? "16px" : "20px",
                    }),
                }}
                formatOptionLabel={(option) => (
  <div className="flex items-center gap-1.5">
    <HiOutlineGlobeAlt
      size={window.innerWidth < 768 ? 16 : 24}
      className="text-[#1A1A1A]"
    />

    <span className="text-sm font-semibold md:text-2xl">
      {option.label}
    </span>
  </div>
)}
            />
        </div>
    );
}