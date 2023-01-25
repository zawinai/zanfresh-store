import React from "react";
import { MdOutlineShoppingBasket } from "react-icons/md";

const CartIcon = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      type='button'
      onClick={() => setOpen(true)}
      className='w-[70px] h-[70px] bg-green/70 backdrop-blur-xs  rounded-[100%] px-1 grid place-content-center shadow-md focus:border-none focus:outline-none focus:ring-offset-4 focus:ring-2 focus:ring-sky-600'
    >
      <MdOutlineShoppingBasket className='text-white w-[30px] h-auto' />
    </button>
  );
};

export default CartIcon;
