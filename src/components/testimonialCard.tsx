interface IProps {
  title: string;
  stars: number;
  body: string;
  user: string;
}
const TestimonialCard = ({ title, stars, body, user }: IProps) => {
  return (
    <div className='shadow-sm w-[320px] h-auto bg-sky-200/90 backdrop-blur-lg rounded-xl'>
      <blockquote className=' p-5 '>
        <div>
          <div className='flex gap-0.5 text-green-500'>
            {[...Array(stars).keys()].map((_, index) => (
              <svg
                key={index}
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
            ))}
          </div>

          <div className='mt-4'>
            <p className='text-2xl font-bold text-sky-500 sm:text-3xl'>
              {title}
            </p>

            <p className='mt-4 leading-relaxed text-gray-500 font-bold'>
              {body}
            </p>
          </div>
        </div>

        <footer className='mt-8 text-sm text-gray-500'>&mdash; {user}</footer>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
