import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");


  return (
    <>
      <div className="hero pb-10 bg-emerald-100 bg-opacity-10">
        <div className="hero-content flex-col lg:w-1/3">
          <div className="text-center">
            <h1 className="text-4xl font-bold my-3">Login</h1>
          </div>
          <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body  bg-rose-100 bg-opacity-10 border border-rose-200 rounded-xl">
              <div className="form-control mt-1 mb-2">
                {/* <label className="label">
                  <span className="text-base">Email</span>
                </label> */}
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                {/* <label className="label">
                  <span className="text-base">Password</span>
                </label> */}
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <label className="mt-1">
                  <Link to="#" className="label-text link-default">
                    Forgot password?
                  </Link>
                </label>
              <div className="h-5 -mt-2 mb-2">
                <span className="text-rose-600 text-lg ">{loginError}</span>
                <span className="text-emerald-700  text-lg">{loginSuccess}</span>
              </div>
              <div className="form-control ">
                <input className="btn-default cursor-pointer" type="submit" value='Login' />
              </div>

              <p className="mt-2 text-center">Don&apos;t have an account? <Link className="link-default font-semibold" to='/register'> Register</Link></p>
            </form>
          </div>
          <div className="divider my-2 text-neutral-600">OR</div>

          <button
      
      className="border-2 border-emerald-700 text-emerald-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-lg px-4 py-2 flex items-center space-x-2  focus:outline-none focus:ring-0 "
    >
      <FaGoogle className="w-6 h-6" />
      <span className="text-lg font-medium">Continue with Google</span>
    </button>
        </div>
      </div>
    </>
  );
};

export default Login;
