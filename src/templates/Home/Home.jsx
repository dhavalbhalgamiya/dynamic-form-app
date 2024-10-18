import React, { useEffect, useState } from "react";
import { DynamicForm, Sidebar } from "../../components";

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
  };

  return (
    <div className="flex">
      <Sidebar
        jsonConfig={jsonConfig}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />

      <div className="w-[calc(100vw_-_280px)] p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-left">{activeTab}</h1>
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
