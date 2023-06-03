import React from "react";
import EmptyMsg from "../EmptyMsg";
import SingleMSg from "./SingleMsg";

const Messages = () => {
  return (
    <div className="messages">
      {/* if there isn't msg  */}
      {/* <EmptyMsg/> */}
      {/* if there is msg  */}
      <div className="message">
        <SingleMSg />
        <SingleMSg />
      </div>
      <form className="send-box">
        <input type="text" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Messages;
