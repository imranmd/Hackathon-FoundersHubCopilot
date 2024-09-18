import React, { useEffect, useState, useCallback, useRef } from 'react';
import mermaid from 'mermaid';
import { Box, Button, Grid2 } from '@mui/material';
import Chatbot from '../founders-hub-bot/Chatbot';

const DIRECT_LINE_SECRET = 'YOUR_DIRECT_LINE_SECRET_HERE';

const DEFAULT_DIAGRAM = `
architecture-beta
  group api(cloud)[API]
  service db(database)[Database] in api
  service disk1(disk)[Storage] in api
  service disk2(disk)[Storage] in api
  service server(server)[Server] in api
  db:L -- R:server
  disk1:T -- B:server
  disk2:T -- B:db
`;

const DesignGen = ({ initialDiagram = `flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]`}) => {
  const [diagramState, setDiagramState] = useState(initialDiagram);
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    const renderDiagram = async () => {
      if (mermaidRef.current){
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



  const handleFileUpload = useCallback((event:React.ChangeEvent<HTMLInputElement>) => {
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
          <div id="mermaid-diagram" ref={mermaidRef}/>
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
    </Grid2>
  );
};

export default DesignGen;