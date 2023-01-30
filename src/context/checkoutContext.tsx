import React, { createContext, useContext, useState } from "react";
import { ShopContextProviderProps, initialValuesTypes } from "@/types";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const initialValues = {
  complete: true,
  setComplete: () => {},
  checkoutInfo: {},
  setCheckoutInfo: () => {},
};

export const CheckoutContext = createContext<initialValuesTypes | any>(
  initialValues
);

export const CheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [complete, setComplete] = useState<boolean>(true);

  const [checkoutInfo, setCheckoutInfo] = useLocalStorage("checkout", {});

  return (
    <CheckoutContext.Provider
      value={{ complete, setComplete, checkoutInfo, setCheckoutInfo }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
