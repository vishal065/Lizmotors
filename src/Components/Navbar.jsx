import { useState } from "react";
import Research from "./Research/Research";
import { HeroOne } from "./Hero";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(section != activeSection ? section : null);
    setIsOpen(false); // Close dropdown after selection
  };

  const dropdownItems = [{ text: "External" }, { text: "Internal" }];

  return (
    <>
      <nav className="bg-fine flex items-center justify-between px-4 py-2 ">
        <NavLink to="/" className="text-fine4 text-xl font-bold">
          My App
        </NavLink>
        {/* Hidden on Mobile */}
        <div className="hidden md:flex items-center space-x-4 absolute end-5 gap-5 ">
          {/* Dropdown Button for Market Research */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-200 focus:outline-none px-3 py-2 rounded-md flex items-center "
          >
            Research
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.293l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute z-50 origin-top-right rounded-md bg-white shadow-lg mt-32 ">
              <ul className="py-1 divide-y divide-gray-200 ">
                {dropdownItems.map((item) => (
                  <li key={item.text}>
                    <NavLink
                      to={`/Research/${item.text}`}
                      onClick={() => toggleSection(item.text)}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      {item.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Other navigation links */}
          <NavLink
            to="/Planning"
            className={`text-white hover:text-gray-200 px-3 py-2 rounded-md ${
              activeSection === "Planning" ? "bg-gray-600" : ""
            }`}
            onClick={() => toggleSection("Planning")}
          >
            Planning
          </NavLink>
          <NavLink
            to="/Desiging"
            className={`text-white hover:text-gray-200 px-3 py-2 rounded-md ${
              activeSection === "Desiging" ? "bg-gray-600" : ""
            }`}
            onClick={() => toggleSection("Desiging")}
          >
            Desiging
          </NavLink>
          <NavLink
            to="/Manufacturing"
            className={`text-white hover:text-gray-200 px-3 py-2 rounded-md ${
              activeSection === "Manufacturing" ? "bg-gray-600" : ""
            }`}
            onClick={() => toggleSection("Manufacturing")}
          >
            Manufacturing
          </NavLink>
          <NavLink
            to="/book-now"
            className={`text-white hover:text-gray-200 px-3 py-2 rounded-md ${
              activeSection === "Book Now" ? "bg-gray-600" : ""
            }`}
            onClick={() => toggleSection("Book Now")}
          >
            Book Now
          </NavLink>
        </div>
        {/* Hamburger Button for Mobile */}
        <button
          type="button"
          className="md:hidden text-white focus:outline-none p-2 ml-60 mt-2 float-end "
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20M13 18H20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </button>
        {/* Mobile Dropdown Menu */}
        <div className="md:hidden absolute z-50 mt-2 origin-top-right rounded-md shadow-lg   ">
          <button
            className={`text-white mx-4 ${
              activeSection === "Planning" ? "bg-gray-600" : ""
            }`}
            onClick={() => toggleSection("Planning")}
          >
            Planning
          </button>
          <button
            className={`text-white mx-4 ${
              activeSection === "Desiging" ? "bg-gray-600" : ""
            }`}
            onClick={() => toggleSection("Desiging")}
          >
            Desiging
          </button>
          <button
            className={`text-white mx-4 ${
              activeSection === "Manufacturing" ? "bg-gray-600" : ""
            }`}
            onClick={() => toggleSection("Manufacturing")}
          >
            Manufacturing
          </button>
          <button
            className={`text-white mx-4 ${
              activeSection === "Book Now" ? "bg-gray-600" : ""
            }`}
            onClick={() => toggleSection("Book Now")}
          >
            Book Now
          </button>
          {isOpen && (
            <div className="relative left-60">
              <ul className="py-1 divide-y divide-gray-200  mt-24 ">
                {dropdownItems.map((item) => (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      onClick={() => toggleSection(item.text)}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      <HeroOne />
      <Research
        external={activeSection === "External"}
        internal={activeSection === "Internal"}
      />
    </>
  );
}

export default Navbar;
