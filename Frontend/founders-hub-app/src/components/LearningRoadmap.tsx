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
import useAppBarTitle from './useAppBarTitle';


const DIRECT_LINE_SECRET = 'YOUR_DIRECT_LINE_SECRET_HERE';

const DEFAULT_ROADMAP = [
  // Backend Services
  {
    title: 'Azure Functions',
    description:
      'Learn how to create, deploy, and manage serverless functions using Azure Functions, including understanding triggers, bindings, and integrating with other Azure services.',
    recommendedCourses: [
      {
        title: 'Create serverless applications',
        url: 'https://learn.microsoft.com/en-us/training/paths/create-serverless-applications/',
      },
      {
        title: 'Azure Functions Fundamentals',
        url: 'https://www.udemy.com/course/azure-functions-fundamentals/',
      },
    ],
  },
  {
    title: 'Azure API Management',
    description:
      'Understand how to publish, secure, transform, maintain, and monitor APIs with Azure API Management.',
    recommendedCourses: [
      {
        title: 'Implement API Management',
        url: 'https://learn.microsoft.com/en-us/training/modules/implement-api-management/',
      },
      {
        title: 'Azure API Management Essentials',
        url: 'https://www.pluralsight.com/courses/azure-api-management-essentials',
      },
    ],
  },
  {
    title: 'Azure SQL Database',
    description:
      'Learn how to create, configure, and manage Azure SQL Databases, including querying data and performance tuning.',
    recommendedCourses: [
      {
        title: 'Azure SQL Fundamentals',
        url: 'https://learn.microsoft.com/en-us/training/paths/azure-sql-fundamentals/',
      },
      {
        title: 'Developing Applications with SQL Database',
        url: 'https://www.pluralsight.com/courses/developing-applications-with-azure-sql-database',
      },
    ],
  },
  {
    title: 'Azure Blob Storage',
    description:
      'Understand how to store and access unstructured data at scale using Azure Blob Storage, including managing blobs and containers.',
    recommendedCourses: [
      {
        title: 'Store data in Azure',
        url: 'https://learn.microsoft.com/en-us/training/paths/store-data-in-azure/',
      },
      {
        title: 'Azure Storage for Developers',
        url: 'https://www.udemy.com/course/azure-storage-for-developers/',
      },
    ],
  },
  {
    title: 'Azure Cosmos DB',
    description:
      'Learn about globally distributed, multi-model databases and how to use Azure Cosmos DB for scalable applications.',
    recommendedCourses: [
      {
        title: 'Introduction to Azure Cosmos DB',
        url: 'https://learn.microsoft.com/en-us/training/modules/intro-to-azure-cosmos-db/',
      },
      {
        title: 'Azure Cosmos DB for Developers',
        url: 'https://www.pluralsight.com/courses/azure-cosmos-db-developers',
      },
    ],
  },

  // Frontend WebApp Services
  {
    title: 'Azure Static Web Apps (WebApp)',
    description:
      'Learn how to build, deploy, and host static web applications directly from a GitHub repository using Azure Static Web Apps.',
    recommendedCourses: [
      {
        title: 'Deploy a static website with Azure Static Web Apps',
        url: 'https://learn.microsoft.com/en-us/training/modules/publish-app-service-static-web-app-api/',
      },
      {
        title: 'Azure Static Web Apps: Getting Started',
        url: 'https://www.linkedin.com/learning/azure-static-web-apps-getting-started',
      },
    ],
  },
  {
    title: 'Azure API Management (WebApp)',
    description:
      'Understand how to expose and manage APIs for your web applications using Azure API Management.',
    recommendedCourses: [
      {
        title: 'Implement API Management',
        url: 'https://learn.microsoft.com/en-us/training/modules/implement-api-management/',
      },
      {
        title: 'API Management in Azure',
        url: 'https://www.udemy.com/course/api-management-in-azure/',
      },
    ],
  },
  {
    title: 'Azure SQL Database (WebApp)',
    description:
      'Learn how to integrate Azure SQL Database with your web applications for efficient data management.',
    recommendedCourses: [
      {
        title: 'Develop apps with Azure SQL Database',
        url: 'https://learn.microsoft.com/en-us/training/modules/develop-apps-with-azure-sql-database/',
      },
      {
        title: 'Azure SQL for Developers',
        url: 'https://www.pluralsight.com/courses/azure-sql-developers',
      },
    ],
  },

  // Frontend MobileApp Services
  {
    title: 'Azure Static Web Apps (MobileApp)',
    description:
      'Learn how to use Azure Static Web Apps to build and deploy mobile-friendly web applications.',
    recommendedCourses: [
      {
        title: 'Build static web and mobile apps',
        url: 'https://learn.microsoft.com/en-us/training/modules/build-static-web-mobile-apps/',
      },
      {
        title: 'Mobile Development with Azure',
        url: 'https://www.udemy.com/course/mobile-development-with-azure/',
      },
    ],
  },
  {
    title: 'Azure API Management (MobileApp)',
    description:
      'Understand how to manage APIs for your mobile applications using Azure API Management.',
    recommendedCourses: [
      {
        title: 'Secure your APIs with Azure API Management',
        url: 'https://learn.microsoft.com/en-us/training/modules/secure-apis-with-api-management/',
      },
      {
        title: 'Mastering Azure API Management',
        url: 'https://www.linkedin.com/learning/mastering-azure-api-management',
      },
    ],
  },
  {
    title: 'Azure SQL Database (MobileApp)',
    description:
      'Learn how to connect your mobile applications to Azure SQL Database for robust data solutions.',
    recommendedCourses: [
      {
        title: 'Develop apps with Azure SQL Database',
        url: 'https://learn.microsoft.com/en-us/training/modules/develop-apps-with-azure-sql-database/',
      },
      {
        title: 'Azure SQL Database for Mobile Developers',
        url: 'https://www.pluralsight.com/courses/azure-sql-database-mobile-developers',
      },
    ],
  },

  // Monitoring Services
  {
    title: 'Azure Monitor',
    description:
      'Learn how to monitor your applications, infrastructure, and networks using Azure Monitor.',
    recommendedCourses: [
      {
        title: 'Monitor and back up Azure resources',
        url: 'https://learn.microsoft.com/en-us/training/paths/monitor-back-up-azure-resources/',
      },
      {
        title: 'Azure Monitor Deep Dive',
        url: 'https://www.udemy.com/course/azure-monitor-deep-dive/',
      },
    ],
  },
  {
    title: 'Azure Log Analytics',
    description:
      'Understand how to collect, analyze, and act on telemetry data from your cloud and on-premises environments using Azure Log Analytics.',
    recommendedCourses: [
      {
        title: 'Analyze data with Azure Log Analytics',
        url: 'https://learn.microsoft.com/en-us/training/modules/analyze-data-with-azure-log-analytics/',
      },
      {
        title: 'Mastering Azure Log Analytics',
        url: 'https://www.linkedin.com/learning/mastering-azure-log-analytics',
      },
    ],
  },
];



const LearningRoadmap = () => {
  const [roadmapState, setRoadmapState] = useState(DEFAULT_ROADMAP);

  useAppBarTitle('Learning Roadmap');

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5">Personalized Learning Roadmap for your startup</Typography>

        </Box>
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
              }} defaultExpanded
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
