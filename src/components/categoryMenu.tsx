import Image from "next/image";
import Link from "next/link";

const CategoryMenu = () => {
  const items = [
    {
      id: 1,
      name: "Vegetables",
      img: "/categories/veges.png",
      link: "veges",
      ring: "p-3 rounded-l-3xl rounded-r-3xl outline-none focus:border-none focus:ring-4 focus:ring-green-500 ring-offset-2",
    },
    {
      id: 2,
      name: "Fruit",
      img: "/categories/fruit.png",
      link: "fruit",
      ring: "p-3 rounded-l-3xl rounded-r-3xl outline-none focus:border-none focus:ring-4 focus:ring-green-300 ring-offset-2",
    },
    {
      id: 3,
      name: "Meat",
      img: "/categories/meat.png",
      link: "meat",
      ring: "transparent p-3 rounded-l-3xl rounded-r-3xl outline-none focus:border-none focus:ring-4 focus:ring-orange ring-offset-2",
    },
    {
      id: 4,
      name: "Fish",
      img: "/categories/fish.png",
      link: "fish",
      ring: "p-3 rounded-l-3xl rounded-r-3xl outline-none focus:border-none focus:ring-4 focus:ring-blue-300 ring-offset-2",
    },
    {
      id: 5,
      name: "Rice",
      img: "/categories/rice.png",
      link: "rice",
      ring: "p-3 rounded-l-3xl rounded-r-3xl outline-none focus:border-none focus:ring-4 focus:ring-orange-400 ring-offset-2",
    },
    {
      id: 6,
      name: "Flower",
      img: "/categories/flower.png",
      link: "flower",
      ring: "p-3 rounded-l-3xl rounded-r-3xl outline-none focus:border-none focus:ring-4 focus:ring-rose-400 ring-offset-2",
    },
    {
      id: 7,
      name: "Bevrage",
      img: "/categories/bev.png",
      link: "bevrage",
      ring: "p-3 rounded-l-3xl rounded-r-3xl outline-none focus:border-none focus:ring-4 focus:ring-rose-400 ring-offset-2",
    },
    {
      id: 8,
      name: "Snacks",
      img: "/categories/snacks.png",
      link: "snacks",
      ring: "p-3 rounded-l-3xl rounded-r-3xl outline-none focus:border-none focus:ring-4 focus:ring-rose-400 ring-offset-2",
    },
  ];

  return (
    <div className=' min-h-[300px] mx-auto mb-10 px-2 py-3'>
      <h1 className='mb-4 text-2xl font-bold'>Categories</h1>
      <ul className='grid grid-cols-menu-card place-items-center gap-y-3 gap-x-5'>
        {items.map(({ id, name, link, img, ring }) => (
          <Link
            href={`categories/${link}`}
            key={id}
            className={`w-[150px] h-auto flex flex-col items-center hover:scale-95 border rounded-md shadow-sm bg- z-30 bg-transparent md:bg-white ${""} ${ring}`}
          >
            <div className='flex flex-col items-center'>
              <Image src={img} width={150} height={150} alt='menu-card' />
              <span className='text-center '>{name}</span>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
