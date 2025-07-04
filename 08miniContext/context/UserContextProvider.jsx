// UserContextProvider.jsx
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  // Define state to hold the *entire* user object (or null if not logged in)
  const [user, setUser] = useState(null); // 'user' will hold the object {username, password} from Login

  return (
    // Provide both the 'user' state and its setter function 'setUser'
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
