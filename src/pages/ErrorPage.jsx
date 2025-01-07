
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAni from "../../public/errorAni.json";
import useTitle from "../hooks/useTitle";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  useTitle("Error")

  return (
    <div>
      <div className="flex justify-center mt-5 lg:-mt-2">
        <Lottie className=" lg:w-1/3 " animationData={errorAni} loop={true} />
      </div>
      <h2 className="mb-2 -mt-5 lg:-mt-14 font-bold text-8xl text-rose-700 text-center">
        <span className="sr-only">Error</span> {status || 404}
      </h2>
      <p className="text-xl text-center text-neutral-700 font-semibold md:text-3xl mb-3">
        {error?.message}
      </p>
      <div className="flex justify-center">
      <Link
            to='/'
            className='px-6 py-2 font-semibold hover:bg-violet-600 bg-violet-700 text-white text-lg rounded-xl mb-5 duration-300' 
          >
            Back to home
          </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
