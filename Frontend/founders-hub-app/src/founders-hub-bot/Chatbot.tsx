import React, { useEffect, useState } from 'react';
import { createDirectLine } from 'botframework-webchat';
import ReactWebChat from 'botframework-webchat';
import './Chatbot.css';
import { CircularProgress } from '@mui/material';

interface ChatbotProps {
  directLineSecret: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ directLineSecret }) => {
  const [directLine, setDirectLine] = useState<any>(null);

  useEffect(() => {
    const botConnection = createDirectLine({
      secret: directLineSecret,
    });

    setDirectLine(botConnection);
  }, [directLineSecret]);

  return (
    <div className="chatbot-container">
      {directLine ? (
        <ReactWebChat directLine={directLine}/>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Chatbot;
