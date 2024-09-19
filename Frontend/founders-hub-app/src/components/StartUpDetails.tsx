import React from 'react';
import useAppBarTitle from './useAppBarTitle';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import { mockStartUpData } from './startUpMock';

const StartUpDetails: React.FC = () => {
  useAppBarTitle("My Startup");
  return (
    <Box sx={{ padding: 5, width:"100%" }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
                <Typography variant="h4" sx={{mr:5}}>Details of my Startup</Typography>
                <Box>
                    <Button variant="contained" color="warning" sx={{ mr: 1 }} startIcon={<AutoFixNormalIcon />} >
                        Modify
                    </Button>
                </Box>
            </Box>
      {Object.entries(mockStartUpData).map(([section, services]) => (
        <Accordion key={section} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{section}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {
                services.map((service) => (
                    <Box key={service.id} sx={{ marginBottom: 2 }}>
                      <Typography variant="subtitle1" color="#1976d2">{service.title}</Typography>
                      <Typography variant="body2">{service.value}</Typography>
                    </Box>
                  ))
            }
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default StartUpDetails;