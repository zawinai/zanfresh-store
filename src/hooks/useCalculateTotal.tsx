import { useState, useEffect } from "react";
import { useCart } from "@/context/cartContext";
import { TAX, DELIVERY_FEE } from "libs/utils";

export const useCalculateTotal = () => {
  const { cart } = useCart();
  const [totalQty, setTotalQty] = useState<number>(0);
  const [Subtotal, setSubtotal] = useState<number>(0);
  const [grandTotal, setGrandTotal] = useState<number>(0);
  const [freeDelivery, setFreeDelivery] = useState<boolean>(false);

  const findTotalQty = () => {
    const qty = cart.reduce((prev, cur) => {
      return prev + cur.quantity;
    }, 0);

    setTotalQty(qty);
  };

  const calSubTotal = () => {
    const sub = cart.reduce((prev, cur) => {
      return prev + cur.price * cur.quantity;
    }, 0);

    setSubtotal(sub);
  };

  const calGrandTotal = () => {
    const gt = cart.reduce((prev, cur) => {
      return prev + cur.price * cur.quantity;
    }, 0);

    if (gt >= 20000) {
      setGrandTotal(gt + TAX);
      setFreeDelivery(true);
    } else {
      setFreeDelivery(false);
      setGrandTotal(gt + TAX + DELIVERY_FEE);
    }
  };

  useEffect(() => {
    calSubTotal();
    findTotalQty();
    calGrandTotal();
  }, [cart]);

  return {
    findTotalQty,
    Subtotal,
    calSubTotal,
    totalQty,
    grandTotal,
    freeDelivery,
  };
};
