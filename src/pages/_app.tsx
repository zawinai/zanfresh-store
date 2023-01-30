import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { CartContextProvider } from "@/context/cartContext";
import { CheckoutProvider } from "@/context/checkoutContext";

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <CartContextProvider>
        <CheckoutProvider>
          <Component {...pageProps} />
        </CheckoutProvider>
      </CartContextProvider>
    </SessionProvider>
  );
}
