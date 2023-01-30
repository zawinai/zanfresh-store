import React from "react";
export interface ShopContextProviderProps {
  children: React.ReactNode;
}

export type initialValuesTypes = {
  user: null | string;
  loading: boolean;
};

export type cartTypes = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
};
