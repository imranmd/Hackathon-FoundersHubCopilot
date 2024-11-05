import React, { useEffect, useState, useCallback, useRef } from 'react';
import mermaid from 'mermaid';
import { Box, Button, Grid2 } from '@mui/material';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import StartupSummary from '../StartupSummary/StartupSummary';
import useAppBarTitle from '../useAppBarTitle';
import { useLoading } from '../Loader/LoadingContext';
import { useStartUp } from '../Context/StartupContext';
import axios from 'axios';

const LOADING_DIAGRAM = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path fill="none" d="M0 0h200v200H0z"></path><path fill="none" stroke-linecap="round" stroke="#FF156D" stroke-width="15" transform-origin="center" d="M70 95.5V112m0-84v16.5m0 0a25.5 25.5 0 1 0 0 51 25.5 25.5 0 0 0 0-51Zm36.4 4.5L92 57.3M33.6 91 48 82.7m0-25.5L33.6 49m58.5 33.8 14.3 8.2"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="0;-120" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></path><path fill="none" stroke-linecap="round" stroke="#FF156D" stroke-width="15" transform-origin="center" d="M130 155.5V172m0-84v16.5m0 0a25.5 25.5 0 1 0 0 51 25.5 25.5 0 0 0 0-51Zm36.4 4.5-14.3 8.3M93.6 151l14.3-8.3m0-25.4L93.6 109m58.5 33.8 14.3 8.2"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="0;120" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></path></svg>`;

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
  const [diagramState, setDiagramState] = useState('not_started');
  const [mermaidDiagram, setMermaidDiagram] = useState(LOADING_DIAGRAM);
  const mermaidRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { data, error } = useStartUp();

  mermaid.initialize({ startOnLoad: true });
  
  const renderDiagram = useCallback(async () => {
    if(mermaidRef.current){
      if(diagramState === 'error') {
        mermaidRef.current.innerHTML = `<pre>Error loading diagram</pre>`;
      } else if(diagramState === 'ready') {
        try {
          const { svg } = await mermaid.render(`mermaid`, mermaidDiagram);
          mermaidRef.current.innerHTML = svg;
        } catch (err) {
          mermaidRef.current.innerHTML = `<pre>${mermaidDiagram}</pre>`;
        }
      } else {
        mermaidRef.current.innerHTML = mermaidDiagram;
      }
    }
  }, [mermaidDiagram, diagramState]);

  const fetchMermaid = useCallback(async (body: any, prompt: string) => {
    try {
      setMermaidDiagram(LOADING_DIAGRAM);
      setDiagramState('loading');
      const response = await axios.post('https://foundershub-backend-webapp-cya8bgevbtfeekey.southindia-01.azurewebsites.net/ai-api/getArchitecture?prompt='+prompt, body);
      setMermaidDiagram(response.data.response);
      setDiagramState('ready');
    } catch (error) {
      setMermaidDiagram(DEFAULT_DIAGRAM);
      setDiagramState('error');
    }
  }, []);

  useEffect(() => {
    if(data!=null){
      if(diagramState === 'not_started') {
        fetchMermaid(data, "");
      }
      else renderDiagram();
    } else renderDiagram();
  }, [diagramState, data, renderDiagram, fetchMermaid]);


  const handleNavigate = (path: string, loadingMessage?:string) => {
    setLoading(true, loadingMessage);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 3000); // 3 seconds timeout
  };

  const updateDiagram = (formData: any) => {
    var requirements = data.non_functional_requirements[0];
    requirements = {
      ...requirements,
      ...(formData.responseTime !== "" ? { response_time: formData.responseTime } : {}),
      ...(formData.throughput !== "" ? { throughput: formData.throughput } : {}),
      ...(formData.authentication !== "" ? { authentication: formData.authentication } : {}),
      ...(formData.authorization !== "" ? { authorization: formData.authorization } : {}),
      ...(formData.uptime !== "" ? { uptime: formData.uptime } : {}),
      ...(formData.recovery !== "" ? { recovery: formData.responseTime } : {}),
      ...(formData.monitoring !== "" ? { monitoring: formData.monitoring } : {}),
      ...(formData.budget !== "" ? { budget: formData.budget } : {}),
      ...(formData.costEstimation !== "" ? { cost_estimation: formData.costEstimation } : {}),
      ...(formData.licensing !== "" ? { licensing: formData.licensing } : {}),
    };
    fetchMermaid({...data, non_functional_requirements: [requirements]}, formData.requirements);
  }

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === 'string') {
          setMermaidDiagram(content);
          renderDiagram();
        }
      };
      reader.readAsText(file);
    }
  }, [renderDiagram]);

  const handleClearScreen = () => {
    setDiagramState('not_started');
  };

  useAppBarTitle("Architecture Design Tool");

  return (
    <Grid2 container spacing={2} sx={{ height: '89vh', display: 'flex' }}>
      <Grid2 size={{ xs: 9 }} ><Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        {/* <Typography variant="h4">Architecture Design tool</Typography> */}
        <Box>
          <Button variant="contained" color="primary" sx={{ mr: 1 }} onClick={() => handleNavigate('/learning-roadmap' , 'Generating learning road map')}>
            Generate Learning Roadmap
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleNavigate('/codegen', 'Generating code for prototype')}>
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
      <Sidebar updateDiagram={updateDiagram} handleClearScreen={handleClearScreen} handleFileUpload={handleFileUpload}></Sidebar>
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