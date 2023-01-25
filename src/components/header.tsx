import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { HiBars3BottomRight } from "react-icons/hi2";

import { signOut } from "next-auth/react";

const Header = () => {
  const { push } = useRouter();

  const handleSignOut = async () => {
    const res = await signOut({ redirect: true, callbackUrl: "/" });

    if (typeof res !== undefined) return push("/"); // fix this
  };

  return (
    <div className='flex flex-row items-center justify-between  py-1 px-2 md:px-4 max-w-[1000px] mx-auto sticky top-0 z-50 backdrop-blur-[2px]'>
      <Link href='/'>
        <Image src='/logo.png' alt='logo' width={100} height={100} priority />
      </Link>
      <button type='button'>
        <HiBars3BottomRight className='flex md:hidden w-[40px] h-auto text-slate-700' />
      </button>
      <ul className=' md:flex-row md:items-center md:gap-4 hidden md:flex'>
        <Link href='/'>
          <li>account</li>
        </Link>
        <Link href='/'>
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
