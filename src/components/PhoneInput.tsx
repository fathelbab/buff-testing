import Select from "react-select";

const countryOptions = [
  {
    value: "+20",
    label: "🇪🇬 +20",
  },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PhoneInput({
  value,
  onChange,
}: PhoneInputProps) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-lg font-semibold text-text-primary">
        Enter your Phone Number
      </label>

      <div className="flex gap-3">
        <div className="w-[120px]">
          <Select
            defaultValue={countryOptions[0]}
            options={countryOptions}
            isSearchable={false}
            isDisabled
            unstyled
            classNames={{
              control: () =>
                "h-12 rounded-lg border border-gray-300 bg-white px-2",
              valueContainer: () => "px-1",
              menu: () =>
                "mt-1 rounded-lg border border-gray-200 bg-white shadow-lg",
              option: ({ isFocused, isSelected }) =>
                `cursor-pointer px-3 py-2 ${
                  isSelected
                    ? "bg-orange-500 text-white"
                    : isFocused
                    ? "bg-gray-100"
                    : ""
                }`,
              dropdownIndicator: () => "text-gray-500 px-2",
              indicatorSeparator: () => "hidden",
            }}
          />
        </div>

        <input
          type="tel"
          placeholder="12345678"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 flex-1 rounded-lg border border-gray-300 px-4 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
        />
      </div>
    </div>
  );
}