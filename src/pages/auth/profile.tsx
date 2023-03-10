import React, { Fragment, useState } from "react";
import Image from "next/image";
import { FaEdit, FaPen, FaHeart, FaStar } from "react-icons/Fa";

import { Dialog, Transition } from "@headlessui/react";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [star, setStar] = useState(0);
  return (
    <>
      <div className=' min-h-screen grid grid-cols-8 mx-auto max-w-[1600px] md:py-10 px-5 md:px-0'>
        <div className='col-span-full md:col-start-1 md:col-end-6 order-last md:order-first px-4 py-10 bg-green rounded-md md:ml-5'>
          <h1 className='text-center my-5 text-2xl md:text-4xl font-semibold text-white drop-shadow-md'>
            Order History
          </h1>
          <table className='w-full bg-orange rounded-md drop-shadow-md mx-auto'>
            <thead className='text-bold text-slate-600 tracking-wider'>
              <tr className='grid grid-cols-8 bg-slate-100 rounded-t-md'>
                <th className='col-span-2 text-sm md:text-lg '>Date</th>
                <th className='col-span-2 text-sm md:text-lg '>Items</th>
                <th className='col-span-2 text-sm md:text-lg '>Totals</th>
                <th className='col-span-2 text-sm md:text-lg '>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className='grid grid-cols-8 text-white'>
                <td className='col-span-2 mx-auto text-sm md:text-lg'>
                  12,2,21
                </td>
                <td className='col-span-2 mx-auto text-sm md:text-lg'>21</td>
                <td className='col-span-2 mx-auto text-sm md:text-lg'>
                  1500.00
                </td>
                <td className='col-span-2 mx-auto text-sm md:text-lg'>
                  Delivered
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col-span-full md:col-start-6 md:col-end-9 pt-10'>
          <div className='relative min-h-[300px] mx-auto p-10 flex flex-col items-center gap-10 rounded-md'>
            <div className='inline-flex items-center justify-center w-full '>
              <Image
                src='/demi.jpg'
                width={80}
                height={80}
                alt='user'
                className='rounded-full'
              />
            </div>
            <div className='flex flex-col items-center w-full'>
              <h1 className='text-md font-bold text-slate-700'>
                Zaw Win Naing
              </h1>
              <button
                type='button'
                className=' inline-flex items-center gap-5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 p-3 rounded-md my-4'
                onClick={() => setOpen(true)}
              >
                <FaPen />
                <span className='text-sm text-slate-500 '>
                  Please Share Your Experience of Shopping With US!
                </span>
              </button>
            </div>
            <div className='flex flex-col items-center gap-10 w-full'>
              <form className='relative flex flex-col items-start bg-green p-5 rounded-md drop-shadow-md min-w-[250px] w-[90%] min-h-[300px]'>
                <button type='button'>
                  <FaEdit className='absolute right-2 top-3 text-white' />
                </button>
                <div className='flex flex-col items-center w-full gap-6 mt-10'>
                  <h1 className='text-xl font-bold tracking-wider text-white drop-shadow-md'>
                    Delivery Address
                  </h1>
                  <div className='flex flex-col md:flex-row intems-center justify-start w-full gap-5 md:gap-10'>
                    <label
                      htmlFor='city'
                      className='drop-shadow-sm w-[40px] md:text-start col-span-6 text-center text-white font-medium tracking-wider small:col-span-full'
                    >
                      City
                    </label>
                    <input
                      id='city'
                      name='city'
                      type='text'
                      readOnly={true}
                      placeholder='Yangon'
                      className='w-full max-w-[140px] rounded-md px-3 drop-shadow-md'
                    />
                  </div>
                  <div className='flex flex-col md:flex-row intems-center justify-start w-full gap-5 md:gap-10'>
                    <label
                      htmlFor='phone'
                      className='drop-shadow-sm w-[40px] md:text-start text-center text-white font-medium tracking-wider small:col-span-full'
                    >
                      Phone
                    </label>
                    <input
                      id='phone'
                      name='phone'
                      type='number'
                      readOnly={true}
                      placeholder='09******'
                      className='w-full rounded-md px-3 drop-shadow-md'
                    />
                  </div>
                  <div className='flex flex-col md:flex-row intems-center justify-start w-full gap-5 md:gap-10'>
                    <label
                      htmlFor='address'
                      className='drop-shadow-sm w-[40px] md:text-start text-center text-white font-medium tracking-wider small:col-span-full'
                    >
                      Address
                    </label>
                    <input
                      id='address'
                      name='address'
                      type='number'
                      readOnly={true}
                      className='w-full h-[60px] rounded-md px-3 drop-shadow-md'
                    />
                  </div>
                </div>
                <div className='self-end mt-6 bg-orange px-3 py-2 rounded-md text-white'>
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Transition.Root as={Fragment} show={open}>
        <Dialog as='div' className='relative z-10' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full justify-center p-4 text-center items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-xl mx-auto'>
                  <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                    <div className='flex flex-col items-center gap-5'>
                      <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-200 sm:mx-0 sm:h-10 sm:w-10'>
                        <FaHeart
                          className='h-6 w-6 text-rose-400'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='mt-3 sm:mt-0 sm:text-left w-full space-y-10 '>
                        <Dialog.Title
                          as='h3'
                          className='text-lg font-bold leading-6 text-gray-900 text-center tracking-widest'
                        >
                          How it is shopping with us..?
                        </Dialog.Title>
                        <ul className='flex flex-row items-center justify-center gap-10 w-full'>
                          {[...Array(5).keys()].map((index) => (
                            <li key={index}>
                              <button
                                type='button'
                                onClick={() => setStar(index + 1)}
                              >
                                <FaStar
                                  className={`w-[30px] h-auto ${
                                    star > index ? "text-yellow-400" : ""
                                  }`}
                                />
                              </button>
                            </li>
                          ))}
                        </ul>
                        <div className='mt-2 w-full mx-auto '>
                          <textarea
                            name='testimonial'
                            id='testimonial'
                            cols={20}
                            rows={10}
                            className='w-full bg-slate-200 rounded-md px-4 py-2 text-base font-medium text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                    <button
                      type='button'
                      className='inline-flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                    >
                      Submit
                    </button>
                    <button
                      type='button'
                      className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Profile;
