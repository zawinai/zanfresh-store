import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiChevronDown, HiPlus, HiMinus, HiTrash } from "react-icons/hi";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { Disclosure } from "@headlessui/react";
import { useCart } from "@/context/cartContext";

export default function CartModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const cancelButtonRef = useRef(null);

  const { cart, increaseQuantity, reduceQuantity, removeFromCart } = useCart();

  const items = [
    {
      id: 1,
      name: "Orange Areon at North",
      img: "/items/item1.png",
      price: 120,
      qty: 12,
      promo: false,
    },
    {
      id: 2,
      name: "Apple",
      img: "/items/item2.png",
      price: 120,
      qty: 12,
      promo: false,
    },
    {
      id: 3,
      name: "Pineapple",
      img: "/items/item3.png",
      price: 150,
      qty: 10,
      promo: false,
    },
    {
      id: 4,
      name: "Chocolate",
      img: "/items/item4.png",
      price: 320,
      qty: 12,
      promo: false,
    },
    {
      id: 5,
      name: "Coconut",
      img: "/items/item5.png",
      price: 820,
      qty: 32,
      promo: false,
    },
    {
      id: 6,
      name: "Jelly",
      img: "/items/item6.png",
      price: 320,
      qty: 92,
      promo: false,
    },
    {
      id: 7,
      name: "Kitkat",
      img: "/items/item1.png",
      price: 220,
      qty: 82,
      promo: false,
    },
    {
      id: 8,
      name: "Banana",
      img: "/items/item8.png",
      price: 420,
      qty: 42,
      promo: false,
    },
    {
      id: 9,
      name: "Honey Pie",
      img: "/items/item9.png",
      price: 120,
      qty: 190,
      promo: false,
    },
    {
      id: 10,
      name: "Water Waffel",
      img: "/items/item10.png",
      price: 220,
      qty: 62,
      promo: false,
    },
    {
      id: 100,
      name: "Water Waffel",
      img: "/items/item10.png",
      price: 220,
      qty: 62,
      promo: false,
    },
    {
      id: 11,
      name: "Plant",
      img: "/items/item3.png",
      price: 220,
      qty: 62,
      promo: false,
    },
    {
      id: 12,
      name: "Water Waffel",
      img: "/items/item7.png",
      price: 220,
      qty: 62,
      promo: false,
    },
    {
      id: 13,
      name: "Water Waffel",
      img: "/items/item6.png",
      price: 220,
      qty: 62,
      promo: false,
    },
    {
      id: 14,
      name: "Water Waffel",
      img: "/items/item5.png",
      price: 220,
      qty: 62,
      promo: false,
    },
    {
      id: 15,
      name: "Water Waffel",
      img: "/items/item1.png",
      price: 220,
      qty: 62,
      promo: false,
    },
  ];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 bg-indigo-100/30 backdrop-blur-sm overflow-scroll'>
          <div className='flex min-h-screen items-start justify-center md:justify-end p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative rounded-lg bg-white/80 backdrop-blur-sm shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md'>
                <div className='py-3 '>
                  <div className='pb-5'>
                    <MdOutlineShoppingBasket className='mx-auto w-[60px] h-auto text-green' />
                    <p className='text-center w-full text-sm font-light tracking-wider'>
                      {cart.length} items in the basket
                    </p>
                  </div>
                  <ul className='flex flex-col items-center gap-5'>
                    {cart.length < 1 ? (
                      <h1 className='text-xl md:text-2xl min-h-[300px]'>
                        An Empty basket {":("}
                      </h1>
                    ) : (
                      cart.map(({ id, name, img, price, quantity }) => (
                        <Disclosure key={id}>
                          {({ open }) => (
                            <li
                              className={`flex flex-col items-center justify-between w-full h-auto p-2 border-b-2 ${
                                open ? "bg-white" : ""
                              } `}
                            >
                              <div className='flex flex-row items-start justify-between gap-3 '>
                                <div className='flex flex-row items-start gap-3'>
                                  <img
                                    src={img}
                                    alt='image'
                                    className='w-[80px] h-auto'
                                  />
                                  <div className='flex flex-col items-start justify-between w-full'>
                                    <span className='text-md font-bold text-gray-700 w-[50vw] md:w-[300px] text-start'>
                                      {name}
                                    </span>
                                    <div className='flex flex-col items-start w-full'>
                                      <span className='text-md font-medium text-gray-400'>
                                        Qty :
                                        <span className='text-black font-bold'>
                                          {" "}
                                          {quantity}
                                        </span>
                                      </span>
                                      <span className='text-md font-medium text-gray-400'>
                                        Price :
                                        <span className='text-black font-bold'>
                                          {" "}
                                          {price} mmk
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <Disclosure.Button className='self-end'>
                                  <HiChevronDown
                                    className={`${
                                      open ? "rotate-180" : ""
                                    } w-[20px] h-auto`}
                                  />
                                </Disclosure.Button>
                              </div>
                              <Disclosure.Panel className=' flex flex-row items-center justify-around pt-4 py-2 px-4 pb-2 text-sm max-w-[90%] w-full '>
                                <button
                                  type='button'
                                  onClick={() => removeFromCart(id)}
                                >
                                  <HiTrash className='w-[28px] h-[28px] bg-red-600 rounded-full p-1 text-white' />
                                </button>
                                <button
                                  type='button'
                                  onClick={() => reduceQuantity(id)}
                                >
                                  <HiMinus className='w-[28px] h-[28px] bg-orange rounded-full p-1 text-white' />
                                </button>
                                <button
                                  type='button'
                                  onClick={() => increaseQuantity(id)}
                                >
                                  <HiPlus className='w-[28px] h-[28px] bg-green rounded-full p-1 text-white' />
                                </button>
                              </Disclosure.Panel>
                            </li>
                          )}
                        </Disclosure>
                      ))
                    )}
                  </ul>
                </div>
                <div
                  className={`${
                    cart.length < 1 ? "hidden" : ""
                  } py-2 px-4 w-full`}
                >
                  <div className='flex flex-row justify-between w-full'>
                    <div />
                    <h3 className='text-end text-sm font-medium'>MMK</h3>
                  </div>
                  <div className='flex flex-row items-center justify-between border-b my-2'>
                    <h3 className='font-light tracking-wide'>Subtotal</h3>
                    <span>12000</span>
                  </div>
                  <div className='flex flex-row items-center justify-between border-b my-2'>
                    <h3 className='font-light tracking-wide'>Discount</h3>
                  </div>
                  <div className='flex flex-row items-center justify-between border-b my-2'>
                    <h3 className='font-light tracking-wide'>Tax</h3>
                  </div>
                  <div className='flex flex-row items-center justify-between border-b my-2'>
                    <h3 className='font-light tracking-wide'>Delivery fee</h3>
                  </div>
                  <div className='flex flex-row items-center justify-between border-b my-2'>
                    <h3 className='text-xl font-extrabold tracking-wider'>
                      Grand Total
                    </h3>
                  </div>
                </div>
                <div className='bg-indigo-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md border border-transparent bg-sky-400 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={() => setOpen(false)}
                  >
                    Check Out
                  </button>
                  <button
                    type='button'
                    className='mt-4 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Continue Shopping
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
