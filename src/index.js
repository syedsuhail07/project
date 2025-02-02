import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" instead of "react-dom"
import App from "./App";
import { UserProvider } from "./components/context/UserContext"; // Ensure correct import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

