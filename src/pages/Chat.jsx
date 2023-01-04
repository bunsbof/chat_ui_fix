import React from "react";

import ChatSidebar from "../components/Chat/ChatSidebar";
import Welcome from "../components/Chat/Welcome";

const Chat = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-between rounded-xl border-l-1 overflow-auto">
      <ChatSidebar />
      <Welcome />
    </div>
  );
};

export default Chat;
