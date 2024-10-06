import React from 'react';
import ReactMarkdown from 'react-markdown';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleQuery = async (query) => {
    try {
      const url = new URL(`${import.meta.env.VITE_BACKEND_URL}/chat/`);
      url.searchParams.append('query', query);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const message = createChatBotMessage(<ReactMarkdown>{data}</ReactMarkdown>);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    } catch (error) {
      console.error('Error querying the backend:', error);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleQuery },
        });
      })}
    </div>
  );
};

export default ActionProvider;
