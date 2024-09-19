import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ExpandableSection from './ExpandableSection';

interface CodeSection {
    title: string;
    code: string;
}

interface CodeGenProps {
    sections: CodeSection[];
}

const CodeGen: React.FC<CodeGenProps> = () => {

    const sections = [
        {
            title: 'Section 1: Component Definition',
            code: `
      import React from 'react';
      
      const MyComponent: React.FC = () => {
        return <div>Hello, World!</div>;
      };
      
      export default MyComponent;
          `,
        },
        {
            title: 'Section 2: Usage Example',
            code: `
      import React from 'react';
      import MyComponent from './MyComponent';
      
      const App: React.FC = () => {
        return (
          <div>
            <MyComponent />
          </div>
        );
      };
      
      export default App;
          `,
        },
    ];


    return (
        <Box sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h3">Prototype Code Gen tool</Typography>
            <Box>
            
              <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                Generate Learning Roadmap
              </Button>
              <Button variant="contained" color="secondary">
                Generate Code for prototype
              </Button>
            </Box>
          </Box>
            <ExpandableSection></ExpandableSection>
            {sections.map((section, index) => (
                <Box key={index} sx={{ marginBottom: 4 }}>
                    <Typography variant="h6" sx={{ marginBottom: 1 }}>
                        {section.title}
                    </Typography>
                    <SyntaxHighlighter language="typescript" style={materialDark}>
                        {section.code}
                    </SyntaxHighlighter>
                </Box>
            ))}
        </Box>
    );
};

export default CodeGen;
