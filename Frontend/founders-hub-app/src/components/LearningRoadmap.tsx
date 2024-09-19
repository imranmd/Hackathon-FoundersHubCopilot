import React, { useState, useCallback } from 'react';
import { 
    Box, 
    Button,
    Grid2,
    Typography, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails, 
    Link, 
    List, 
    ListItem, 
    ListItemText 
  } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chatbot from '../founders-hub-bot/Chatbot';


const DIRECT_LINE_SECRET = 'YOUR_DIRECT_LINE_SECRET_HERE';

const DEFAULT_ROADMAP = [
    {
      title: "React.js",
      description: "Learn the basics of React.js, including JSX, components, and state management.",
      recommendedCourses: [
        { title: "React - The Complete Guide", url: "https://example.com/react-course" },
        { title: "Modern React with Redux", url: "https://example.com/react-redux-course" }
      ]
    },
    {
      title: "TypeScript",
      description: "Understand how to use TypeScript with React to ensure type safety in your code.",
      recommendedCourses: [
        { title: "Understanding TypeScript", url: "https://example.com/typescript-course" },
        { title: "TypeScript for React Developers", url: "https://example.com/typescript-react-course" }
      ]
    }
  ];

const LearningRoadmap = () => {
  const [roadmapState, setRoadmapState] = useState(DEFAULT_ROADMAP);

  const handleClearScreen = useCallback(() => {
    setRoadmapState(DEFAULT_ROADMAP);
  }, []);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const content = e.target?.result;
        if (typeof content === 'string') {
            const jsonData = JSON.parse(content);
            // Check if the JSON contains the expected structure before updating the state
            if (Array.isArray(jsonData)) {
                setRoadmapState(jsonData);
            } else {
                alert('Invalid JSON structure. Expected an array.');
            }
        }
      } catch (error) {
        alert('Error reading the file. Please make sure it is a valid JSON.');
      }
      // Reset the file input value after the file is read
      event.target.value = '';
    };

    reader.onerror = () => {
      alert('Error reading the file.');
    };

    reader.readAsText(file);
  }, []);

  return (
    <Grid2 container spacing={2} sx={{ height: '89vh', display: 'flex' }}>
      <Grid2 size={{ xs: 6, md: 9 }} sx={{ height: '100%' }} >
        <Box 
          sx={{
            height: '100%',
            border: '1px solid black',
            padding: 2,
            borderRadius: 2,
            overflow: 'auto',
          }}
        >
          {roadmapState.map((skill, index) => (
        <Accordion
          key={index}
          sx={{
            mb: 2, // Margin-bottom to add space between Accordion items
            boxShadow: 3, // Apply a light shadow
            borderRadius: '8px', // Slight rounding of the corners
            overflow: 'hidden', // Ensures the content doesn't bleed outside
            backgroundColor: '#f5f5f5' // Light gray background for better contrast
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{ backgroundColor: '#e0e0e0' }} // Subtle background color for the header
          >
            <Typography variant="h6">{skill.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" gutterBottom>
              {skill.description}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Recommended Courses:
            </Typography>
            <List>
              {skill.recommendedCourses.map((course, courseIndex) => (
                <ListItem key={courseIndex}>
                  <ListItemText
                    primary={
                      <Link href={course.url} target="_blank" rel="noopener">
                        {course.title}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 6, md: 3 }} sx={{ height: '100%' }}>
        <Box
          sx={{
            height: '100%',
            border: '1px solid black',
            padding: 2,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ padding: 2, flex: 1 }}>
            <Chatbot directLineSecret={DIRECT_LINE_SECRET} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
            <Button variant="contained" component="label">
              Upload File
              <input
                type="file"
                accept=".json"
                hidden
                onChange={handleFileUpload}
              />
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClearScreen}
            >
              Clear Screen
            </Button>
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default LearningRoadmap;
