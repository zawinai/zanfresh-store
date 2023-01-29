import React, { useEffect, useRef } from "react";
import { BsCreditCard2Back } from "react-icons/Bs";
import { CiMobile3 } from "react-icons/Ci";
import { FaHandHoldingUsd } from "react-icons/Fa";

const Payment = () => {
  const codRef = useRef<any>(null);

  useEffect(() => {
    codRef.current?.focus();
  }, []);

  return (
    <div className='p-4 space-y-10 w-full '>
      <h1 className='text-center text-xl font-medium'>Available options</h1>
      <div className='grid md:grid-rows-none grid-cols-6 gap-x-10 gap-y-10 '>
        <button
          ref={codRef}
          type='button'
          className='col-span-6 md:col-span-2 w-full border border-slate-200 p-2 rounded-xl focus:ring-4 focus:ring-orange focus:outline-none focus:ring-offset-2 '
        >
          <FaHandHoldingUsd className='w-[50px] h-auto mx-auto text-green' />
          <span className='text-xs'>Cash On Delivery</span>
        </button>
        <button
          type='button'
          className='col-span-6 md:col-span-2 w-full border border-slate-300 p-4 rounded-xl'
        >
          <BsCreditCard2Back className='w-[50px] h-auto mx-auto opacity-40' />
        </button>
        <button
          type='button'
          className='col-span-full md:col-span-2 w-full border border-slate-300 p-4 rounded-xl'
        >
          <CiMobile3 className='w-[50px] h-auto mx-auto opacity-40' />
        </button>
      </div>
    </div>
  );
};

export default Payment;
