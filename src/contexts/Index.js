import React from "react";
import { HelperContextProvider } from "./HelperContext";
import { UserContextProvider } from "./UserContext";

// make new component that will work as container of all other contexts
// to be able to call all contexts as one component in the index.js file
// under the name of this component which is MainContext
// if new contexts added will be added to this file with same pattern
const MainContext = ({ children }) => {
  return (
    <UserContextProvider>
      <HelperContextProvider>{children}</HelperContextProvider>
    </UserContextProvider>
  );
};

export default MainContext;
