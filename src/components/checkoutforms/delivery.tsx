import { Listbox } from "@headlessui/react";
import { BsChevronDown } from "react-icons/Bs";
import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useCheckout } from "@/context/checkoutContext";

const Delivery = () => {
  const cities = [
    {
      id: 1,
      name: "Yangon",
    },
    {
      id: 2,
      name: "Mandalay",
    },
    {
      id: 3,
      name: "Thailand",
    },
    {
      id: 4,
      name: "USA",
    },
    {
      id: 5,
      name: "Canada",
    },
  ];

  const [city, setCity] = useState<typeof cities[0]>(cities[0]);

  const [phone, setPhone] = useState<number | undefined>(undefined);

  const [address, setAddress] = useState<string>("");

  const [remark, setRemark] = useState<string>("");

  const [checkout, setCheckout] = useLocalStorage("checkout", {});

  const { complete, setComplete, setCheckoutInfo } = useCheckout();

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    const checkoutInfo = {
      city: city.name,
      phone: phone,
      address: address,
      remark: remark,
    };

    setCheckoutInfo(checkoutInfo);
    setComplete(false);
  };

  return (
    <div className='py-2 px-3 min-h-[600px] md:min-h-fit'>
      <form action=''>
        <div className='row-start-1  grid grid-rows-4 grid-cols-6 gap-x-4 gap-y-10'>
          <div className='col-start-1 col-span-full grid grid-cols-4 w-full gap-x-2 gap-y-10'>
            <div className='col-span-full relative'>
              <Listbox value={city} onChange={setCity}>
                <Listbox.Button className=' w-full cursor-pointer rounded-lg bg-green text-white py-2 pl-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange sm:text-sm'>
                  <span>{city.name}</span>
                  <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                    <BsChevronDown />
                  </span>
                </Listbox.Button>
                <Listbox.Options className='absolute right-0 mt-1 max-w-[500px] mx-auto max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20 flex flex-col items-center'>
                  {cities.map((c, index) => (
                    <Listbox.Option
                      value={c}
                      key={index}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 text-center font-medium w-full text-lg text-white ${
                          active ? "bg-orange text-white" : "text-green"
                        }`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={` ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {c.name}
                          </span>
                          {selected ? (
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-orange'></span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
            <div className='col-span-full md:col-span-2'>
              <label
                htmlFor='phone-number'
                className='my-2 py-2 text-lg font-bold text-orange '
              >
                Contact number
              </label>
              <input
                required={true}
                id='phone-number'
                name='phone-number'
                type='number'
                value={phone}
                onChange={(e) => setPhone(parseInt(e.target.value))}
                className='text-white bg-green px-2 rounded-md h-full w-full  drop-shadow-md focus:outline-none focus:border-none focus:ring-2 focus:ring-orange focus:ring-offset-2 col-span-2'
              />
            </div>
          </div>
          <div className='row-start-2 row-end-3 md:row-end-4 col-start-1 col-span-full'>
            <label
              htmlFor='address'
              className='my-2 py-2 text-lg font-bold text-orange '
            >
              Address
            </label>
            <textarea
              required={true}
              name='address'
              id='address'
              placeholder='City'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className='text-white bg-green text-start rounded-md h-full w-full  drop-shadow-md focus:outline-none focus:border-none focus:ring-2 focus:ring-orange focus:ring-offset-2 p-3'
            />
          </div>
          <div className='row-start-3 md:row-start-4 row-end-4 md:row-end-4 col-start-1 col-span-full'>
            <label
              htmlFor='address'
              className='my-2 py-2 text-lg font-bold text-orange'
            >
              Remark
            </label>
            <textarea
              name='remark'
              id='remark'
              placeholder='eq: The yellow house down the road'
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              className='text-white bg-green px-2 rounded-md h-full w-full  drop-shadow-md focus:outline-none focus:border-none focus:ring-2 focus:ring-orange focus:ring-offset-2 '
            />
          </div>
          <div className='col-start-7 col-end-6'>
            <button
              type='submit'
              onClick={(e) => handleCheckout(e)}
              className='p-3 bg-orange self-end text-white font-medium tracking-wide rounded-lg text-sm md:text-lg'
            >
              All correct
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Delivery;
