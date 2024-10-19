import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faUser,
  faSignOutAlt,
  faBell,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ activeTab, toggleMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="lg:p-4 flex justify-between items-center">
      <div className="lg:text-2xl text-md font-bold text-left">
        {" "}
        {activeTab}
      </div>
      <div className=" inline-flex items-center justify-between">
        <FontAwesomeIcon icon={faBell} className="mr-3" />
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2  px-3 py-2  rounded focus:outline-none"
          >
            <div className="w-8 h-8 bg-gray-300 rounded-full inline-flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <span className="lg:text-lg hidden lg:block">Full Name</span>
          </button>
          {dropdownOpen && (
            <div className="absolute text-left right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              <a
                href="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Profile
              </a>
              <a
                href="/settings"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faCog} className="mr-2" />
                Account Settings
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                Logout
              </a>
            </div>
          )}
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="ml-3 lg:hidden"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
