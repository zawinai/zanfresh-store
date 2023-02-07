import React from "react";

// Utils
import { Disclosure, Transition } from "@headlessui/react";
import { HiPlus, HiChevronDown } from "react-icons/hi";

//Components
import Card from "@/components/card";

const Products = () => {
  const listMenu = [
    {
      id: 1,
      name: "Meat",
      options: [
        {
          id: 1,
          name: "Chicken",
        },
        {
          id: 2,
          name: "Pork",
        },
        {
          id: 3,
          name: "Beef",
        },
        {
          id: 4,
          name: "Mutton",
        },
      ],
    },
    {
      id: 2,
      name: "Fish & Prawns",
      options: [
        {
          id: 1,
          name: "Fresh Water Fish",
        },
        {
          id: 2,
          name: "Seafood",
        },
        {
          id: 3,
          name: "Prawns",
        },
        {
          id: 4,
          name: "Lobsters",
        },
      ],
    },
    {
      id: 3,
      name: "Rice and Oil",
      options: [
        {
          id: 1,
          name: "Paw San Mwae",
        },
        {
          id: 2,
          name: "Shwe Bo",
        },
        {
          id: 3,
          name: "Shan Rice",
        },
        {
          id: 4,
          name: "Basmati",
        },
      ],
    },
    {
      id: 4,
      name: "Vegetables",
      options: [
        {
          id: 1,
          name: "Local fresh",
        },
        {
          id: 2,
          name: "Organic",
        },
      ],
    },
    {
      id: 5,
      name: "Fruits",
      options: [
        {
          id: 1,
          name: "Local fresh",
        },
        {
          id: 2,
          name: "Organic",
        },
      ],
    },
  ];

  const items = [
    {
      id: 1,
      name: "Water spinach",
      img: "/items/item1.png",
      price: 20000,
      qty: 12,
      promo: false,
    },
    {
      id: 2,
      name: "Bok Choy",
      img: "/items/item2.png",
      price: 120,
      qty: 12,
      promo: false,
    },
    {
      id: 3,
      name: "Corainder",
      img: "/items/item3.png",
      price: 150,
      qty: 10,
      promo: false,
    },
    {
      id: 4,
      name: "Dragon Fruit",
      img: "/items/item4.png",
      price: 320,
      qty: 12,
      promo: false,
    },
    {
      id: 5,
      name: "Pineapple",
      img: "/items/item5.png",
      price: 820,
      qty: 32,
      promo: false,
    },
    {
      id: 6,
      name: "Garlic",
      img: "/items/garlic.png",
      price: 320,
      qty: 92,
      promo: false,
    },
    {
      id: 7,
      name: "Long bean",
      img: "/items/item1.png",
      price: 220,
      qty: 82,
      promo: false,
    },
    {
      id: 8,
      name: "Banana",
      img: "/items/item8.png",
      price: 420,
      qty: 42,
      promo: false,
    },
    {
      id: 9,
      name: "Broccoli",
      img: "/items/item9.png",
      price: 120,
      qty: 190,
      promo: false,
    },
    {
      id: 10,
      name: "Chilli",
      img: "/items/Chili.png",
      price: 220,
      qty: 62,
      promo: false,
    },
  ];

  return (
    <main className=' grid grid-rows-2 grid-cols-6 max-w-[1500px] mx-auto'>
      <section className=' hidden md:block col-start-1 col-end-3 px-10 py-20 sticky top-20'>
        <div className='mx-auto max-w-[300px] bg-green rounded-md p-4'>
          <h1 className='text-orange text-3xl font-bold drop-shadow-sm shadow-white'>
            Options
          </h1>
          <ul className='flex flex-col gap-3 mt-5'>
            {listMenu.map(({ id, name, options }) => (
              <li key={id}>
                <Disclosure>
                  {({ open }) => (
                    <div className={`${open ? "drop-shadow-sm" : ""}`}>
                      <Disclosure.Button
                        className={`rounded-t-md p-3 inline-flex items-center justify-between w-full focus:outline-none focus:ring-1 focus:ring-white ${
                          open ? "bg-slate-200/60" : ""
                        }`}
                      >
                        <span className='text-start text-white text-sm font-medium tracking-wider drop-shadow-sm'>
                          {name}
                        </span>
                        <HiChevronDown className='text-white w-[20px] h-auto' />
                      </Disclosure.Button>
                      <Disclosure.Panel className='rounded-b-md p-3 bg-slate-200/60 flex flex-col'>
                        {options.map(({ id, name }) => (
                          <li
                            key={id}
                            className='inline-flex justify-between cursor-pointer'
                          >
                            <label
                              htmlFor='option'
                              className='text-sm tracking-wider font-semibold text-orange'
                            >
                              {name}
                            </label>
                            <input
                              type='checkbox'
                              name='option'
                              id='option'
                              className='border-none outline-none focus:border-transparent focus:ring-transparent focus:outline-none'
                            />
                          </li>
                        ))}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='row-span-full col-span-full md:col-start-3 md:col-end-7 grid grid-rows-shopping-page my-10'>
        <div>
          <h1 className='text-2xl md:text-3xl font-bold tracking-wide'>
            Total 233 results
          </h1>
        </div>
        <div className='px-1 py-10'>
          <ul className='grid grid-cols-item-card items-center justify-items-center gap-x-5 gap-y-5 p-3'>
            {items.map(({ id, name, img, price }) => (
              <li key={id}>
                <Card id={id} name={name} img={img} price={price} />
              </li>
            ))}
          </ul>
        </div>
        <ul className='inline-flex items-center mx-auto'>
          <nav className='isolate inline-flex -space-x-px rounded-md shadow-sm'>
            <li className='relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'>
              1
            </li>
            <li className='relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'>
              2
            </li>
            <li className='relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'>
              3
            </li>
            <li className='relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'>
              4
            </li>
          </nav>
        </ul>
      </section>
    </main>
  );
};

export default Products;
