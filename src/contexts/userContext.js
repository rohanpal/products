import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('userId'));
  return <UserContext.Provider value={{authenticated,setAuthenticated}}>{props.children}</UserContext.Provider>;
}
