import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const CustomBotAvatar = (props) => {
  return (
  

      <div className="react-chatbot-kit-chat-bot-avatar ">
      <div className="react-chatbot-kit-chat-bot-avatar-container ">
        {/* <FlightIcon className="react-chatbot-kit-chat-bot-avatar-icon" /> */}
   {/* <UserCircleIcon color='#B30049'/> */}
   <p className="react-chatbot-kit-chat-bot-avatar-letter text-colors-pink-1" style={{color:"#B30049"}}>R</p>
      </div>
    </div>
    
  );
};

export default CustomBotAvatar;
