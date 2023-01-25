import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Hero from "@/components/hero";
import Header from "@/components/header";
import CategoryMenu from "@/components/categoryMenu";
import Promotion from "@/components/promotion";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
export default function Home() {
  const { data: session } = useSession();

  const { push, asPath } = useRouter();

  const handleSignin = () => {
    push(`/auth/signin?callbackUrl=${asPath}`);
  };

  return (
    <>
      <Head>
        <title>Happy Shopping!🥕🥩</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='max-w-[1200px] mx-auto'>
        <Header />
        <Hero />
        <Promotion />
        <CategoryMenu />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
