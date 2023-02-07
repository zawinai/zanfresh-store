import React from "react";
export interface ShopContextProviderProps {
  children: React.ReactNode;
}

export type cartTypes = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
};

export type checkoutTypes =
  | {
      city: string;
      phone: number;
      address: string;
      remark: string;
      cart: cartTypes[];
      orderAt: () => void;
    }
  | {};

export type initialCheckoutTypes = {
  complete: boolean;
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
  checkoutInfo: checkoutTypes;
  setCheckoutInfo: React.Dispatch<React.SetStateAction<checkoutTypes>>;
};

export type initialValueTypes = {
  cart: cartTypes[];
  setCart: React.Dispatch<React.SetStateAction<cartTypes[]>>;
  addToCart: (prop: cartTypes) => void;
  increaseQuantity: (prop: number) => void;
  reduceQuantity: (prop: number) => void;
  removeFromCart: (prop: number) => void;
};

export interface IProps {
  title: string;
  stars: number;
  body: string;
  user: string;
}
