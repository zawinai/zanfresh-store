import { HiTruck, HiCreditCard, HiCash, HiBadgeCheck } from "react-icons/hi";

export const DeliveryIcon = () => {
  return <HiTruck className='w-[40px] h-auto mx-auto' />;
};

export const PaymentIcon = () => {
  return <HiCreditCard className='w-[40px] h-auto mx-auto' />;
};

export const CompleteIcon = () => {
  return <HiBadgeCheck className='w-[40px] h-auto mx-auto' />;
};
