import { Link, NavLink } from "react-router-dom";

import toys from "../../../../public/toys.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
      .then(()=>{
      })
      .catch((error) => {
        // console.log(error);
      });
    // console.log(user);
  };

  return (
    <div className="component">
      <div className="navbar bg-base-100">
        <div className="justify-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost pl-0 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "inactive")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allToys"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  All Toys
                </NavLink>
              </li>
              {
                user && <li>
                <NavLink
                  to="/mytoys"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  My Toys
                </NavLink>
              </li>
              }
              {
                user && <li>
                <NavLink
                  to="/addToy"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Add Toy
                </NavLink>
              </li>
              }
              
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/" className=" flex items-center gap-2 lg:gap-3">
              <span className="p-2 lg:p-2 rounded-full bg-orange-100">
                <img className="w-7 lg:w-8 " src={toys} alt="" />
              </span>
              <div className="text-2xl lg:text-4xl font-extrabold">
                <span className="text-violet-500">Toy</span>
                <span className="text-orange-500 ">Sparkle</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allToys"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                All Toys
              </NavLink>
            </li>
            {
              user && <li>
              <NavLink
                to="/mytoys"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                My Toys
              </NavLink>
            </li>
            }
            {
              user && <li>
              <NavLink
                to="/addToy"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Add Toy
              </NavLink>
            </li>
            }
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:w-full justify-end">
          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to='/' onClick={handleLogOut} className="active:bg-orange-500">Logout</Link>
              </li>
            </ul>
          </div> */}
          
        </div>
        <div className="  items-end">
          {user ? (
            <div className="dropdown dropdown-end flex justify-end tooltip-info  tooltip tooltip-left" data-tip={user?.displayName}>
              <label
                tabIndex={0}
                className="relative cursor-pointer border-2 border-violet-500 rounded-full overflow-hidden  hover:bg-neutral-100  "
                
              >
                <div className=" w-10 h-10  flex justify-center items-center">
                  
                   <img
                      className=" w-10 h-10  rounded-full object-cover absolute "
                      src={user?.photoURL}
                      
                    />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact top-8  dropdown-content bg-base-100 rounded-box w-52"
              >
               
                <li>
                  <Link className="hover:bg-orange-300 text-base" to="/" onClick={handleLogOut}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex justify-end">
              <div>
                <Link to="/login" className="btn-default mr-5">
                  Login
                </Link>
                {/* <Link to="/register" className="btn-default">
                  Register
                </Link> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
