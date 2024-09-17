import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EditIcon from '@mui/icons-material/Edit';
import SecurityIcon from '@mui/icons-material/Security';
import SavingsIcon from '@mui/icons-material/Savings';
import Chatbot from '../founders-hub-bot/Chatbot';
import './LandingPage.css';

const directLineSecret = 'YOUR_DIRECT_LINE_SECRET_HERE'; // Replace with your Direct Line Secret

const LandingPage: React.FC = () => {

  return (
    <div className="chatbot-wrapper">
      {/* Main Content */}
      <div className="main-content">
        <Box className="card-container">
          {/* Design Validation Card */}
          <Card className="action-card">
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
          <Card className="action-card">
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
          <Card className="action-card">
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
          <Card className="action-card">
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
        <Chatbot directLineSecret={directLineSecret} />
      </div>
    </div>
  );
};

export default LandingPage;
