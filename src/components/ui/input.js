// src/components/ui/input.js
import React from "react";

export const Input = ({ label, name, type = "text", onChange, required }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        required={required}
        className="border rounded-lg p-2 mt-1"
      />
    </div>
  );
};
