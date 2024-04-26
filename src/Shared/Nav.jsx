import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Services/AuthProvider";

function Nav() {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  console.log(user?.email);
  const handleLogout = () => {
    signOutUser();
    setUser();
  };

  const link = (
    <>
      <NavLink to="/" className="pr-6 font-semibold" >
        Home
      </NavLink>
      <NavLink to="/allArtCraft" className="pr-6 font-semibold" >
        All Art&craft
      </NavLink>
      <NavLink to="/myArtCraft" className="pr-6 font-semibold" >
        My Art&Craft
      </NavLink>
      <NavLink to='/addArt' className="pr-6 font-semibold" >
        Add Craft
      </NavLink>
    </>
  );
  return (
    <div className="max-w-7xl mx-auto my-3">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
        </div>
        <div className="flex gap-2">
          <img className="w-10" src={logo} alt="" />
          <a className="text-2xl font-extrabold">
            Draw<span className="font-light">Mastery</span>
          </a>
        </div>
        <div className="navbar-end ">
          {user ? (
            <>
              <div className="flex gap-3 items-center">
                <button
                  onClick={handleLogout}
                  className="btn bg-gray-900 hover:bg-gray-600 text-white"
                >
                  Logout
                </button>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-4">
                <Link
                  to="/login"
                  className="btn border-2 border-gray-900 hover:bg-gray-100 bg-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn bg-gray-900 hover:bg-gray-600 text-white"
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
