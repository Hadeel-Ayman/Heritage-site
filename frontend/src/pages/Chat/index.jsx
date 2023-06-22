import React, { useContext } from "react";
import "./style.scss";

import Conversation from "./Conversation";
import Messages from "./Messages";
// import { ChatContext } from "../../context/chatContext";

const Chat = () => {
  // const { userChats, isUserChatsLoading, userChatsError } =
  //   useContext(ChatContext);
  // console.log("userChats", userChats);
  return (
    <div className="wrapper">
      <div className="chat">
        <Conversation />
        <Messages />
      </div>
    </div>
  );
};

export default Chat;
