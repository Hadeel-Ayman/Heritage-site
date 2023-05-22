import React from 'react'
import './style.scss';

import Conversation from './Conversation';
import Messages from './Messages';

const Chat = () => {
  return (
    <div className="wrapper">
        <Conversation/>
        <Messages/>
    </div>
  )
}

export default Chat