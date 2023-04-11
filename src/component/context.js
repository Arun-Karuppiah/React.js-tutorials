import React from "react";

const UserContext=React.createContext("Hi Ak")
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer
export{UserContext,UserConsumer,UserProvider}