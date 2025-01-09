import React, { createContext, useContext, useEffect, useState } from "react";
import anonymousSignIn from "../services/authService";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    userID: null,
    userName: "",
  });

  useEffect(() => {
    try {
      //   signIn();
    } catch (error) {
      console.error(error);
    }
  });

  const signIn = async () => {
    const result = await anonymousSignIn();
    updateGlobalState({
      userId: result.user.id,
      userName: result.user.role,
    });
  };
  const updateGlobalState = (newState) => {
    setGlobalState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <GlobalContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};
