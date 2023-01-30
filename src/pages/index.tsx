import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Hero from "@/components/hero";
import Header from "@/components/header";
import CategoryMenu from "@/components/categoryMenu";
import Combo from "@/components/combo";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import { HydrationProvider } from "react-hydration-provider";

export default function Home() {
  const { data: session, status } = useSession();

  console.log("from index b", session);

  return (
    <>
      <Head>
        <title>Happy Shopping!🥕🥩</title>
        <meta name='description' content='G enerated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HydrationProvider>
        <Header />
        <main className='max-w-[1200px] mx-auto'>
          <Hero />
          <Combo />
          <CategoryMenu />
          <Testimonials />
          <Footer />
        </main>
      </HydrationProvider>
    </>
  );
}
