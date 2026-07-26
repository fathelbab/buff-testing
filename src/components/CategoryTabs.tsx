import type { Category } from "../data/types"

interface Props {
    categories: Category[];
    selectedCategory: number | null;
    onSelect: (id: number | null) => void;
}

export default function CategoryTabs({
    categories,
    selectedCategory,
    onSelect,
}: Props) {
    return (
        <div className="flex-1 flex-wrap rounded-2xl bg-gray-100 p-2">
            <div className="flex w-max gap-2">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() =>
                            onSelect(
                                selectedCategory === category.id
                                    ? null
                                    : category.id
                            )
                        }
                        className={`
                            whitespace-nowrap rounded-xl px-6 py-3
                            text-sm font-semibold transition-all

                            ${selectedCategory === category.id
                                ? "bg-white shadow-md text-black"
                                : "text-gray-600 hover:bg-white hover:shadow"
                            }
                        `}
                    >
                        {category.tabName.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
}