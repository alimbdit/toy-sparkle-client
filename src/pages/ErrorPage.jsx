import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAni from "../../public/errorAni.json";

const ErrorPage = () => {
  const { error, status } = useRouteError();

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
            className='px-6 py-2 font-semibold hover:bg-emerald-600 bg-emerald-700 text-white text-lg rounded-xl'
          >
            Back to home
          </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
