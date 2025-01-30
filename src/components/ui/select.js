// src/components/ui/select.js
import React from "react";

export const Select = ({ label, name, children, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium">{label}</label>
      <select name={name} onChange={onChange} className="border rounded-lg p-2 mt-1">
        {children}
      </select>
    </div>
  );
};

export const SelectItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};
