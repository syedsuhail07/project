// src/components/ui/upload.js
import React from "react";

export const Upload = ({ label }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium">{label}</label>
      <input type="file" className="border rounded-lg p-2 mt-1" />
    </div>
  );
};
