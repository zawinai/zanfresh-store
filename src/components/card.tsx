import { useState } from "react";
import Image from "next/image";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { HiOutlineCheck, HiPlusSm, HiOutlineMinusSm } from "react-icons/hi";
import { toast } from "react-toastify";
import { useCart } from "@/context/cartContext";

const Card = ({
  id,
  img,
  name,
  price,
}: {
  id: number;
  name: string;
  img: string;
  price: number;
}) => {
  const [open, setOpen] = useState(false);

  const { addToCart, increaseQuantity, reduceQuantity } = useCart();

  const handleAddToCart = ({
    id,
    name,
    img,
    price,
  }: {
    id: number;
    name: string;
    img: string;
    price: number;
  }) => {
    toast(`${name} was 🛒 Added to the cart`, {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const newItem = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: 1,
    };

    addToCart(newItem);
  };

  const handleReduce = (id: number) => {
    reduceQuantity(id);
  };

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
            <button
              onClick={() => handleAddToCart({ id, name, img, price })}
              className=''
            >
              <HiOutlineCheck className='text-green w-[20px] h-auto bg-white rounded-full' />
            </button>
            <button onClick={() => handleReduce(id)}>
              <HiOutlineMinusSm className='text-green w-[20px] h-auto bg-white rounded-full' />
            </button>
            <button onClick={() => increaseQuantity(id)}>
              <HiPlusSm className='text-green w-[20px] h-auto bg-white rounded-full' />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
