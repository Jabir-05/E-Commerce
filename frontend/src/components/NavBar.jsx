import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsMenu(!isMenu);
  };

  useEffect(() => {
    const auth = localStorage.getItem("isLoggedIn");
    if (auth === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoogedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="relative py-4 px-6 bg-blue-950 flex items-center justify-between">
      <h1 className="text-white font-serif font-bold text-3xl">
        Quick <span className="text-yellow-500">Mart</span>
      </h1>
      <IoMenu
        onClick={handleToggle}
        className="w-10 h-10 md:hidden flex text-white cursor-pointer"
      />

      <div className="hidden md:flex items-center text-white font-bold text-md space-x-3">
        <Link className="hover:text-blue-600" to="/">
          Home
        </Link>
        <Link className="hover:text-blue-600" to="/food">
          Food
        </Link>
        <Link className="hover:text-blue-600" to="/clothes">
          Clothes
        </Link>
        <Link className="hover:text-blue-600" to="/medicine">
          Medicine
        </Link>
        <Link className="hover:text-blue-600" to="/others">
          Others
        </Link>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="border py-1 px-4 rounded-lg hover:bg-black"
          >
            Logout
          </button>
        ) : (
          <Link className="hover:text-blue-600" to="/login">
            <button className="border py-1 px-4 rounded-lg hover:bg-black">
              Login
            </button>
          </Link>
        )}
      </div>

      {isMenu && (
        <div className="absolute top-full left-0 w-full bg-blue-900 text-white flex flex-col items-start px-6 py-4 md:hidden space-y-2 z-50">
          <Link className="hover:text-blue-300" to="/" onClick={handleToggle}>
            Home
          </Link>
          <Link
            className="hover:text-blue-300"
            to="/food"
            onClick={handleToggle}
          >
            Food
          </Link>
          <Link
            className="hover:text-blue-300"
            to="/clothes"
            onClick={handleToggle}
          >
            Clothes
          </Link>
          <Link
            className="hover:text-blue-300"
            to="/medicine"
            onClick={handleToggle}
          >
            Medicine
          </Link>
          <Link
            className="hover:text-blue-300"
            to="/others"
            onClick={handleToggle}
          >
            Others
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="border py-1 px-4 rounded-lg hover:bg-black"
            >
              LogOut
            </button>
          ) : (
            <Link to="/login" onClick={handleToggle}>
              <button className="border py-1 px-4 rounded-lg hover:bg-black mt-2">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
