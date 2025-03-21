import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-black  p-4 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Shop Name */}
        <div className="flex items-center space-x-2">
          <img
            src="./logo.png"
            alt="Fish Supply Logo"
            className="h-[60px] w-[60px] object-cover "
          />
          <span className="text-2xl font-bold">Ocean Fresh Supplies</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`md:flex space-x-6 text-lg ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:relative w-full md:w-auto bg-primary md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none md:top-0 md:left-0  top-16 left-0 `}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <a href="#" className="hover:font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:font-bold">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:font-bold">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:font-bold">
                Contact
              </a>
            </li>

            <li className="ml-5">
              <Link to="/user" className="hover:font-bold">
                <CgProfile className="size-8" />
              </Link>
            </li>

            <li className="ml-5">
              <Link to="/login" className="hover:font-bold">
                <BiLogOut className="size-8" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call to Action */}
        <a
          href="#"
          className="hidden md:block bg-secondary text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-400"
        >
          Order Now
        </a>
      </div>
    </header>
  );
}
