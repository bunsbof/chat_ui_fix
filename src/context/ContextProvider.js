import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

// const initialState = {
//   chats: true,
//   sharedFile: true,
// };

export const ContextProvider = ({ children }) => {
  const [activeChat, setActiveChat] = useState(true);
  const [activeBtn, setActiveBtn] = useState("#E0F4F1");

  return (
    <StateContext.Provider
      value={{
        activeChat,
        setActiveChat,
        activeBtn,
        setActiveBtn,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
