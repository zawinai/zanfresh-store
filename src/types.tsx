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

export type initialValueTypes = {
  cart: cartTypes[];
  setCart: React.Dispatch<React.SetStateAction<cartTypes[]>>;
  addToCart: (prop: cartTypes) => void;
  increaseQuantity: (prop: number) => void;
  reduceQuantity: (prop: number) => void;
  removeFromCart: (prop: number) => void;
};
