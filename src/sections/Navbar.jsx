import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center mb-10 px-8 py-6 fixed top-0 z-20 w-full bg-white">
      {/* Logo */}
      <img className="w-48" src="/assets/logo.png" alt="logo" />

      {/* Hamburger Icon */}
      <div
        className="text-2xl cursor-pointer md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FontAwesomeIcon icon={faBars}/>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <p className="font-medium cursor-pointer">About</p>
        <p className="font-medium cursor-pointer">Features</p>
        <p className="font-medium cursor-pointer">Price</p>
        <p className="font-medium cursor-pointer">Demo</p>
        <p className="font-medium cursor-pointer">Book</p>
        <p className="font-medium cursor-pointer">FAQ</p>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex gap-6">
        <button className="px-6 py-2 text-center rounded-lg text-nowrap bg-[rgb(22,32,85)] text-white font-medium">
          Sign Up
        </button>
        <button className="px-6 py-2 text-center rounded-lg text-nowrap border border-[rgb(22,32,85)]">
          Sign In
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-5 right-0 w-full h-screen bg-white flex flex-col items-start justify-start gap-6 md:hidden px-10">
          <div className="flex justify-between items-center w-full">
                <img className="w-48" src="/assets/logo.png" alt="logo" />
                <div
                className="text-2xl cursor-pointer md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                <FontAwesomeIcon icon={faXmark}/>
            </div>
          </div>
          <p
            className="cursor-pointer text-xl border-b-gray-300-opacity-50 text-left w-full pb-[1rem]"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </p>
          <p
            className="cursor-pointer text-xl border-b-gray-300-opacity-50 text-left w-full pb-[1rem]"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </p>
          <p
            className="cursor-pointer text-xl border-b-gray-300-opacity-50 text-left w-full pb-[1rem]"
            onClick={() => setIsMenuOpen(false)}
          >
            Price
          </p>
          <p
            className="cursor-pointer text-xl border-b-gray-300-opacity-50 text-left w-full pb-[1rem]"
            onClick={() => setIsMenuOpen(false)}
          >
            Demo
          </p>
          <p
            className="cursor-pointer text-xl border-b-gray-300-opacity-50 text-left w-full pb-[1rem]"
            onClick={() => setIsMenuOpen(false)}
          >
            Book
          </p>
          <p
            className="cursor-pointer text-xl border-b-gray-300-opacity-50 text-left w-full pb-[1rem]"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </p>
          <div className="flex gap-6 mt-6">
            <button className="px-6 py-2 text-center rounded-lg bg-[rgb(22,32,85)] text-white font-medium">
              Sign Up
            </button>
            <button className="px-6 py-2 text-center rounded-lg border border-[rgb(22,32,85)]">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
