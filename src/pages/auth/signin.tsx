import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, getProviders } from "next-auth/react";
import HashLoader from "react-spinners/HashLoader";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { MdOutlineShoppingBasket } from "react-icons/md";

const Signin = () => {
  const { data: session, status } = useSession();

  console.log(status);

  console.log(session);

  const { push } = useRouter();

  const handleSignIn = (provider: string) => {
    console.log(provider);
    signIn(provider);
  };

  let content;

  if (status === "loading") {
    content = <HashLoader color='#a2d2ff' />;
  } else if (session) {
    setTimeout(() => {
      push("/");
    }, 2000);

    content = (
      <h1 className='text-4xl p-10 animate-fadeIn bg-gradient-to-r from-green to-sky-700 bg-clip-text text-transparent'>
        Welcome to the store
        <br />
        Happy shopping!
      </h1>
    );
  } else {
    content = (
      <>
        <Image src='/logo.png' alt='logo' width={180} height={100} />
        <div className='backdrop-blur-md border-2 border-green p-10 max-w-[500px] w-full h-full rounded-xl animate-fadeIn'>
          <div className='flex flex-col items-center gap-10'>
            <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>
              Sign In With..
            </h1>
            <button className='bg-blue-700 border-2 border-slate-200 p-3 rounded-lg flex flex-row items-center justify-center gap-10 w-full hover:scale-95 outline-none focus:border-none focus:ring-4 focus:ring-blue-700 ring-offset-2'>
              <ImFacebook className=' text-blue-200 w-[30px] md:w-[35px] h-auto' />
              <h1 className='text-white text-md sm:text-lg md:textxl tracking-wide font-bol'>
                Facebook
              </h1>
            </button>
            <button
              className='bg-white border-2 border-slate-200 p-3 rounded-lg flex flex-row items-center justify-center gap-10 w-full hover:scale-95  outline-none focus:border-none focus:ring-4 focus:ring-yellow-400 ring-offset-2'
              onClick={() => handleSignIn("google")}
            >
              <FcGoogle className=' w-[30px] md:w-[35px] h-auto' />
              <h1 className=' text-md sm:text-lg md:text-xl tracking-wide font-bold text-slate-700'>
                Google
              </h1>
            </button>
          </div>
        </div>
        <Link href='/'>
          <div className='flex flex-row items-center justify-between gap-3 mt-10 border border-slate-800 p-5 rounded-md backdrop-blur-md'>
            <h1 className='text-xl text-black font-bold'>
              Continue Shopping..
            </h1>
            <span>
              <MdOutlineShoppingBasket className=' md:text-black ' />
            </span>
          </div>
        </Link>
      </>
    );
  }

  return (
    <div className='px-20 flex flex-col items-center justify-center min-h-screen bg-signIn bg-no-repeat bg-cover bg-center bg-fixed '>
      {content}
    </div>
  );
};

export default Signin;
