import { features } from "process";
import React from "react";

const Combo = () => {
  const features = [
    {
      name: "Big bag",
      description: "numquam maxime enim mollitia possimus, sequi",
    },
    {
      name: "All fruit",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus",
    },
    { name: "Organic", description: '6.25" x 3.55" x 1.15"' },
    {
      name: "Essentials",
      description:
        "iusto dignissimos quasi reiciendis natus earum accusantium omnis",
    },
    { name: "Fresh Meat", description: "quam quas eius ipsam." },
  ];

  return (
    <div className='bg-white'>
      <div className='mx-auto grid max-w-2xl grid-cols-1 place-items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
        <div>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            All in one combo
          </h2>
          <p className='mt-4 text-gray-500'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            iusto dignissimos quasi reiciendis natus earum accusantium omnis
            quis molestiae animi numquam maxime enim mollitia possimus, sequi
            quam quas eius ipsam.
          </p>

          <dl className='mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
            {features.map((feature) => (
              <div key={feature.name} className='border-t border-gray-200 pt-4'>
                <dt className='font-medium text-gray-900'>{feature.name}</dt>
                <dd className='mt-2 text-sm text-gray-500'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
          <img
            src='/promo/item1.png'
            alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
            className='rounded-lg bg-gray-100'
          />
          <img
            src='/promo/item2.png'
            alt='Top down view of walnut card tray with embedded magnets and card groove.'
            className='rounded-lg bg-gray-100'
          />
          <img
            src='/promo/item3.png'
            alt='Side of walnut card tray with card groove and recessed card area.'
            className='rounded-lg bg-gray-100'
          />
          <img
            src='/promo/item4.png'
            alt='Walnut card tray filled with cards and card angled in dedicated groove.'
            className='rounded-lg bg-gray-100'
          />
        </div>
      </div>
    </div>
  );
};

export default Combo;
