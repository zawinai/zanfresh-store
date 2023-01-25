import React from "react";
import { useRouter } from "next/router";

const Cart = () => {
  const { route } = useRouter();
  console.log(route);

  return <div>Cart</div>;
};

export default Cart;
