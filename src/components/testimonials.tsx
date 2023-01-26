import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import TestimonialCard from "./testimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      title: "Very",
      stars: 4,
      body: "animi ea obcaecati tempore possimus qui voluptatem incidunt esse?",
      user: "Mark Jane",
      date: "23,2, 2022",
    },
    {
      id: 2,
      title: "good service",
      stars: 4,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ad, aspernatur inventore numquam dolorum animi ea obcaecati tempore possimus qui voluptatem incidunt esse?",
      user: "Mark Jane",
      date: "23,2, 2022",
    },
    {
      id: 3,
      title: "I like",
      stars: 4,
      body: "Lorem ipsum dolor sit amet consectetur  commodi est dicta placeat quia culpa minima,aspernatur inventore numquam dolorum animi ea obcaecati tempore possimus qui voluptatem incidunt esse?",
      user: "Mark Jane",
      date: "23,2, 2022",
    },
    {
      id: 4,
      title: "this one",
      stars: 4,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ad, tenetur commodi est dicta placeat quia culpa minima,aspernatur inventore numquam dolorum animi ea obcaecati tempore possimus qui voluptatem incidunt esse?",
      user: "Mark Jane",
      date: "23,2, 2022",
    },
    {
      id: 5,
      title: "so much",
      stars: 4,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing dolorum animi ea obcaecati tempore possimus qui voluptatem incidunt esse?",
      user: "Mark Jane",
      date: "23,2, 2022",
    },
    {
      id: 6,
      title: "keep going",
      stars: 4,
      body: "Lorem ipsumquia culpa minima,aspernatur inventore numquam dolorum animi ea obcaecati tempore possimus qui voluptatem incidunt esse?",
      user: "Mark Jane",
      date: "23,2, 2022",
    },
  ];

  return (
    <>
      <section className='my-10'>
        <h1 className='mb-4 text-2xl font-bold p-2'>Testimonials</h1>

        <div className=' w-full bg-testimonialBg bg-cover bg-center rounded-xl'>
          <div className='flex flex-row gap-10 backdrop-blur-sm p-5 h-full min-w-screen overflow-x-scroll  scrollbar-thin scrollbar-corner-inherit scrollbar-thumb-blue-500 scrollbar-track-blue-200 scrollbar-thumb-rounded-full '>
            {testimonials
              .splice(0, 6)
              .map(({ id, title, stars, body, user }) => (
                <div key={id} className='list-none'>
                  <TestimonialCard
                    title={title}
                    stars={stars}
                    body={body}
                    user={user}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
