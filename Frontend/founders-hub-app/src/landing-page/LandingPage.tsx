import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EditIcon from '@mui/icons-material/Edit';
import SecurityIcon from '@mui/icons-material/Security';
import SavingsIcon from '@mui/icons-material/Savings';
import Chatbot from '../founders-hub-bot/Chatbot';
import './LandingPage.css';
import useAppBarTitle from '../components/useAppBarTitle';

const directLineSecret = 'YOUR_DIRECT_LINE_SECRET_HERE'; // Replace with your Direct Line Secret

const LandingPage: React.FC = () => {
  // Reference to the Chatbot component
  const chatbotRef = useRef<any>(null);
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // const requestOptions: RequestInit = {
    //   method: "GET",
    // };
    const getData = async () => {
      try {
        const response = await fetch("https://foundershub-backend-webapp-cya8bgevbtfeekey.southindia-01.azurewebsites.net/startups/1/?format=json");
        if(response.ok)
        {
          const data= await response.json()
          setData(data)
        }
      }
      catch ( error)
      {
        console.log(error)
      }
     

    }
    getData();

  }, []);

  useAppBarTitle("Explore Founders Hub");

  // Function to send message to chatbot
  const sendMessageToChatbot = (message: string) => {
    if (chatbotRef.current) {
      chatbotRef.current.sendMessage(message);
    }
  };





  return (
    <div className="chatbot-wrapper">
      {error && <p>Error: {error}</p>}
    
      {/* Main Content */}
      <div className="main-content">
        <Box className="card-container">
          {/* Design Validation Card */}
          <Card className="action-card" onClick={() => sendMessageToChatbot('How can I get my design easily validated?')}>
            <CardContent className="card-content">
              <DesignServicesIcon className="card-icon" />
              <div className="card-text">
                <Typography variant="h6" className="card-title">
                  Design validation
                </Typography>
                <Typography variant="body2">
                  How can I get my design easily validated?
                </Typography>
              </div>
            </CardContent>
          </Card>

          {/* Start a Draft Card */}
          <Card className="action-card" onClick={() => sendMessageToChatbot('Can you provide ways to start design a secure and scalable application')}>
            <CardContent className="card-content">
              <EditIcon className="card-icon" />
              <div className="card-text">
                <Typography variant="h6" className="card-title">
                  Start a draft
                </Typography>
                <Typography variant="body2">
                  Start a draft of design based on inputs.
                </Typography>
              </div>
            </CardContent>
          </Card>

          {/* Secure Coding Card */}
          <Card className="action-card" onClick={() => sendMessageToChatbot('How can I perform static code analysis in my code?')}>
            <CardContent className="card-content">
              <SecurityIcon className="card-icon" />
              <div className="card-text">
                <Typography variant="h6" className="card-title">
                  Secure Coding
                </Typography>
                <Typography variant="body2">
                  How can I perform static code analysis in my code?
                </Typography>
              </div>
            </CardContent>
          </Card>

          {/* Save Costs Card */}
          <Card className="action-card" onClick={() => sendMessageToChatbot('What are some ways to reduce costs in my application?')}>
            <CardContent className="card-content">
              <SavingsIcon className="card-icon" />
              <div className="card-text">
                <Typography variant="h6" className="card-title">
                  Save costs
                </Typography>
                <Typography variant="body2">
                  What are some ways to reduce costs in my application?
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Box>

        {/* Chatbot Section */}
        <Chatbot ref={chatbotRef} directLineSecret={directLineSecret} />
      </div>
    </div>
  );
};

export default LandingPage;
