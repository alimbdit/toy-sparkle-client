import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/logo.png";
import toys from "../../../../public/toys.png";

const Navbar = () => {
  return (
    <div className="component ">
      <div className="navbar bg-base-100">
        <div className="justify-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/alltoys"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  All Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mytoys"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addtoy"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Add Toy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  My Toys
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/" className=" flex items-center gap-2 lg:gap-3">
              <span className="p-2 lg:p-3 rounded-full bg-orange-100">
                <img className="w-7 lg:w-10 " src={toys} alt="" />
              </span>
              <div className="text-2xl lg:text-4xl font-extrabold">
                <span className="text-emerald-500">Toy</span>
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
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alltoys"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mytoys"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                My Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addtoy"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Add Toy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                My Toys
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:w-full justify-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={logo} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="active:bg-orange-500">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
