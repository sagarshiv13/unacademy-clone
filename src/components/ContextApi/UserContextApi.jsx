import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const statusHandler=(val)=>{
      setLogin(val);
  }
  return <UserContext.Provider value={{login,statusHandler}}>{children}</UserContext.Provider>;
};
