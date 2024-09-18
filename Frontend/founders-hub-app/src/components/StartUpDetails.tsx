import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';

export default function StartUpDetails(props:any) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [stage, setStage] = React.useState('');
  const [fundStatus, setFundStatus] = React.useState('');
  const [employeeNum, setEmployeeNum] = React.useState(0);
  const [startupName, setStartupName] = React.useState('');
  const [founderName, setFounderName] = React.useState('');
  const [contactEmail, setContactEmail] = React.useState('');


  const handleStageChange = (event: SelectChangeEvent) => {
    setStage(event.target.value as string);
  };

  const handlefundStatusChange = (event: SelectChangeEvent) => {
    setFundStatus(event.target.value as string);
  };

  const handleEmployeeNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeNum(Number(event.target.value) || 0);
  };

  const handleStartupNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartupName(event.target.value);
  };

  const handleFounderNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFounderName(event.target.value);
  };

  const handleContactEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactEmail(event.target.value);
  };

  return (
    <Box>
    <h3 className="main2-heading">Startup Details</h3>
    <Stepper activeStep={activeStep} orientation="vertical">
        <Step key={"startupName"}>
            <StepLabel>
            {"Name of your startup"}
            </StepLabel>
            <StepContent>
            <TextField label="Startup Name" id="startupName" sx={{width: "35%", mt: 2, mb: 1}} value={startupName} onChange={handleStartupNameChange}/>
            <Box sx={{ mb: 2 }}>
                <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
                >
                Continue
                </Button>
            </Box>
            </StepContent>
        </Step>
        <Step key={"founderName"}>
        <StepLabel>
            {"Name of the founder"}
        </StepLabel>
        <StepContent>
        <TextField label="Founder Name" id="founderName" sx={{width: "35%", mt: 2, mb: 1}} value={founderName} onChange={handleFounderNameChange}/>
            <Box sx={{ mb: 2 }}>
            <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
            >
                Continue
            </Button>
            <Button
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
            >
                Back
            </Button>
            </Box>
        </StepContent>
        </Step>
        <Step key={"contactEmail"}>
        <StepLabel>
            {"Email contact of the founder"}
        </StepLabel>
        <StepContent>
        <TextField label="Contact Email" id="contactEmail" sx={{width: "35%", mt: 2, mb: 1}} value={contactEmail} onChange={handleContactEmailChange}/>
            <Box sx={{ mb: 2 }}>
            <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
            >
                Continue
            </Button>
            <Button
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
            >
                Back
            </Button>
            </Box>
        </StepContent>
        </Step>
        <Step key={"startupStage"}>
        <StepLabel>
            {"Stage of the startup"}
        </StepLabel>
        <StepContent>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="startupStage">Startup Stage</InputLabel>
            <Select
            labelId="startupStage"
            id="startupStage"
            value={stage}
            label="Startup Stage"
            onChange={handleStageChange}
            >
            <MenuItem value={"Idea"}>Idea</MenuItem>
            <MenuItem value={"MVP"}>MVP</MenuItem>
            <MenuItem value={"Growth"}>Growth</MenuItem>
            <MenuItem value={"Scaling"}>Scaling</MenuItem>
            </Select>
        </FormControl>
            <Box sx={{ mb: 2 }}>
            <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
            >
                Continue
            </Button>
            <Button
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
            >
                Back
            </Button>
            </Box>
        </StepContent>
        </Step>
        <Step key={"fundingStatus"}>
        <StepLabel>
            {"Status of the funding"}
        </StepLabel>
        <StepContent>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="fundingStatus">Status of the funding</InputLabel>
            <Select
            labelId="fundingStatus"
            id="fundingStatus"
            value={fundStatus}
            label="Status of the funding"
            onChange={handlefundStatusChange}
            >
            <MenuItem value={"Bootstrapped"}>Bootstrapped</MenuItem>
            <MenuItem value={"Seed"}>Seed</MenuItem>
            <MenuItem value={"Series A"}>Series A</MenuItem>
            <MenuItem value={"Series B"}>Series B</MenuItem>
            <MenuItem value={"Series C"}>Series C</MenuItem>
            </Select>
        </FormControl>
            <Box sx={{ mb: 2 }}>
            <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
            >
                Continue
            </Button>
            <Button
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
            >
                Back
            </Button>
            </Box>
        </StepContent>
        </Step>
        <Step key={"EmployeeNum"}>
        <StepLabel>
            {"Number of Employees"}
        </StepLabel>
        <StepContent>
        <TextField label="Number of Employees" id="EmployeeNum" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={employeeNum} onChange={handleEmployeeNumChange}/>
            <Box sx={{ mb: 2 }}>
            <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
            >
                Continue
            </Button>
            <Button
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
            >
                Back
            </Button>
            </Box>
        </StepContent>
        </Step>
    </Stepper>
    {activeStep === 6 && (
        <Paper square elevation={0} sx={{ p: 3, mt:2 }}>
        <Typography color='#4BB543' fontWeight={"bold"}>Startup details captured successfully!</Typography>
        <Box sx={{mt:1}}>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} >
            Reset
            </Button>
            <Button onClick={props.handleNext} sx={{ mt: 1, mr: 1 }} variant='outlined' endIcon={<SendIcon />}>
            Next
            </Button>
        </Box>
        </Paper>
    )}
    </Box>
  );
}