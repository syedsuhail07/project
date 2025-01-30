// src/components/ui/textarea.js
import React from "react";

export const Textarea = ({ label, name, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium">{label}</label>
      <textarea
        name={name}
        onChange={onChange}
        className="border rounded-lg p-2 mt-1"
      />
    </div>
  );
};
