import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="hero pb-10 bg-emerald-100 bg-opacity-10">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-4xl font-bold my-3">Register</h1>
          </div>
          <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body  bg-rose-100 bg-opacity-10 border border-rose-200 rounded-xl">
              <div className="form-control mb-2">
                {/* <label className="label">
                  <span className="text-base">Your Name</span>
                </label> */}
                <input
                  type="text"
                  name='name'
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-2">
                {/* <label className="label">
                  <span className="text-base">Your Email</span>
                </label> */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-2">
                {/* <label className="label">
                  <span className="text-base">Your Email</span>
                </label> */}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control ">
                {/* <label className="label">
                  <span className="text-base">Password</span>
                </label> */}
                <input
                  type="url"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                 
                />
                
                
              </div>

              
              
              <label className="mt-1">
                  <Link to="#" className="label-text link-default">
                    Forgot password?
                  </Link>
                </label>
              <div className="form-control mt-6">
                <input
                  className="btn-default cursor-pointer"
                  type="submit"
                  value="Register"
                />
              </div>

              <p className="mt-2 text-center">
                Already have an account?{" "}
                <Link className="link-default font-semibold" to="/login">
                  {" "}
                  Login
                </Link>
              </p>
            </form>
          </div>
          <div className="divider text-neutral-600">OR</div>

          <button className="border-2 border-emerald-700 text-emerald-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-lg px-4 py-2 flex items-center space-x-2  focus:outline-none focus:ring-0 ">
            <FaGoogle className="w-6 h-6" />
            <span className="text-lg font-medium">Continue with Google</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
