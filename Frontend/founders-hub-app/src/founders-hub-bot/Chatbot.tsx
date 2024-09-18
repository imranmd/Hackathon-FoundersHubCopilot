import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { createDirectLine } from 'botframework-webchat';
import ReactWebChat from 'botframework-webchat';
import './Chatbot.css';
import { CircularProgress } from '@mui/material';

interface ChatbotProps {
  directLineSecret: string;
}

// Forward ref to expose sendMessage method
const Chatbot = forwardRef(({ directLineSecret }: ChatbotProps, ref) => {
  const [directLine, setDirectLine] = useState<any>(null);

  useEffect(() => {
    const botConnection = createDirectLine({
      secret: directLineSecret,
    });

    setDirectLine(botConnection);
  }, [directLineSecret]);

  // Expose sendMessage method to parent via ref
  useImperativeHandle(ref, () => ({
    sendMessage: (message: string) => {
      if (directLine) {
        directLine.postActivity({
          from: { id: 'user' },
          type: 'message',
          text: message,
        }).subscribe(
          (id: string) => console.log('Message sent with id: ', id),
          (error: Error) => console.error('Error posting activity', error)
        );
      }
    }
  }));

  return (
    <div className="chatbot-container">
      {directLine ? (
        <ReactWebChat directLine={directLine} />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
});

export default Chatbot;
