import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { MdOutlineShoppingBasket, MdAccountCircle } from "react-icons/md";

import { signOut } from "next-auth/react";

const Header = () => {
  const { push } = useRouter();

  const handleSignOut = async () => {
    const res = await signOut({ redirect: true, callbackUrl: "/" });

    if (typeof res !== undefined) return push("/"); // fix this
  };

  return (
    <div className='flex flex-row items-center justify-between  py-1 px-2 md:px-4 max-w-[1000px] mx-auto z-50 backdrop-blur-[2px]'>
      <Link href='/'>
        <Image src='/logo.png' alt='logo' width={100} height={100} priority />
      </Link>
      <div className='flex flex-row items-center gap-10'>
        <button type='button'>
          <MdOutlineShoppingBasket className='flex w-[30px] h-auto text-green' />
        </button>
        <button type='button'>
          <MdAccountCircle className='flex w-[30px] h-auto text-green' />
        </button>
      </div>
    </div>
  );
};

export default Header;
