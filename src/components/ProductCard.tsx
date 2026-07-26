import type { Product } from "../data/types";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <div className="flex h-full w-[316px] flex-col rounded-2xl bg-white p-4 shadow-sm transition border-[#E8E8E8] hover:shadow-lg">

            <div className="flex justify-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-[200px] w-[268px] object-contain"
                />
            </div>

            <div className="mt-4">
                <SectionHeading
                    label={product.name}
                    variant="borderless"
                />
            </div>

            <p className="mt-2 min-h-[48px] text-sm text-gray-500">
                {product.description}
            </p>

            <div className="mt-auto flex items-center justify-between pt-6">

                <p className="text-xl font-bold">
                    EGP {product.price}
                </p>

                <div className="flex items-center gap-2">
                    <Button
                        variant="icon"
                        size="iconCard"
                        className="bg-surface-card !text-black hover:!text-red-500 text-2xl"
                        leftIcon={<CiHeart size={28}/>}
                    />

                    <Button
                        variant="icon"
                        size="iconCard"
                        className="bg-surface-brand"
                        leftIcon={<IoIosAdd size={28}/>}
                    />
                </div>

            </div>

        </div>
    );
}