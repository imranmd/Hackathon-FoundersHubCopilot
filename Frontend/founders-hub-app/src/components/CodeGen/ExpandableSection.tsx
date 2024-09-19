import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { azureServices } from './azureServices';

const ExpandableSection: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
        <Typography variant="h6">Summary of Design Components</Typography>
      {Object.entries(azureServices).map(([section, services]) => (
        <Accordion key={section} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{section}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {Array.isArray(services) ? (
              services.map((service) => (
                <Box key={service.id} sx={{ marginBottom: 2 }}>
                  <Typography variant="subtitle1">{service.title}</Typography>
                  <Typography variant="body2">{service.desc}</Typography>
                </Box>
              ))
            ) : (
              Object.entries(services).map(([subSection, subServices]) => (
                <Accordion key={subSection} defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">{subSection}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {subServices.map((service) => (
                      <Box key={service.id} sx={{ marginBottom: 2 }}>
                        <Typography variant="subtitle1">{service.title}</Typography>
                        <Typography variant="body2">{service.desc}</Typography>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default ExpandableSection;