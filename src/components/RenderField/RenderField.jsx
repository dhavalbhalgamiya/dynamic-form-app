function RenderField(field, formData, handleInputChange) {
  switch (field.type) {
    case "text":
    case "number":
      return (
        <input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name] || ""}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
          required={field.required}
          className="mt-1 p-2 block w-full border border-gray-300 rounded"
        />
      );
    case "textarea":
      return (
        <textarea
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name] || ""}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
          required={field.required}
          className="mt-1 p-2 block w-full border border-gray-300 rounded"
        />
      );
    case "dropdown":
      return (
        <select
          name={field.name}
          value={formData[field.name] || ""}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
          required={field.required}
          className="mt-1 p-2 block w-full border border-gray-300 rounded"
        >
          <option value="">Select an option</option>
          {field.options.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    case "radio":
      return field.options.map((option, idx) => (
        <label key={idx} className="block">
          <input
            type="radio"
            name={field.name}
            value={option.value}
            checked={formData[field.name] === option.value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            required={field.required}
          />
          {option.label}
        </label>
      ));
    case "checkbox":
      return field.options.map((option, idx) => (
        <label key={idx} className="block">
          <input
            type="checkbox"
            name={field.name}
            value={option.value}
            checked={formData[field.name]?.includes(option.value) || false}
            onChange={(e) => {
              const isChecked = e.target.checked;
              const updatedValues = isChecked
                ? [...(formData[field.name] || []), option.value]
                : formData[field.name].filter((val) => val !== option.value);
              handleInputChange(field.name, updatedValues);
            }}
          />
          {option.label}
        </label>
      ));
    case "slider":
      return (
        <div className="form-group">
          <label className="block">{field.label}</label>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{field.min}</span>
            <input
              type="range"
              name={field.name}
              min={field.min}
              max={field.max}
              step={field.step}
              value={formData[field.name] || field.min}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className="mt-1 block w-full"
            />
            <span className="text-sm text-gray-500">{field.max}</span>
          </div>
          <div className="mt-2 text-center">
            <span className="font-semibold">
              {formData[field.name] || field.min}
            </span>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default RenderField;
