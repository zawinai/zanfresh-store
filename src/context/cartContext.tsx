import React, { createContext, useContext } from "react";
import { cartTypes } from "@/types";
import { toast } from "react-toastify";

import { useLocalStorage } from "@/hooks/useLocalStorage";

export type initialValueTypes = {
  cart: cartTypes[];
  setCart: React.Dispatch<React.SetStateAction<cartTypes[]>>;
  addToCart: (prop: cartTypes) => void;
  increaseQuantity: (prop: number) => void;
  reduceQuantity: (prop: number) => void;
  removeFromCart: (prop: number) => void;
};

const initialValues = {
  cart: [],
  setCart: () => [],
  addToCart: () => {},
  increaseQuantity: () => [],
  reduceQuantity: () => [],
  removeFromCart: () => [],
};

export const CartContext = createContext<initialValueTypes>(initialValues);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useLocalStorage<cartTypes[]>("myCart", []);

  const addToCart = (data: cartTypes) => {
    const findItem = cart.find(({ id }) => id === data.id);

    if (findItem) {
      const remove = cart.filter(({ id }) => id !== findItem.id);

      return setCart([
        ...remove,
        { ...findItem, quantity: findItem.quantity + 1 },
      ]);
    } else {
      return setCart([...cart, data]);
    }
  };

  const increaseQuantity = (id: number) => {
    const findItem = cart.find((item) => item.id === id);

    if (!findItem) return;

    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const reduceQuantity = (id: number) => {
    const findItem = cart.find((item) => item.id === id);

    if (!findItem) return;

    const remove = cart.filter((item) => item.id !== findItem.id);

    if (findItem && findItem.quantity == 1) {
      setCart([...remove]);
      toast(`${findItem.name} is removed!`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (findItem && findItem.quantity > 1) {
      setCart([...remove, { ...findItem, quantity: findItem.quantity - 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    const filterItem = cart.filter((item) => item.id !== id);

    if (filterItem) {
      const itemName = cart.find((item) => item.id === id);

      toast(`${itemName?.name} is removed!`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      return setCart([...filterItem]);
    } else {
      return;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        increaseQuantity,
        reduceQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
