import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";

import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
} from "@material-tailwind/react";
import {
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import Config from "../Chatbot/Config";
import MessageParser from "../Chatbot/MessageParser";
import ActionProvider from "../Chatbot/ActionProvider";
import '../../App.css'

export function SpeedDialWithTextOutside() {
  const [showChatbot, setShowChatbot] = useState(false); // State to show/hide chatbot

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot); // Toggle the visibility of the chatbot
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <SpeedDial>
        <SpeedDialHandler>
          {/* Add onClick to toggle chatbot visibility */}
          <IconButton
            className="rounded-full p-8 bg-colors-pink-1 transition-transform hover:scale-110 hover:bg-pink-600"
            onClick={toggleChatbot} // Toggle when clicking the icon
          >
            <ChatBubbleLeftEllipsisIcon className="h-7 w-7 text-white" />
          </IconButton>
        </SpeedDialHandler>
      </SpeedDial>

      {/* Conditionally render the chatbot if showChatbot is true */}
      {showChatbot && (
      <div className="fixed bottom-20 right-4 p-5 w-500 z-50" id="rkChatbot">
          <Chatbot
            config={Config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
}
