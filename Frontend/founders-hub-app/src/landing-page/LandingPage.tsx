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
        <Typography variant="h4" gutterBottom>
          Welcome to the Founder Hub
        </Typography>

        <Box className="card-container">
          {/* Design Validation Card */}
          <Card className="action-card">
            <CardContent>
              <DesignServicesIcon className="card-icon" />
              <Typography variant="h5" className="card-title">
                Design validation
              </Typography>
              <Typography variant="body2">
                How can I get my design easily validated?
              </Typography>
            </CardContent>
          </Card>

          {/* Start a Draft Card */}
          <Card className="action-card">
            <CardContent>
              <EditIcon className="card-icon" />
              <Typography variant="h5" className="card-title">
                Start a draft
              </Typography>
              <Typography variant="body2">
                Start a draft of design based on inputs.
              </Typography>
            </CardContent>
          </Card>

          {/* Secure Coding Card */}
          <Card className="action-card">
            <CardContent>
              <SecurityIcon className="card-icon" />
              <Typography variant="h5" className="card-title">
                Secure Coding
              </Typography>
              <Typography variant="body2">
                How can I perform static code analysis in my code?
              </Typography>
            </CardContent>
          </Card>

          {/* Save Costs Card */}
          <Card className="action-card">
            <CardContent>
              <SavingsIcon className="card-icon" />
              <Typography variant="h5" className="card-title">
                Save costs
              </Typography>
              <Typography variant="body2">
                What are some ways to reduce costs in my application?
              </Typography>
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
