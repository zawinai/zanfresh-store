import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  MdOutlineShoppingBasket,
  MdAccountCircle,
  MdLogin,
} from "react-icons/md";
import { useSession } from "next-auth/react";
import { SyncLoader } from "react-spinners";
import { Animate, AnimateGroup } from "react-simple-animate";
import { signOut } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  const { push, asPath } = useRouter();

  const handleSignOut = async () => {
    const res = await signOut({ redirect: true, callbackUrl: "/" });

    if (typeof res !== undefined) return push("/"); // fix this
  };

  const handleSignin = () => {
    push(`/auth/signin?callbackUrl=${asPath}`);
  };

  const greet = new Date().getHours();

  return (
    <div className=' py-1 px-2 w-full md:px-4 z-50 backdrop-blur-[2px] sticky top-0'>
      <div className='max-w-[1000px] mx-auto flex flex-row items-center justify-between'>
        <Link href='/' className=''>
          <Image src='/logo.png' alt='logo' width={80} height={80} priority />
        </Link>

        {status === "loading" ? (
          <SyncLoader size={5} margin={2} color='orange' />
        ) : session && status === "authenticated" ? (
          <Animate
            play={true}
            duration={2}
            start={{ opacity: 0, filter: "blur(10px)" }}
            end={{ opacity: 1, filter: "blur(0px)" }}
          >
            <div className='inline-flex items-center justify-between w-full gap-4'>
              <h1 className='col-start-1 col-end-3 text-sm sm:text-lg md:text-xl font-medium tracking-wider text-center animate-color bg-gradient-to-r from-green via-orange to-white bg-clip-text text-transparent p-3 rounded-l-3xl rounded-r-3xl outline-none focus:border-none focus:ring-4 focus:ring-orange ring-offset-2'>
                {greet > 18
                  ? "Good Evening"
                  : greet > 12
                  ? "Good afternoon"
                  : "Good morning"}{" "}
                {session.user?.name}!
              </h1>
              <button type='button'>
                <MdOutlineShoppingBasket className='flex w-[30px] h-auto text-green' />
              </button>
              {/* <Link href='/auth/profile'> */}
              {/* <Image
              alt='profile'
              src={session.user?.picture}
              width={20}
              height={20}
              loading='lazy'
            /> */}
              {/* </Link> */}
            </div>
          </Animate>
        ) : (
          <div className='flex flex-row items-center justify-between gap-10'>
            <button
              type='button'
              onClick={() => handleSignin()}
              className='flex flex-row items-center gap-10'
            >
              <abbr title='sign in'>
                <MdLogin className='flex w-[30px] h-auto text-green' />
              </abbr>
            </button>
            {/* <button type='button' onClick={() => handleSignOut()}>
            Sign Out
          </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
