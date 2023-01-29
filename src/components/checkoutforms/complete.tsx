import Router from "next/router";
import { HiBadgeCheck } from "react-icons/hi";
import { Animate, AnimateGroup } from "react-simple-animate";

const Complete = () => {
  const { push } = Router;

  return (
    <div className='min-h-[600px] grid place-content-center py-2 px-3'>
      <div className='mx-auto'>
        <h1 className='text-center font-bold tracking-wide text-green'>
          Thank You for shopping with us!
        </h1>
        <h2 className='text-center font-bold tracking-wide text-green'>
          See you next time!
        </h2>
      </div>
      <AnimateGroup play={true}>
        <Animate
          sequenceId={1}
          play={true}
          duration={1}
          start={{ opacity: 0, filter: "blur(10px)", color: "orange" }}
          end={{ opacity: 1, filter: "blur(0px)", color: "green" }}
          complete={{ color: "skyblue" }}
        >
          <HiBadgeCheck className='w-[200px] h-auto mx-auto text-green' />
        </Animate>
        <Animate
          sequenceId={0}
          play={true}
          duration={0.4}
          start={{ opacity: 0, filter: "blur(10px)", color: "white" }}
          end={{ opacity: 1, filter: "blur(0px)", color: "white" }}
          complete={{ color: "#8ac926" }}
        >
          <h1 className='text-2xl md:text-4xl text-center font-bold tracking-wider '>
            Your order has been placed!
          </h1>
          <Animate
            sequenceId={2}
            play={true}
            duration={0.4}
            start={{ opacity: 0, filter: "blur(10px)", color: "white" }}
            end={{ opacity: 1, filter: "blur(0px)", color: "white" }}
            complete={{ color: "#8ac926" }}
          >
            <button
              type='button'
              onClick={() => push("/")}
              className='text-center inline-flex justify-center w-full my-10'
            >
              Back to home page ?
            </button>
          </Animate>
        </Animate>
      </AnimateGroup>
    </div>
  );
};

export default Complete;
