import React, { useState } from 'react';
import { Box, Button, Popover, TextField, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ExpandableSection from './ExpandableSection';
import { azureServicesWithCode } from './azureServices';
import SendIcon from '@mui/icons-material/Send';
import useAppBarTitle from '../useAppBarTitle';

import { useNavigate } from 'react-router-dom';
import { useLoading } from '../Loader/LoadingContext';
interface CodeSection {
    title: string;
    code: string;
}

interface CodeGenProps {
    sections: CodeSection[];
}

const CodeGen: React.FC<CodeGenProps> = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [currentService, setCurrentService] = useState<string>('');

    useAppBarTitle("Code Generation");

    const navigate = useNavigate();
    const { setLoading } = useLoading();

    const handleClick = (event: React.MouseEvent<HTMLElement>, sectionTitle: string) => {
        setAnchorEl(event.currentTarget);
        setCurrentService(sectionTitle);
    };

    const handleSubmit = () => {
        setLoading(true, 'Regenerating the prototype code');
        setTimeout(() => {
            handleClose();
          setLoading(false);
        }, 3000); // 3 seconds timeout
    };

    

    const handleClose = () => {
        setAnchorEl(null);
        setCurrentService('');
    };

    const handleNavigate = (path: string, loadingMessage?:string) => {
        setLoading(true, loadingMessage);
        setTimeout(() => {
          navigate(path);
          setLoading(false);
        }, 3000); // 3 seconds timeout
      };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <Box sx={{ padding: 2, width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h3">Prototype Code Gen tool</Typography>
                <Box>

                    <Button variant="contained" color="primary" sx={{ mr: 1 }} onClick={() => handleNavigate('/arch-design-tool', 'Regenerating the design' )}>
                        Re-Generate Design
                    </Button>
                    <Button variant="contained" color="secondary">
                        Generate Code for prototype
                    </Button>
                </Box>
            </Box>
            <ExpandableSection></ExpandableSection>
            <Box sx={{ padding: 2, width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                {Object.entries(azureServicesWithCode).map(([sectionTitle, services], index) => (
                    <Box key={index} sx={{ marginBottom: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                            <Typography variant="h5" sx={{ marginRight: 2 }}>
                                {sectionTitle}
                            </Typography>
                            <Button variant="outlined" size="small" onClick={(event) => handleClick(event, sectionTitle)}>
                                Modify
                            </Button>
                        </Box>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h6">Modify {currentService}</Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={5}
                                    variant="outlined"
                                    placeholder={`Provide instructions prompt to modify ${currentService}`}
                                />
                                <Button sx={{ marginTop: '5px' }} variant="contained" color="primary" endIcon={<SendIcon />} onClick={(event) => handleSubmit()}>
                                    Submit
                                </Button>
                            </Box>
                        </Popover>
                        {Array.isArray(services) ? (
                            services.map((service, subIndex) => (
                                <Box key={subIndex} sx={{ marginBottom: 4 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                        <Typography variant="h6" sx={{ marginRight: 2 }}>
                                            {service.title}
                                        </Typography>
                                        <Button variant="outlined" size="small" onClick={(event) => handleClick(event, service.title)}>
                                            Modify
                                        </Button>
                                    </Box>
                                    <SyntaxHighlighter language="typescript" style={materialDark}>
                                        {service.desc}
                                    </SyntaxHighlighter>
                                </Box>
                            ))
                        ) : (
                            Object.entries(services).map(([subSectionTitle, subServices], subIndex) => (
                                <Box key={subIndex} sx={{ marginBottom: 4, ml: 2 }}>
                                    <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                        {subSectionTitle}
                                    </Typography>
                                    {subServices.map((service, subSubIndex) => (
                                        <Box key={subSubIndex} sx={{ marginBottom: 4 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                                <Typography variant="h6" sx={{ marginRight: 2 }}>
                                                    {service.title}
                                                </Typography>
                                                <Button variant="outlined" size="small" onClick={(event) => handleClick(event, service.title)}>
                                                    Modify
                                                </Button>
                                            </Box>
                                            <SyntaxHighlighter language="typescript" style={materialDark}>
                                                {service.desc}
                                            </SyntaxHighlighter>
                                        </Box>
                                    ))}
                                </Box>
                            ))
                        )}
                    </Box>
                ))}
            </Box>
            {/* {azureServicesWithCode.map((section, index) => (
                <Box key={index} sx={{ marginBottom: 4 }}>
                    <Typography variant="h6" sx={{ marginBottom: 1 }}>
                        {section.title}
                    </Typography>
                    <SyntaxHighlighter language="typescript" style={materialDark}>
                        {section.code}
                    </SyntaxHighlighter>
                </Box>
            ))} */}
        </Box>
    );
};

export default CodeGen;
