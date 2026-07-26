import { useMemo, useState } from "react";

import Carousel from "../components/Carousel";
import SectionHeading from "../components/SectionHeading";

import { categories } from "../data/categories";
import { products } from "../data/product";

import { groupProducts } from "../app/helpers/groupProducts";

import CategoryTabs from "../components/CategoryTabs";
import FiltersButton from "../components/FiltersButton";
import ProductGrid from "../components/ProductGrid";

export default function Menu() {
    const grouped = useMemo(
        () => groupProducts(categories, products),
        []
    );

    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const activeCategory = grouped.find(
        (c) => c.id === selectedCategory
    );
    const visibleCategories = activeCategory
        ? [activeCategory]
        : grouped;

    grouped.forEach(category => {
        console.log(
            category.id,
            category.name,
            category.products.map(p => p.name)
        );
    });
    return (
        <>
            <Carousel />

            <section className="pt-12">

                <div className="flex justify-center">
                    <SectionHeading label="OUR MENU" />
                </div>

                <div className="mx-auto mt-10 flex max-w-7xl gap-4 px-4">

                    <FiltersButton />

                    <CategoryTabs
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelect={setSelectedCategory}
                    />

                </div>

                <div className="mx-auto mt-12 max-w-7xl px-4">

                    {visibleCategories.map(category => (
                        <section key={category.id}>
                            <div className="mx-auto w-fit pt-4">
                                <SectionHeading
                                    label={category.name}
                                    variant="inverted"
                                />
                            </div>

                            <ProductGrid products={category.products} />
                        </section>
                    ))}
                </div>

            </section>
        </>
    );
}