import { TbShoppingBag } from "react-icons/tb";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { toggleCart } from "../app/cart/cartSlice";

export default function FloatingCart() {
    const dispatch = useDispatch();

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                variant="icon"
                size="icon"
                className="shadow-xl"
                leftIcon={<TbShoppingBag size={32} />}
                onClick={() => dispatch(toggleCart())}
                 />
        </div>
    );
}