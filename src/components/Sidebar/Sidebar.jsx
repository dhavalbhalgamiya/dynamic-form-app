import React from "react";
function Sidebar({ jsonConfig, activeTab, handleTabChange }) {
  return (
    <div className="w-[280px] h-screen px-8 py-12 shadow-[5px_0_15px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:shadow-[10px_0_20px_rgba(0,0,0,0.3)] text-left">
      {/* <h2 className="font-bold text-lg mb-4">{jsonConfig.title}</h2> */}
      <h2 className="font-bold text-lg mb-4">Personal</h2>
      <ul className="space-y-4">
        {jsonConfig.groups.map((group) => (
          <li
            key={group.title}
            className={`cursor-pointer p-2 font-semibold ${
              activeTab === group.title ? "font-black" : ""
            }`}
            onClick={() => handleTabChange(group.title)}
          >
            {group.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
