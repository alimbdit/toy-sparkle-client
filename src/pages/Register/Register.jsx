import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import avatar from "../../../public/avatar.png";
import { AuthContext } from "./../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.from?.pathname;

  const { registerUser, profileUpdate, googleSignIn, setUser } =
    useContext(AuthContext);

  const swalObj = {
    position: "center",
    icon: "success",
    title: "Welcome",
    text: "Registration Successful!",
    showConfirmButton: false,
    timer: 1500,
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();

    setRegisterError("");
    setRegisterSuccess("");

    const form = event.target;
    const userName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value || avatar;

    registerUser(email, password)
      .then((result) => {
        console.log(result.user);
        setRegisterError("");
        setRegisterSuccess("Registration successful");
        Swal.fire(swalObj);
        navigate(from || "/login", { replace: true });
        setUser(result.user);
        profileUpdate(userName, photo)
          .then(() => {
            // console.log("profile updated");
          })
          .catch((error) => {
            setRegisterError(error?.code.split("/")[1].split("-").join(" "));
          });

        event.target.reset();
      })
      .catch((error) => {
        setRegisterError(error?.code.split("/")[1].split("-").join(" "));
      });
  };

  const signInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        navigate(from || "/");
        console.log(result.user);
      })
      .catch((error) => {
        setRegisterError(error?.code.split("/")[1].split("-").join(" "));
      });
  };

  return (
    <>
      <div className="hero pb-10 bg-emerald-100 bg-opacity-10">
        <div className="hero-content flex-col lg:w-1/3">
          <div className="text-center">
            <h1 className="text-4xl font-bold my-3">Register</h1>
          </div>
          <div className=" card  flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit}
              className="card-body  bg-rose-100 bg-opacity-10 border border-rose-200 rounded-xl"
            >
              <div className="form-control mb-2">
                {/* <label className="label">
                  <span className="text-base">Your Name</span>
                </label> */}
                <input
                  type="text"
                  name="name"
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
              <div className="h-5 -mt-2 mb-2">
                <span className="text-rose-600 text-lg ">{registerError}</span>
                <span className="text-emerald-700  text-lg">
                  {registerSuccess}
                </span>
              </div>
              <div className="form-control">
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

          <button
            onClick={signInWithGoogle}
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

export default Register;
