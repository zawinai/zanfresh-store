"use client";

import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className='max-w-[1000px] mx-auto text-5xl min-h-screen md:min-h-full mt-10 mb-10 px-2 '>
      <div className=' relative flex flex-col md:flex-row-reverse items-center justify-evenly '>
        <Image
          sizes='(min-width : 600px) 480w, 650w, 1300w'
          src='/hero-big.png'
          alt='hero'
          width={400}
          height={400}
          priority
          className='z-20'
        />

        <div className='absolute inset-x-0 top-[-10rem] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'>
          <svg
            className='relative left-[calc(50%-11rem)] z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
            viewBox='0 0 1155 678'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
              fillOpacity='.3'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#55f546' />
                <stop offset={1} stopColor='#20f00d' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* blobs */}
        <div className='absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
          <svg
            className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
            viewBox='0 0 1155 678'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
              fillOpacity='.3'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#90dbf4' />
                <stop offset={1} stopColor='#0077b6' />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className='absolute top-40 md:static w-[100vw] md:w-[400px] h-screen md:h-full flex flex-col items-center justify-center gap-3 md:gap-10 max-w-[800px]'>
          <div className='mt-1 md:mt-3 bg-white/20 md:bg-transparent backdrop-blur-sm drop-shadow-lg flex flex-col sm:flex-row items-center md:items-start justify-between md:flex-col w-[90vw] sm:w-[600px] h-[190px] p-3 md:p-0 md:w-full rounded-lg z-20'>
            <div className='text-black  z-30 text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-md tracking-wider'>
              We Provide
            </div>
            <TypeAnimation
              sequence={["Fresh", 1000, "Healthy", 1000, "Best", 1500]}
              wrapper='div'
              cursor={false}
              repeat={Infinity}
              className=' text-4xl sm:text-5xl md:text-6xl text-center text-orange font-black text-shadow-xl drop-shadow-xl tracking-wider'
            />
            <div className='text-green text-4xl sm:text-5xl md:text-6xl font-fresh drop-shadow-md font-bold tracking-wider'>
              Groceries
            </div>
          </div>
          <div className='text-base max-w-[30rem] mx-auto text-center md:text-start tracking-widest leading-relaxed z-10 px-3 backdrop-blur-[2px]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, omnis in officiis dignissimos optio, magnam itaque esse
            cupiditate pariatur nulla porro expedita fugiat. Qui eum incidunt
            placeat tenetur laudantium temporibus?
          </div>
          <div className='flex flex-row items-center justify-around w-full mb-20 mx-auto z-50'>
            <Link
              href='/auth/signin?callbackUrl=/'
              className='text-sm sm:text-lg md:text-xl w-[130px] md:w-[120px] text-center animate-color bg-gradient-to-r from-green via-orange to-white bg-clip-text text-transparent p-3 rounded-l-3xl rounded-r-3xl outline-none focus:border-none focus:ring-4 focus:ring-orange ring-offset-2 font-bold'
            >
              Shopping
            </Link>
            <Link
              href='/auth/signin?callbackUrl=/'
              className='text-lg p-2 rounded-xl outline-none focus:border-none focus:ring-4 focus:ring-orange ring-offset-2 cursor-pointer'
            >
              Login
            </Link>
            <Link
              href='/'
              className='text-lg p-2 rounded-xl outline-none focus:border-none focus:ring-4 focus:ring-orange ring-offset-2 cursor-pointer'
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
