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
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from "react-router-dom";
import { useStartUp } from './Context/StartupContext';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const applicationFeaturesList = [
    "User Authentication", "Payment Processing", "Product Catalog", "Social Media Integration", "Analytics"
];

const userInterfacesList = [
    "Home Page", "Product Page", "Checkout Page", "Profile Page", "Dashboard"
];

const dataManagementList = [
    "User Data", "Transaction Data", "Product Data", "Analytics Data", "Logs"
];

function getStyles(name: string, list: readonly string[]) {
    return {
        fontWeight: list.includes(name) ? "medium": "regular",
    };
}

export default function StartUpDetailsForm(props:any) {
  const [activeStep, setActiveStep] = React.useState(0);
  const { data, error } = useStartUp();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setContactEmail('');
    setEmployeeNum(0);
    setFounderName('');
    setFundStatus('');
    setStartupName('');
    setStage('');
    setBusinessDomain('');
    setCloudProvider('');
    setDeploymentModel('');
    setUsersNum(0);
    setTransNum(0);
    setApplicationFeatures([]);
    setUserInterface([]);
    setDataManagement([]);
    setResponseTime(0);
    setThroughput(0);
    setUptime(0);
    setBudget(0);
    setAuthentication('');
    setAuthorization('');
    setBackup('');
    setRecovery('');
    setMonitoring('');
    setCostEstimation('');
    setLicensing('');
  };

  const [startupStage, setStage] = React.useState('');
  const [fundingStatus, setFundStatus] = React.useState('');
  const [numberOfEmployees, setEmployeeNum] = React.useState(0);
  const [startupName, setStartupName] = React.useState('');
  const [founderName, setFounderName] = React.useState('');
  const [contactEmail, setContactEmail] = React.useState('');
  const [businessDomain, setBusinessDomain] = React.useState('');
  const [cloudProvider, setCloudProvider] = React.useState('');
  const [deploymentModel, setDeploymentModel] = React.useState('');
  const [expectedUsersNum, setUsersNum] = React.useState(0);
  const [expectedTransNum, setTransNum] = React.useState(0);
  const [applicationFeatures, setApplicationFeatures] = React.useState<string[]>([]);
  const [userInterface, setUserInterface] = React.useState<string[]>([]);
  const [dataManagement, setDataManagement] = React.useState<string[]>([]);
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

  const handleBusinessDomainChange = (event: SelectChangeEvent) => {
    setBusinessDomain(event.target.value as string);
  };

  const handlecloudProviderChange = (event: SelectChangeEvent) => {
    setCloudProvider(event.target.value as string);
  };

  const handleDeploymentModelChange = (event: SelectChangeEvent) => {
    setDeploymentModel(event.target.value as string);
  };

  const handleUsersNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsersNum(Number(event.target.value) || 0);
  };

  const handleTransNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTransNum(Number(event.target.value) || 0);
  };

  const handleApplicationFeaturesChange = (event: SelectChangeEvent<typeof applicationFeatures>) => {
    const {
      target: { value },
    } = event;
    setApplicationFeatures(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleUserInterfaceChange = (event: SelectChangeEvent<typeof userInterface>) => {
    const {
      target: { value },
    } = event;
    setUserInterface(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleDataManagementChange = (event: SelectChangeEvent<typeof dataManagement>) => {
    const {
      target: { value },
    } = event;
    setDataManagement(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

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
    <h3 className="main2-heading">Please fill out the form below to help us gather essential information about your startup!</h3>
    <Stepper activeStep={activeStep} orientation="vertical">
        <Step key={"basicInfo"}>
            <StepLabel>
            {"Startup details - Basic Information"}
            </StepLabel>
            <StepContent>
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <TextField label="Startup Name" id="startupName"  sx={{width: "35%", mt: 2, mb: 1}}  value={data?.startup_details?.startup_name || ''} onChange={handleStartupNameChange} 
            />
            <TextField label="Founder Name" id="founderName" sx={{width: "35%", mt: 2, mb: 1}} value={data?.startup_details?.founder_name || ''} onChange={handleFounderNameChange}
            />
            <TextField label="Contact Email" id="contactEmail" sx={{width: "35%", mt: 2, mb: 1}} value={data?.startup_details?.contact_email} onChange={handleContactEmailChange} type='email'
            onKeyDown={(e) => (
                e.key === "Enter" ? handleNext() : null
            )}
            />
            </Box>
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
        <Step key={"businessInfo"}>
        <StepLabel>
            {"Startup details - Business Information"}
        </StepLabel>
        <StepContent>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
            <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
                <InputLabel id="startupStage">Startup Stage</InputLabel>
                <Select
                labelId="startupStage"
                id="startupStage"
                value={data?.startup_details?.startup_stage}
                label="Startup Stage"
                onChange={handleStageChange}
                >
                <MenuItem value={"Idea"}>Idea</MenuItem>
                <MenuItem value={"MVP"}>MVP</MenuItem>
                <MenuItem value={"Growth"}>Growth</MenuItem>
                <MenuItem value={"Scaling"}>Scaling</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
                <InputLabel id="fundingStatus">Status of the funding</InputLabel>
                <Select
                labelId="fundingStatus"
                id="fundingStatus"
                value={data?.startup_details?.funding_status}
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
            <TextField label="Number of Employees" id="EmployeeNum" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={data?.startup_details?.number_of_employees} onChange={handleEmployeeNumChange}
                onKeyDown={(e) => (
                    e.key === "Enter" ? handleNext() : null
                )}
                />
        </Box>
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
        <Step key={"businessContext"}>
        <StepLabel>
            {"Functional requirements - Business Context"}
        </StepLabel>
        <StepContent>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
                <InputLabel id="businessDomain">Business Domain</InputLabel>
                <Select
                labelId="businessDomain"
                id="businessDomain"
                value={data?.functional_requirements[0]?.business_domain}
                label="Business Domain"
                onChange={handleBusinessDomainChange}
                >
                <MenuItem value={"E-commerce"}>E-commerce</MenuItem>
                <MenuItem value={"FinTech"}>FinTech</MenuItem>
                <MenuItem value={"HealthTech"}>HealthTech</MenuItem>
                <MenuItem value={"EdTech"}>EdTech</MenuItem>
                <MenuItem value={"Social Media"}>Social Media</MenuItem>
                </Select>
            </FormControl>
            <TextField label="Expected Number of Users" id="expectedNumberOfUsers" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={data?.functional_requirements[0]?.expected_number_of_users} onChange={handleUsersNumChange}
            />
            <TextField label="Expected Number of Transactions" id="expectedNumberOfTransactions" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={data?.functional_requirements[0]?.expected_number_of_transactions} onChange={handleTransNumChange}
            onKeyDown={(e) => (
                e.key === "Enter" ? handleNext() : null
            )}
            />
        </Box>
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
        <Step key={"appSpecifications"}>
        <StepLabel>
            {"Functional requirements - Application Specifications"}
        </StepLabel>
        <StepContent>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <FormControl sx={{width: "50%", mt: 2, mb: 1}}>
                    <InputLabel id="applicationFeatures">Application Features</InputLabel>
                    <Select
                    labelId="applicationFeatures"
                    id="applicationFeatures"
                    multiple
                    value={data?.functional_requirements[0]?.application_features}
                    onChange={handleApplicationFeaturesChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value: string) => (
                            <Chip key={value} label={value} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    >
                    {applicationFeaturesList.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, applicationFeatures)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <FormControl sx={{width: "50%", mt: 2, mb: 1}}>
                    <InputLabel id="userInterface">User Interface Pages</InputLabel>
                    <Select
                    labelId="userInterface"
                    id="userInterface"
                    multiple
                    value={data?.functional_requirements[0]?.user_interface}
                    onChange={handleUserInterfaceChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value: string) => (
                            <Chip key={value} label={value} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    >
                    {userInterfacesList.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, userInterface)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <FormControl sx={{width: "50%", mt: 2, mb: 1}}>
                    <InputLabel id="dataManagement">Data Types</InputLabel>
                    <Select
                    labelId="dataManagement"
                    id="dataManagement"
                    multiple
                    value={data?.functional_requirements[0]?.data_management}
                    onChange={handleDataManagementChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value: string) => (
                            <Chip key={value} label={value} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    >
                    {dataManagementList.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, dataManagement)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
        </Box>
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
        <Step key={"deploymentDetails"}>
        <StepLabel>
            {"Functional requirements - Deployment Details"}
        </StepLabel>
        <StepContent>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="cloudProvider">Cloud Provider</InputLabel>
            <Select
            labelId="cloudProvider"
            id="cloudProvider"
            value={data?.functional_requirements[0]?.cloud_provider}
            label="Cloud Provider"
            onChange={handlecloudProviderChange}
            >
            <MenuItem value={"AWS"}>AWS</MenuItem>
            <MenuItem value={"Azure"}>Azure</MenuItem>
            <MenuItem value={"GCP"}>GCP</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="deploymentModel">Deployment Model</InputLabel>
            <Select
            labelId="deploymentModel"
            id="deploymentModel"
            value={data?.functional_requirements[0]?.deployment_model}
            label="Deployment Model"
            onChange={handleDeploymentModelChange}
            >
            <MenuItem value={"Single Region"}>Single Region</MenuItem>
            <MenuItem value={"Multi-Region"}>Multi-Region</MenuItem>
            </Select>
        </FormControl>
        </Box>
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
        <Step key={"costLicensing"}>
        <StepLabel>
            {"Non-Functional requirements - Cost and Licensing"}
        </StepLabel>
        <StepContent>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <TextField label="Budget ($/month)" id="budget" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={data?.non_functional_requirements[0]?.budget} onChange={handleBudgetChange}
            />
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="costEstimation">Cost Estimation Accuracy</InputLabel>
            <Select
            labelId="costEstimation"
            id="costEstimation"
            value={data?.non_functional_requirements[0]?.cost_estimation}
            label="Cost Estimation Accuracy"
            onChange={handleCostEstimationChange}
            >
            <MenuItem value={"Accurate"}>Accurate</MenuItem>
            <MenuItem value={"Approximate"}>Approximate</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="licensing">Licensing</InputLabel>
            <Select
            labelId="licensing"
            id="licensing"
            value={data?.non_functional_requirements[0]?.licensing}
            label="Licensing"
            onChange={handleLicensingChange}
            >
            <MenuItem value={"Open Source"}>Open Source</MenuItem>
            <MenuItem value={"Commercial"}>Commercial</MenuItem>
            </Select>
        </FormControl>
        </Box>
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
        <Step key={"performanceReliability"}>
        <StepLabel>
            {"Non-Functional requirements - Performance and Reliability"}
        </StepLabel>
        <StepContent>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <TextField label="Response Time (ms)" id="responseTime" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={data?.non_functional_requirements[0]?.response_time} onChange={handleResponseTimeChange}
            />
        <TextField label="Throughput (requests per second)" id="throughput" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={data?.non_functional_requirements[0]?.throughput} onChange={handleThroughputChange}
            />
        <TextField label="Uptime Requirement (%)" id="uptime" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={data?.non_functional_requirements[0]?.uptime} onChange={handleUptimeChange}
            />
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="monitoring">Monitoring</InputLabel>
            <Select
            labelId="monitoring"
            id="monitoring"
            value={data?.non_functional_requirements[0]?.monitoring}
            label="Monitoring"
            onChange={handleMonitoringChange}
            >
            <MenuItem value={"Enabled"}>Enabled</MenuItem>
            <MenuItem value={"Disabled"}>Disabled</MenuItem>
            </Select>
        </FormControl>
        </Box>
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
        <Step key={"securityCompliance"}>
        <StepLabel>
            {"Non-Functional requirements - Security and Compliance"}
        </StepLabel>
        <StepContent>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="authentication">Authentication Mechanism</InputLabel>
            <Select
            labelId="authentication"
            id="authentication"
            value={data?.non_functional_requirements[0]?.authentication}
            label="Authentication Mechanism"
            onChange={handleAuthenticationChange}
            >
            <MenuItem value={"OAuth"}>OAuth</MenuItem>
            <MenuItem value={"JWT"}>JWT</MenuItem>
            <MenuItem value={"Basic Auth"}>Basic Auth</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="authorization">Authorization Mechanism</InputLabel>
            <Select
            labelId="authorization"
            id="authorization"
            value={data?.non_functional_requirements[0]?.authorization}
            label="Authorization Mechanism"
            onChange={handleAuthorizationChange}
            >
            <MenuItem value={"Role-Based Access Control"}>Role-Based Access Control</MenuItem>
            <MenuItem value={"Attribute-Based Access Control"}>Attribute-Based Access Control</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="backup">Backup Frequency</InputLabel>
            <Select
            labelId="backup"
            id="backup"
            value={data?.non_functional_requirements[0]?.backup}
            label="Backup Frequency"
            onChange={handleBackupChange}
            >
            <MenuItem value={"Daily"}>Daily</MenuItem>
            <MenuItem value={"Weekly"}>Weekly</MenuItem>
            <MenuItem value={"Monthly"}>Monthly</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="recovery">Recovery Mechanism</InputLabel>
            <Select
            labelId="recovery"
            id="recovery"
            value={data?.non_functional_requirements[0]?.recovery}
            label="Recovery Mechanism"
            onChange={handleRecoveryChange}
            >
            <MenuItem value={"Automated"}>Automated</MenuItem>
            <MenuItem value={"Manual"}>Manual</MenuItem>
            </Select>
        </FormControl>
        </Box>
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
    {activeStep === 8 && (
        <Paper square elevation={0} sx={{ p: 3, mt:2 }}>
        <Typography color='#2e7d32' fontWeight={"bold"}>Startup details captured successfully!</Typography>
        <Box sx={{mt:1}}>
            <Button
                variant="outlined"
                color="warning"
                startIcon={<RestartAltIcon />}
                onClick={handleReset}
                sx={{ mt: 1, mr: 1 }}
            >
                Reset
            </Button>
            <Button
                variant="contained"
                color="success"
                startIcon={<CheckCircleIcon />}
                sx={{ mt: 1, mr: 1 }}
                to={"/explore"} component={Link}
            >
                Finish
            </Button>
        </Box>
        </Paper>
    )}
    </Box>
  );
}