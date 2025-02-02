import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    name: "Syed",
    email: "syed@example.com",
    phone: "1234567890",
    year: "Final Year",
    branch: "CSE",
    block: "A",
  });

  return (
    <UserContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};
