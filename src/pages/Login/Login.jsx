import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const swalObj = {
    position: "center",
    icon: "success",
    title: "Welcome",
    text: "Login Successful!",
    showConfirmButton: false,
    timer: 1500,
  };

  const { signIn, setUser, googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";


//   email password signin

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoginSuccess("");
    setLoginError("");

    // console.log(email, password)
    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        Swal.fire(swalObj);
        navigate(from, { replace: true });
        console.log(result.user)
        setLoginError("");
        setLoginSuccess("Login successful");
        event.target.reset();
      })
      .catch((error) => {
        // console.log(error);
        setLoginError(error?.code.split("/")[1].split("-").join(" "));
      });
  };



//   google signin

  const signInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        navigate(from || "/");
        console.log(result.user);
      })
      .catch((error) => {
        setLoginError(error?.code.split("/")[1].split("-").join(" "));
      });
  };

  return (
    <>
      <div className="hero pb-10 bg-violet-100 bg-opacity-10">
        <div className="hero-content flex-col lg:w-1/3">
          <div className="text-center">
            <h1 className="text-4xl font-bold my-3">Login</h1>
          </div>
          <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleSignIn}
              className="card-body  bg-rose-100 bg-opacity-10 border border-rose-200 rounded-xl"
            >
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
                <span className="text-violet-700  text-lg">
                  {loginSuccess}
                </span>
              </div>
              <div className="form-control ">
                <input
                  className="btn-default cursor-pointer"
                  type="submit"
                  value="Login"
                />
              </div>

              <p className="mt-2 text-center">
                Don&apos;t have an account?{" "}
                <Link className="link-default font-semibold" to="/register">
                  {" "}
                  Register
                </Link>
              </p>
            </form>
          </div>
          <div className="divider my-2 text-neutral-600">OR</div>

          <button onClick={signInWithGoogle} className="border-2 border-violet-700 duration-300 text-violet-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-lg px-4 py-2 flex items-center space-x-2  focus:outline-none focus:ring-0 ">
            <FaGoogle className="w-6 h-6" />
            <span className="text-lg font-medium">Continue with Google</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
