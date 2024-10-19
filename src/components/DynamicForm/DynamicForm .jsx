import React from "react";
import RenderField from "../RenderField";

const DynamicForm = ({
  jsonConfig,
  handleSubmit,
  activeTab,
  formData,
  handleInputChange,
}) => {
  const group = jsonConfig.groups.find((group) => group.title === activeTab);
  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <fieldset key={group.title} className="border p-4 rounded">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {group.fields.map((field) => (
            <div key={field.name} className="form-group">
              <label className="block md:text-md text-sm font-medium mb-1">
                {field.label} {field.required && "*"}
              </label>
              <RenderField {...{ field, formData, handleInputChange }} />
            </div>
          ))}
        </div>
      </fieldset>
      <button type="submit" className="bg-black text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

// Render fields based on type

export default DynamicForm;
