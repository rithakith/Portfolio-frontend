import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (actions.handleQuery) {
      actions.handleQuery(message);
    } else {
      console.error("handleQuery function is not defined in actions");
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
