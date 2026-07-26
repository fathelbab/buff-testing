import { HiX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { closeCart } from "../app/cart/cartSlice";
import { useNavigate } from "react-router";

import EmptyCart from "../assets/imgs/cart/Cart.png";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isOpen = useSelector(
    (state: RootState) => state.cart.isOpen
  );

  const items = useSelector(
    (state: RootState) => state.cart.items
  );

  const handleMenu = () => {
    dispatch(closeCart());
    navigate("/menu");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => dispatch(closeCart())}
        className={`
          fixed inset-0
          bg-black/50
          transition-opacity
          duration-300
          z-40

          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-full
          max-w-95
          bg-white
          shadow-2xl
          z-50
          transition-transform
          duration-300
          ease-out

          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Close */}
        <button
          onClick={() => dispatch(closeCart())}
          className="absolute left-5 top-5 rounded-lg p-2 hover:bg-gray-100"
        >
          <HiX size={24} />
        </button>

        {/* Content */}
        <div className="flex h-full flex-col items-center justify-center px-10">

          {items.length === 0 ? (
            <>
              <img
                src={EmptyCart}
                alt="Empty cart"
                className="w-36"
              />

              <h2 className="mt-8 text-center text-3xl font-black">
                NOTHING TO SEE HERE YET!
              </h2>

              <p className="mt-3 text-center text-gray-500">
                You haven't added anything yet.
                Explore our menu and find your
                favorites!
              </p>

              <button
                onClick={handleMenu}
                className="
                  mt-8
                  w-full
                  rounded-xl
                  bg-surface-brand
                  py-4
                  font-bold
                  text-white
                  transition
                  hover:bg-[#e55400]
                "
              >
                GO TO MENU
              </button>
            </>
          ) : (
            <>
              {/* Cart Items go here later */}
            </>
          )}
        </div>
      </aside>
    </>
  );
}