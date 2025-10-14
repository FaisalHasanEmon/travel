import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserProfile, setIsUserProfile] = useState(false);
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const navButtons = [
    { id: "1", link: "/", label: "Home" },
    {
      id: "2",
      link: "/hotel-request",
      label: "Hotel Request",
    },
    { id: "3", link: "/deals", label: "Deals" },
    { id: "4", link: "/savings-strategy", label: "Savings Strategy" },
    { id: "5", link: "/about-us", label: "About Us" },
    { id: "6", link: "/faq", label: "FAQ" },
    { id: "7", link: "/contact-us", label: "Contact Us" },
  ];
  return (
    <>
      <nav className=" py-4 shadow-md fixed top-0 left-0 w-full z-50 bg-white">
        <div className="container px-5 mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div>
            <Link className="flex items-center" to="/">
              <img src="/logo/logo.png" alt="Logo" className="h-[40px] mr-2" />
            </Link>
          </div>

          {/* Navigation Links and Buttons Wrapper */}
          <div className=" flex items-center lg:justify-center justify-end">
            <div className="hidden lg:flex items-center space-x-6">
              <ul className="flex space-x-8">
                {navButtons?.map((item) => (
                  <li key={item?.id}>
                    <NavLink
                      to={item?.link}
                      className={({ isActive }) =>
                        `hover:text-green-600 font-medium ${
                          isActive
                            ? "text-green-600  before:w-full before:inline-block before:absolute  before:border-white before:bg-green-600 before:rounded-tl-4xl before:rounded-tr-4xl  before:top-11.5 relative  before:shadow-[0_0_4px_1px_rgba(34,197,94,0.6)]  before:motion-scale-in-[0.1]  before:motion-translate-x-in-[3%] before:motion-translate-y-in-[42%]  "
                            : ""
                        }`
                      }
                    >
                      {item?.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* Hamburger Menu for Small Screens */}
            <div className="lg:hidden flex items-center">
              {isOpen ? (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700"
                >
                  <IoCloseSharp size={24} />
                </button>
              ) : (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
          </div>

          {user ? (
            <button
              onClick={() => setIsUserProfile(!isUserProfile)}
              className="w-12 h-12 border border-[#CACACA] rounded-full bg-gray-400 cursor-pointer overflow-hidden"
            >
              <img
                src={user?.photoURL}
                className="h-full w-full object-contain"
                alt="User Photo"
              />
            </button>
          ) : (
            <div className=" space-x-4 hidden lg:flex">
              <Link to="/auth/signin">
                <button className="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 font-medium">
                  Log in
                </button>
              </Link>
              <Link to="/auth/signup">
                <button className="bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600 font-medium">
                  Sign up
                </button>
              </Link>
            </div>
          )}
          {/* Login and Signup Buttons */}

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden mt-2  absolute top-12 right-6 w-[55%]">
              <ul className="text-left space-y-2 p-4 bg-white/30 backdrop-blur-3xl shadow-md rounded-lg">
                {navButtons?.map((item) => (
                  <li key={item?.id} className="shadow-sm rounded-lg py-1 pl-4">
                    <NavLink
                      to={item?.link}
                      className={({ isActive }) =>
                        ` font-medium  ${
                          isActive ? "text-green-600 " : "text-black"
                        }`
                      }
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {item?.label}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <button className="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 font-medium mt-2 w-full text-center">
                    Log in
                  </button>
                </li>
                <li>
                  <button className="bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600 font-medium  w-full text-center">
                    Sign up
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* User Profile DropDown */}
          {isUserProfile && (
            <div className="w-52 p-6 bg-[#FFFFFF] rounded-lg absolute right-10 top-20 shadow-sm motion-translate-x-in-[0%] motion-translate-y-in-[-106%] motion-ease-bounce  motion-duration-[0.38s]">
              <ul className="*:py-2 text-[#4A4A4A] text-[16px]">
                <li className="border-b border-[#CACACA] mb-2">
                  <Link
                    to="user-profile"
                    onClick={() => setIsUserProfile(!isUserProfile)}
                  >
                    User Profile
                  </Link>
                </li>
                <li className="border-b border-[#CACACA] mb-2">
                  <Link
                    to="user-settings"
                    onClick={() => setIsUserProfile(!isUserProfile)}
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsUserProfile(!isUserProfile);
                    }}
                    className="text-red-500"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
