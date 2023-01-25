import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { HiOutlineCheck, HiPlusSm, HiOutlineMinusSm } from "react-icons/hi";

const Card = ({
  id,
  name,
  img,
  price,
  handleAddToCart,
}: {
  id: number;
  name: string;
  img: string;
  price: number;
  handleAddToCart: (prop : string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      key={id}
      className='flex flex-col w-[165px] h-auto bg-slate-300/20 rounded-lg shadow-md overflow-hidden '
    >
      <Image
        src={img}
        width={100}
        height={100}
        alt='stock-image'
        className='w-full rounded-t-lg'
      />
      <div className='relative py-1 px-2 flex flex-col justify-between h-[120px] '>
        <span className='text-sm text-sky-500 font-bold max-w-[100px]'>
          {name}
        </span>
        <span>
          {price} <span className='text-slate-500 text-sm'>mmk</span>
        </span>
        <button
          type='button'
          className='absolute bottom-0 text-center right-0 bg-green w-[30%] rounded-tl-lg text-white p-1 py-2 focus:border-none focus:outline-sky-300'
          onClick={() => setOpen(true)}
        >
          <MdOutlineShoppingBasket className='mx-auto' />
        </button>
        <div
          className={`${
            open ? "" : "hidden"
          }  absolute bottom-0 right-0 h-full bg-green w-[30%] `}
        >
          <div className='flex flex-col items-center justify-between w-full h-full py-1 '>
            <button onClick={() => handleAddToCart(name)} className="">
              <HiOutlineCheck className='text-green w-[20px] h-auto bg-white rounded-full' />
            </button>
            <button>
              <HiOutlineMinusSm className='text-green w-[20px] h-auto bg-white rounded-full' />
            </button>
            <button>
              <HiPlusSm className='text-green w-[20px] h-auto bg-white rounded-full' />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
