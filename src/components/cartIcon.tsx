import React from "react";
import { useComponentHydrated } from "react-hydration-provider";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { useCart } from "@/context/cartContext";

const CartIcon = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { cart } = useCart();

  const hydrate = useComponentHydrated();

  return (
    <button
      type='button'
      disabled={Array.isArray(cart) && cart.length < 1}
      onClick={() => setOpen(true)}
      className={` relative w-[70px] h-[70px] bg-green/70 backdrop-blur-xs  rounded-[100%] px-1 grid place-content-center shadow-md focus:border-none focus:outline-none focus:ring-offset-4 focus:ring-2 focus:ring-sky-600`}
    >
      <MdOutlineShoppingBasket className='text-white w-[30px] h-auto' />
      {hydrate ? (
        <div className='absolute top-[-10px] right-0 w-[25px] h-[25px] bg-orange rounded-full text-center text-white mx-auto my-auto'>
          {Array.isArray(cart) && cart.length}
        </div>
      ) : (
        ""
      )}
    </button>
  );
};

export default CartIcon;
// SSR dehydration

// Array.isArray(cart) && cart.length < 1 ? "hidden" : ""
