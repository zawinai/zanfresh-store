import { IProps } from "@/types";
import { MdFormatQuote } from "react-icons/md";

const TestimonialCard = ({ title, stars, body, user }: IProps) => {
  return (
    <div className='shadow-sm w-[320px] h-auto bg-gradient-to-r from-sky-500 to-blue-500 backdrop-blur-lg rounded-xl'>
      <blockquote className=' p-5 '>
        <div className='mx-auto px-2 py-1 w-full'>
          <div className='inline-flex gap-1 text-green-500 items-center justify-center w-full'>
            {[...Array(stars).keys()].map((_, index) => (
              <svg
                key={index}
                className='h-7 w-7  text-yellow-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
            ))}
          </div>

          <div className='mt-4'>
            <p className='mt-4 leading-relaxed text-slate-200 font-bold'>
              {body}
            </p>
          </div>
        </div>

        <footer className='mt-8 text-md text-white font-bold text-end'>
          &mdash; {user}
        </footer>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
