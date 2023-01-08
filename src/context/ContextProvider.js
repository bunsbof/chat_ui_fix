import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

// const initialState = {
//   chats: true,
//   sharedFile: true,
// };

export const ContextProvider = ({ children }) => {
  const [activeChat, setActiveChat] = useState(false);
  const [activeBtn, setActiveBtn] = useState("#E0F4F1");
  const [toggleChat, setToggleChat] = useState(true);
  const [toggleShared, setToggleShared] = useState(true);

  return (
    <StateContext.Provider
      value={{
        activeChat,
        setActiveChat,
        activeBtn,
        setActiveBtn,
        toggleChat,
        setToggleChat,
        toggleShared,
        setToggleShared,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
