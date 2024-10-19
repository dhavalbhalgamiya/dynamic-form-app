import {
  faAddressCard,
  faBriefcase,
  faClose,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function Sidebar({ jsonConfig, activeTab, handleTabChange, toggleMenu }) {
  const getIcon = (title) => {
    switch (title) {
      case "Contact Information":
        return faUser;
      case "Schooling Information":
        return faAddressCard;
      case "Employment Details":
        return faBriefcase;
      default:
        return faHome;
    }
  };

  return (
    <>
      <div className="text-right lg:hidden">
        <FontAwesomeIcon
          icon={faClose}
          className="mr-3 text-3xl ml-auto"
          onClick={toggleMenu}
        />
      </div>
      <h2 className="font-bold text-lg mb-4">Personal</h2>
      <ul className="space-y-4">
        {jsonConfig.groups.map((group) => (
          <li
            key={group.title}
            className={`cursor-pointer p-2  ${
              activeTab === group.title ? "font-bold" : "font-semibold"
            }`}
            onClick={() => handleTabChange(group.title)}
          >
            <FontAwesomeIcon icon={getIcon(group.title)} className="mr-2" />
            {group.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sidebar;
