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
import { Link } from "react-router-dom";

export default function NonFunctionalRequirements() {
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
  const [responseTime, setResponseTime] = React.useState(0);
  const [throughput, setThroughput] = React.useState(0);
  const [uptime, setUptime] = React.useState(0);
  const [budget, setBudget] = React.useState(0);
  const [authentication, setAuthentication] = React.useState('');
  const [authorization, setAuthorization] = React.useState('');
  const [backup, setBackup] = React.useState('');
  const [recovery, setRecovery] = React.useState('');
  const [monitoring, setMonitoring] = React.useState('');
  const [costEstimation, setCostEstimation] = React.useState('');
  const [licensing, setLicensing] = React.useState('');

  const handleResponseTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResponseTime(Number(event.target.value) || 0);
  };

  const handleThroughputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThroughput(Number(event.target.value) || 0);
  };

  const handleUptimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUptime(Number(event.target.value) || 0);
  };

  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(event.target.value) || 0);
  };

  const handleAuthenticationChange = (event: SelectChangeEvent) => {
    setAuthentication(event.target.value as string);
  };

  const handleAuthorizationChange = (event: SelectChangeEvent) => {
    setAuthorization(event.target.value as string);
  };

  const handleBackupChange = (event: SelectChangeEvent) => {
    setBackup(event.target.value as string);
  };

  const handleRecoveryChange = (event: SelectChangeEvent) => {
    setRecovery(event.target.value as string);
  };

  const handleMonitoringChange = (event: SelectChangeEvent) => {
    setMonitoring(event.target.value as string);
  };

  const handleCostEstimationChange = (event: SelectChangeEvent) => {
    setCostEstimation(event.target.value as string);
  };

  const handleLicensingChange = (event: SelectChangeEvent) => {
    setLicensing(event.target.value as string);
  };

  return (
    <Box>
    <h3 className="main2-heading">Non-Functional requirements of the application</h3>
    <Stepper activeStep={activeStep} orientation="vertical">
        <Step key={"responseTime"}>
            <StepLabel>
                {"Expected Response Time (ms)"}
            </StepLabel>
            <StepContent>
            <TextField label="Response Time (ms)" id="responseTime" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={responseTime} onChange={handleResponseTimeChange}/>
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
        <Step key={"throughput"}>
            <StepLabel>
                {"Expected Throughput (requests per second)"}
            </StepLabel>
            <StepContent>
            <TextField label="Throughput (requests per second)" id="throughput" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={throughput} onChange={handleThroughputChange}/>
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
        <Step key={"authentication"}>
        <StepLabel>
            {"Authentication Mechanism"}
        </StepLabel>
        <StepContent>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="authentication">Authentication Mechanism</InputLabel>
            <Select
            labelId="authentication"
            id="authentication"
            value={authentication}
            label="Authentication Mechanism"
            onChange={handleAuthenticationChange}
            >
            <MenuItem value={"OAuth"}>OAuth</MenuItem>
            <MenuItem value={"JWT"}>JWT</MenuItem>
            <MenuItem value={"Basic Auth"}>Basic Auth</MenuItem>
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
        <Step key={"authorization"}>
        <StepLabel>
            {"Authorization Mechanism"}
        </StepLabel>
        <StepContent>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="authorization">Authorization Mechanism</InputLabel>
            <Select
            labelId="authorization"
            id="authorization"
            value={authorization}
            label="Authorization Mechanism"
            onChange={handleAuthorizationChange}
            >
            <MenuItem value={"Role-Based Access Control"}>Role-Based Access Control</MenuItem>
            <MenuItem value={"Attribute-Based Access Control"}>Attribute-Based Access Control</MenuItem>
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
        <Step key={"uptime"}>
            <StepLabel>
                {"Expected Uptime Requirement (%)"}
            </StepLabel>
            <StepContent>
            <TextField label="Uptime Requirement (%)" id="uptime" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={uptime} onChange={handleUptimeChange}/>
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
        <Step key={"backup"}>
        <StepLabel>
            {"Backup Frequency"}
        </StepLabel>
        <StepContent>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="backup">Backup Frequency</InputLabel>
            <Select
            labelId="backup"
            id="backup"
            value={backup}
            label="Backup Frequency"
            onChange={handleBackupChange}
            >
            <MenuItem value={"Daily"}>Daily</MenuItem>
            <MenuItem value={"Weekly"}>Weekly</MenuItem>
            <MenuItem value={"Monthly"}>Monthly</MenuItem>
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
        <Step key={"recovery"}>
        <StepLabel>
            {"Recovery Mechanism"}
        </StepLabel>
        <StepContent>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="recovery">Recovery Mechanism</InputLabel>
            <Select
            labelId="recovery"
            id="recovery"
            value={recovery}
            label="Recovery Mechanism"
            onChange={handleRecoveryChange}
            >
            <MenuItem value={"Automated"}>Automated</MenuItem>
            <MenuItem value={"Manual"}>Manual</MenuItem>
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
        <Step key={"monitoring"}>
        <StepLabel>
            {"Monitoring"}
        </StepLabel>
        <StepContent>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="monitoring">Monitoring</InputLabel>
            <Select
            labelId="monitoring"
            id="monitoring"
            value={monitoring}
            label="Monitoring"
            onChange={handleMonitoringChange}
            >
            <MenuItem value={"Enabled"}>Enabled</MenuItem>
            <MenuItem value={"Disabled"}>Disabled</MenuItem>
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
        <Step key={"budget"}>
            <StepLabel>
                {"Budget ($/month)"}
            </StepLabel>
            <StepContent>
            <TextField label="Budget ($/month)" id="budget" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={budget} onChange={handleBudgetChange}/>
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
        <Step key={"costEstimation"}>
        <StepLabel>
            {"Cost Estimation Accuracy"}
        </StepLabel>
        <StepContent>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="costEstimation">Cost Estimation Accuracy</InputLabel>
            <Select
            labelId="costEstimation"
            id="costEstimation"
            value={costEstimation}
            label="Cost Estimation Accuracy"
            onChange={handleCostEstimationChange}
            >
            <MenuItem value={"Accurate"}>Accurate</MenuItem>
            <MenuItem value={"Approximate"}>Approximate</MenuItem>
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
        <Step key={"licensing"}>
        <StepLabel>
            {"Licensing"}
        </StepLabel>
        <StepContent>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="licensing">Licensing</InputLabel>
            <Select
            labelId="licensing"
            id="licensing"
            value={licensing}
            label="Licensing"
            onChange={handleLicensingChange}
            >
            <MenuItem value={"Open Source"}>Open Source</MenuItem>
            <MenuItem value={"Commercial"}>Commercial</MenuItem>
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
    </Stepper>
    {activeStep === 11 && (
        <Paper square elevation={0} sx={{ p: 3, mt:2 }}>
        <Typography color='#4BB543' fontWeight={"bold"}>Non-Functional requirements captured successfully!</Typography>
        <Box sx={{mt:1}}>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} >
            Reset
            </Button>
            <Button sx={{ mt: 1, mr: 1 }} variant='outlined' endIcon={<SendIcon />} to={"/explore"} component={Link}>
            Next
            </Button>
        </Box>
        </Paper>
    )}
    </Box>
  );
}