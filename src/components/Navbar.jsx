import { NavLink } from "react-router-dom";
import logo from "../assets/netflix-icon-svgrepo-com (1).svg";
import { FaGripLines } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(true);

  function handleToggle() {
    setShow((prev) => {
      return !prev;
    });
  }

  return (
    <div>
      <nav className="flex flex-row justify-between items-center w-full bg-black relative lg:justify-around">
        <img src={logo} alt="" className="ml-7" />
        <div className="mr-7 sm:hidden" onClick={handleToggle}>
          {show ? (
            <FaGripLines fill="white"></FaGripLines>
          ) : (
            <FiX stroke="white" strokeWidth="3px" fontSize="25px"></FiX>
          )}
        </div>

        <div
          className={`${
            show
              ? " opacity-0 translate-y-[-10px] transition-all duration-100"
              : "opacity-100 translate-y-0 transition-all duration-100"
          } absolute bg-black/50 p-4 rounded-md top-[50px] right-[50px] sm:hidden   `}
        >
          <ul className="flex flex-col text-white items-center">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden sm:flex">
          <ul className="flex flex-row text-white/70 items-center font-medium text-[16px] leading-[1.2] gap-[70px]">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
