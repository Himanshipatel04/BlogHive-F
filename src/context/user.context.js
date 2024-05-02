import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const userContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const parseAccessToken = () => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        try {
          const decodedToken = jwtDecode(accessToken);
          setUser(decodedToken);
        } catch (error) {
          console.log("User not found!");
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    parseAccessToken();
    console.log(user);
  }, []);

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};
