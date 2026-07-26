import ProductCard from "./ProductCard";
import type { Product } from "../data/types";

interface Props {
    products: Product[];
}

export default function ProductGrid({
    products,
}: Props) {
    return (
        <div className="
            mt-8
            mb-8
            grid
            grid-cols-1
            gap-24

            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
        ">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}