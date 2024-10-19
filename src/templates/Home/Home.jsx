import React, { useEffect, useState } from "react";
import { DynamicForm, Navbar, Sidebar } from "../../components";

function Home({ jsonConfig }) {
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState(jsonConfig.groups[0].title); // Default tab
  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Handle form input changes
  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form submitted and data saved!");
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowMenu(false);
  };

  return (
    <div className="flex">
      <div
        className={`fixed w-screen h-screen contents bg-black/30 top-0 ${
          showMenu ? "left-0 z-1" : "left-[-100%]"
        } `}
        onClick={toggleMenu}
      />
      <div
        className={`fixed z-10 bg-white lg:relative lg:left-0 w-[280px] h-screen px-8 py-12 shadow-[5px_0_15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[10px_0_20px_rgba(0,0,0,0.3)] text-left ${
          showMenu ? "left-0" : "left-[-280px]"
        }`}
      >
        <Sidebar
          jsonConfig={jsonConfig}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
          toggleMenu={toggleMenu}
        />
      </div>
      <div className="w-full lg:w-[calc(100vw_-_280px)] p-8">
        <div className="mb-8">
          <Navbar toggleMenu={toggleMenu} activeTab={activeTab} />
        </div>
        <DynamicForm
          jsonConfig={jsonConfig}
          handleSubmit={handleSubmit}
          activeTab={activeTab}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default Home;
