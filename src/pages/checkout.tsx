// Hooks
import { useCart } from "@/context/cartContext";
import UseCheckoutForm from "@/hooks/useCheckoutForm";

//Components
import Delivery from "@/components/checkoutforms/delivery";
import Payment from "@/components/checkoutforms/payment";
import Complete from "@/components/checkoutforms/complete";
import {
  DeliveryIcon,
  PaymentIcon,
  CompleteIcon,
} from "@/components/checkoutforms/checkoutIcons";
import Image from "next/image";

// utils
import { useComponentHydrated } from "react-hydration-provider";
import { HashLoader } from "react-spinners";

// firebase
import { db } from "firebase.config";
import {
  doc,
  setDoc,
  serverTimestamp,
  collection,
  addDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCheckout } from "@/context/checkoutContext";
import { useCalculateTotal } from "@/hooks/useCalculateTotal";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const Checkout = () => {
  const { data: session } = useSession();

  const hydrate = useComponentHydrated();

  const { cart, setCart } = useCart();

  const { complete, checkoutInfo } = useCheckout();

  const HEADERS = [
    { name: "Deleivery", ele: <DeliveryIcon /> },
    { name: "Payment", ele: <PaymentIcon /> },
    { name: "Summary", ele: <CompleteIcon /> },
  ];

  const ELEMENTS = [<Delivery />, <Payment />, <Complete />];

  const { currentIndex, step, next, back, goto } = UseCheckoutForm(ELEMENTS);

  const { grandTotal, freeDelivery } = useCalculateTotal();

  const handleCheckout = async () => {
    try {
      await addDoc(collection(db, "orders"), {
        ...checkoutInfo,
        cart: cart,
        customer: session?.user?.name || "customer",
        grandTotal: grandTotal,
        date: `${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}`,
        freeDelivery: freeDelivery,
        orderAt: serverTimestamp(),
      });
      setCart([]);

      typeof window !== "undefined" && window.localStorage.removeItem("myCart");
      typeof window !== "undefined" &&
        window.localStorage.removeItem("checkout");

      next();
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <>
      {hydrate ? (
        <div className='max-w-[1400px] mx-auto py-2 px-3 min-h-screen grid place-content-center'>
          <div className='absolute inset-x-0 top-[-10rem] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'>
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
          <Image
            src='/logo.png'
            width={100}
            height={100}
            alt='logo'
            className='mx-auto'
          />
          <div className='min-w-[200px] md:min-w-[900px] min-h-screen md:p-10 rounded-xl bg-indigo-100/70 backdrop-blur-md z-50'>
            <div className='grid grid-cols-6 gap-x-2 md:gap-x-10 w-full overflow-hidden p-3'>
              {HEADERS.map((ele, index) => (
                <button
                  type='button'
                  key={index}
                  className={`col-span-2 focus:outline-none focus:border-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded-xl ${
                    index === 0
                      ? "p-2 transition-all text-orange bg-white rounded-xl"
                      : ""
                  }
                  ${
                    currentIndex === 2
                      ? "p-2 transition-all text-orange bg-white "
                      : ""
                  }

                   ${
                     currentIndex === index
                       ? " p-2 transition-all text-orange rounded-xl border-4 border-orange bg-white"
                       : "text-gray-400 "
                   }`}
                  onClick={() => goto(index)}
                >
                  <div className='relative w-full '>
                    <div className='z-20 w-full text-center'>{ele.ele}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className=' '>
              <div className='min-w-[90vw] md:min-w-full grid place-content-center'>
                {step}
              </div>
              <div className='inline-flex items-center justify-end w-full gap-10 p-5 '>
                <button
                  type='button'
                  className={`${currentIndex === 0 ? "hidden" : ""} ${
                    currentIndex === ELEMENTS.length - 1 ? "hidden" : ""
                  } text-gray-500 border rounded-md p-3 mt-10`}
                  onClick={() => back()}
                >
                  Back
                </button>
                <button
                  disabled={complete}
                  type='button'
                  className={` ${
                    currentIndex === ELEMENTS.length - 1 ? "hidden" : ""
                  } p-3 bg-orange self-end text-white font-medium tracking-wide rounded-lg text-sm md:text-lg mt-10`}
                  onClick={() => {
                    currentIndex == 0 ? next() : handleCheckout();
                  }}
                >
                  Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='min-h-screen flex flex-col items-center justify-center'>
          <HashLoader color='#8ac926' />
        </div>
      )}
    </>
  );
};

export default Checkout;
