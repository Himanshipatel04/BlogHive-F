import { createContext, useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const userContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(
          "https://bloghive-b.onrender.com/api/v1/users/getUser",
          null,  // Request body (null if not needed)
          {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true,  // Include if needed
          }
        );
        setUser(response.data?.data);
        console.log(response.data?.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
