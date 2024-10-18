import React from "react";
import RenderField from "../RenderField";

const DynamicForm = ({
  jsonConfig,
  handleSubmit,
  activeTab,
  formData,
  handleInputChange,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      {jsonConfig.groups
        .filter((group) => group.title === activeTab)
        .map((group) => (
          <fieldset key={group.title} className="border p-4 rounded">
            {/* <legend className="font-bold">{group.title}</legend> */}
            <div className="grid grid-cols-2 gap-4">
              {group.fields.map((field) => (
                <div key={field.name} className="form-group">
                  <label className="block text-sm font-medium">
                    {field.label} {field.required && "*"}
                  </label>
                  {RenderField(field, formData, handleInputChange)}
                </div>
              ))}
            </div>
          </fieldset>
        ))}
      <button type="submit" className="bg-black text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

// Render fields based on type

export default DynamicForm;
