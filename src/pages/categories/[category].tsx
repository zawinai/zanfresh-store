import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { HiSearch } from "react-icons/hi";
import Card from "@/components/card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import CartIcon from "@/components/cartIcon";
import CartModal from "@/components/cart";

const Collection = () => {
  const items = [
    {
      id: 1,
      name: "Water spinach",
      img: "/items/item1.png",
      price: 120,
      qty: 12,
      promo: false,
    },
    {
      id: 2,
      name: "Bok Choy",
      img: "/items/item2.png",
      price: 120,
      qty: 12,
      promo: false,
    },
    {
      id: 3,
      name: "Corainder",
      img: "/items/item3.png",
      price: 150,
      qty: 10,
      promo: false,
    },
    {
      id: 4,
      name: "Dragon Fruit",
      img: "/items/item4.png",
      price: 320,
      qty: 12,
      promo: false,
    },
    {
      id: 5,
      name: "Pineapple",
      img: "/items/item5.png",
      price: 820,
      qty: 32,
      promo: false,
    },
    {
      id: 6,
      name: "Garlic",
      img: "/items/garlic.png",
      price: 320,
      qty: 92,
      promo: false,
    },
    {
      id: 7,
      name: "Long bean",
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
      name: "Broccoli",
      img: "/items/item9.png",
      price: 120,
      qty: 190,
      promo: false,
    },
    {
      id: 10,
      name: "Chilli",
      img: "/items/Chili.png",
      price: 220,
      qty: 62,
      promo: false,
    },
  ];

  const router = useRouter();

  const { category } = router.query;

  const [open, setOpen] = useState(false);

  const seeAlso = [
    {
      id: 1,
      name: "meat",
      img: "/see/m.png",
    },
    {
      id: 2,
      name: "fish",
      img: "/see/fi.png",
    },
    {
      id: 3,
      name: "fruit",
      img: "/see/f.png",
    },
    {
      id: 4,
      name: "vegetable",
      img: "/see/v.png",
    },
  ];

  return (
    <>
      <CartModal open={open} setOpen={setOpen} />
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <div className='relative min-h-screen mx-auto px-0 bg-indigo-200/10 drop-shadow-md '>
        <div className='absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] -z-20'>
          <svg
            className='relative left-[calc(50%-11rem)] z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
            viewBox='0 0 1155 678'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
              fillOpacity='.3'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#55f546' />
                <stop offset={1} stopColor='#20f00d' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='absolute inset-x-0 top-[calc(10vh-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100vh-10rem)] -z-20'>
          <svg
            className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
            viewBox='0 0 1155 678'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
              fillOpacity='.3'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#90dbf4' />
                <stop offset={1} stopColor='#0077b6' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='max-w-[800px] mx-auto min-h-screen rounded-xl bg-indigo-100/30 shadow-lg z-20 pb-10'>
          <div className='w-full relative grid place-items-center isolate rounded-t-xl '>
            <div className='col-span-full row-span-full z-50 px-2  rounded-md p-2'>
              <div className='flex flex-col items-center gap-10 p-2 z-50 '>
                <Image src='/logo.png' width={150} height={150} alt='logo' />
                <h2 className='text-white drop-shadow-sm font-extrabold text-center text-md sm:text-xl md:text-2xl'>
                  We always try out best for your family
                </h2>
                <div className=' flex flex-row w-full items-center justify-around h-[50px] rounded-xl shadow-sm '>
                  <input
                    type='text'
                    className=' w-full h-full rounded-l-xl px-2 focus:outline-none'
                    placeholder='apple..'
                  />
                  <HiSearch className='w-[50px] text-white h-full px-2 bg-sky-300 rounded-r-xl' />
                </div>
              </div>
            </div>
            <Image
              src='/banner.png'
              width={800}
              height={700}
              alt='bg-image'
              priority
              className='relative col-span-full row-span-full -z-20 '
            />
            <div className='hidden md:block absolute bottom-0 bg-gradient-to-t from-slate-200 to-transparent w-full h-[100px] md:h-[50px] -z-20' />
          </div>
          <div className='my-10 z-20'>
            <h1 className='font-fresh text-2xl md:text-3xl text-center font-bold my-10 tracking-wider'>
              {category}
            </h1>
            <ul className='grid grid-cols-item-card place-items-center gap-y-10'>
              {items.map(({ name, price, id, img }) => (
                <div key={id}>
                  <Card id={id} name={name} price={price} img={img} />
                </div>
              ))}
            </ul>
          </div>
          <div className='max-w-[1000px] mx-auto md:w-fit'>
            <h1 className='text-center my-2 '>See also</h1>
            <div className='flex flex-row items-center justify-center gap-2'>
              {seeAlso.map(({ id, name, img }) => (
                <Link
                  href={`/categories/${name}`}
                  type='button'
                  key={id}
                  className='flex flex-col items-center border-2 border-orange rounded-lg max-w-[100px] h-auto px-1 py-2 focus:border-none focus:outline-none focus:ring-offset-4 focus:ring-2 focus:ring-sky-600'
                >
                  <span>{name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-[900px] grid place-content-end sticky bottom-10 w-full pr-10 md:pr-20 mx-auto'>
        <CartIcon setOpen={setOpen} />
      </div>
    </>
  );
};

export default Collection;
