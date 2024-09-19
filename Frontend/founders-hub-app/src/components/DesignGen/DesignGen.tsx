import React, { useEffect, useState, useCallback, useRef } from 'react';
import mermaid from 'mermaid';
import { Box, Button, Grid2 } from '@mui/material';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import StartupSummary from '../StartupSummary/StartupSummary';
import useAppBarTitle from '../useAppBarTitle';



const DEFAULT_DIAGRAM = `
graph TD
  subgraph azure[Azure]
    subgraph backend[Backend]
      subgraph api[API]
        service_function[Azure Functions]
        service_api_gateway[Azure API Management]
        service_db[Azure SQL Database]
        service_blob_storage[Azure Blob Storage]
        service_cosmos_db[Azure Cosmos DB]
      end
    end

    subgraph frontend[Frontend]
      subgraph web[Web App]
        user_web[User] --> service_web[Azure Static Web Apps]
        service_web --> service_web_api[Azure API Management]
        service_web_api --> service_web_db[Azure SQL Database]
      end
      subgraph mobile[Mobile App]
        user_mobile[User] --> service_mobile[Azure Static Web Apps]
        service_mobile --> service_mobile_api[Azure API Management]
        service_mobile_api --> service_mobile_db[Azure SQL Database]
      end
    end

    subgraph monitoring[Monitoring]
      service_monitor[Azure Monitor]
      service_log[Azure Log Analytics]
    end
  end

  service_function --> service_api_gateway
  service_api_gateway --> service_db
  service_api_gateway --> service_blob_storage
  service_api_gateway --> service_cosmos_db
  service_function --> service_monitor
  service_api_gateway --> service_monitor
  service_db --> service_monitor
  service_blob_storage --> service_monitor
  service_cosmos_db --> service_monitor
  service_monitor --> service_log

  service_web --> service_monitor
  service_mobile --> service_monitor
  service_web_api --> service_monitor
  service_mobile_api --> service_monitor
  service_web_api --> service_function
  service_mobile_api --> service_function
`;

const DesignGen = () => {
  const [diagramState, setDiagramState] = useState(DEFAULT_DIAGRAM);
  const mermaidRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    const renderDiagram = async () => {
      if (mermaidRef.current) {
        try {
          const { svg } = await mermaid.render(`mermaid`, diagramState);
          mermaidRef.current.innerHTML = svg;
        } catch (err) {
          console.error('Mermaid rendering error:', err);
          mermaidRef.current.innerHTML = `<pre>${diagramState}</pre>`;
        }
      }
    };

    const timer = setTimeout(() => {
      renderDiagram();
    }, 0);

    return () => clearTimeout(timer);
  }, [diagramState]);



  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === 'string') {
          setDiagramState(content);
        }
      };
      reader.readAsText(file);
    }
  }, []);

  const handleClearScreen = useCallback(() => {
    setDiagramState(DEFAULT_DIAGRAM);
  }, []);

  useAppBarTitle("Architecture Design Tool");

  return (
    <Grid2 container spacing={2} sx={{ height: '89vh', display: 'flex' }}>
      <Grid2 size={{ xs: 9 }} ><Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        {/* <Typography variant="h4">Architecture Design tool</Typography> */}
        <Box>
          <Button variant="contained" color="primary" sx={{ mr: 1 }} onClick={() => handleNavigate('/learning-roadmap')}>
            Generate Learning Roadmap
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleNavigate('/codegen')}>
            Generate Code for prototype
          </Button>
        </Box>
      </Box></Grid2>
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

          <div id="mermaid-diagram" ref={mermaidRef} />
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
          <Box sx={{ padding: 2, overflow: 'auto' }}>
            <Sidebar></Sidebar>
            {/* <Chatbot directLineSecret={DIRECT_LINE_SECRET} /> */}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
            <Button variant="contained" component="label">
              Upload File
              <input
                type="file"
                accept=".md"
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
      <StartupSummary
        name="Tech Innovators"
        industry="Healthcare"
        stage="Seed"
        description="A startup revolutionizing the healthcare industry with AI-driven diagnostics."
        founderNames={['John Doe', 'Jane Smith']}
        fundingStatus="Pre-seed"
        goals={['Secure funding', 'Launch MVP', 'Expand team']}
        technologies={['React', 'Node.js', 'Azure', 'AI']}
      />
    </Grid2>

  );
};

export default DesignGen;