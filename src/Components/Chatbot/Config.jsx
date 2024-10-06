import { createChatBotMessage } from 'react-chatbot-kit';
import CustomBotAvatar from '../ui/CustomBotAvatar';
import React from 'react';
const Config = {
  botName: "Rithara's Chatbot",
  initialMessages: [createChatBotMessage(`Hi I'm Rithara's chatbot. What can I do for you 😁?`)],
   // Defines an object of custom styles if you want to override styles
   customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#B30049",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#B30049",
    },
  },
  customComponents: {
    // Replaces the default header
   header: () => <div style={{ backgroundColor: '#B30049', padding: "5px", borderRadius: "3px" ,color:"white"}}>Have a chat with my Chatbot</div>,
   // Replaces the default bot avatar
   botAvatar: (props) => <CustomBotAvatar {...props} />,
   // Replaces the default bot chat message container
  //  botChatMessage: (props) => <CustomChatMessage {...props} />,
   // Replaces the default user icon
  //  userAvatar: (props) => <MyUserAvatar {...props} />,
   // Replaces the default user chat message
  //  userChatMessage: (props) => <MyUserChatMessage {...props} />
 },
};

export default Config;