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
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';

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

export default function FunctionalRequirements() {
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

  const [businessDomain, setBusinessDomain] = React.useState('');
  const [cloudProvider, setCloudProvider] = React.useState('');
  const [deploymentModel, setDeploymentModel] = React.useState('');
  const [expectedEmployeeNum, setEmployeeNum] = React.useState(0);
  const [expectedTransNum, setTransNum] = React.useState(0);
  const [applicationFeatures, setApplicationFeatures] = React.useState<string[]>([]);
  const [userInterface, setUserInterface] = React.useState<string[]>([]);
  const [dataManagement, setDataManagement] = React.useState<string[]>([]);


  const handleBusinessDomainChange = (event: SelectChangeEvent) => {
    setBusinessDomain(event.target.value as string);
  };

  const handlecloudProviderChange = (event: SelectChangeEvent) => {
    setCloudProvider(event.target.value as string);
  };

  const handleDeploymentModelChange = (event: SelectChangeEvent) => {
    setDeploymentModel(event.target.value as string);
  };

  const handleEmployeeNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeNum(Number(event.target.value) || 0);
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

  return (
    <Box>
    <h3 className="main2-heading">Functional requirements of the application</h3>
    <Stepper activeStep={activeStep} orientation="vertical">
        <Step key={"businessDomain"}>
            <StepLabel>
                {"Business domain of the application"}
            </StepLabel>
            <StepContent>
            <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
                <InputLabel id="businessDomain">Business Domain</InputLabel>
                <Select
                labelId="businessDomain"
                id="businessDomain"
                value={businessDomain}
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
        <Step key={"applicationFeatures"}>
            <StepLabel>
                {"Features in the application"}
            </StepLabel>
            <StepContent>
                <FormControl sx={{width: "50%", mt: 2, mb: 1}}>
                    <InputLabel id="applicationFeatures">Application Features</InputLabel>
                    <Select
                    labelId="applicationFeatures"
                    id="applicationFeatures"
                    multiple
                    value={applicationFeatures}
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
        <Step key={"userInterface"}>
            <StepLabel>
                {"User Interface Pages"}
            </StepLabel>
            <StepContent>
                <FormControl sx={{width: "50%", mt: 2, mb: 1}}>
                    <InputLabel id="userInterface">User Interface Pages</InputLabel>
                    <Select
                    labelId="userInterface"
                    id="userInterface"
                    multiple
                    value={userInterface}
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
        <Step key={"dataManagement"}>
            <StepLabel>
                {"Data Types"}
            </StepLabel>
            <StepContent>
                <FormControl sx={{width: "50%", mt: 2, mb: 1}}>
                    <InputLabel id="dataManagement">Data Types</InputLabel>
                    <Select
                    labelId="dataManagement"
                    id="dataManagement"
                    multiple
                    value={dataManagement}
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
        <Step key={"expectedNumberOfUsers"}>
        <StepLabel>
            {"Expected Number of Users"}
        </StepLabel>
        <StepContent>
        <TextField label="Expected Number of Users" id="expectedNumberOfUsers" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={expectedEmployeeNum} onChange={handleEmployeeNumChange}/>
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
        <Step key={"expectedNumberOfTransactions"}>
        <StepLabel>
            {"Expected Number of Transactions"}
        </StepLabel>
        <StepContent>
        <TextField label="Expected Number of Transactions" id="expectedNumberOfTransactions" sx={{width: "35%", mt: 2, mb: 1}} inputMode='numeric' value={expectedTransNum} onChange={handleTransNumChange}/>
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
        <Step key={"cloudProvider"}>
        <StepLabel>
            {"Cloud Provider"}
        </StepLabel>
        <StepContent>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="cloudProvider">Cloud Provider</InputLabel>
            <Select
            labelId="cloudProvider"
            id="cloudProvider"
            value={cloudProvider}
            label="Cloud Provider"
            onChange={handlecloudProviderChange}
            >
            <MenuItem value={"AWS"}>AWS</MenuItem>
            <MenuItem value={"Azure"}>Azure</MenuItem>
            <MenuItem value={"GCP"}>GCP</MenuItem>
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
        <Step key={"deploymentModel"}>
        <StepLabel>
            {"Deployment Model"}
        </StepLabel>
        <StepContent>
        <FormControl sx={{width: "35%", mt: 2, mb: 1}}>
            <InputLabel id="deploymentModel">Deployment Model</InputLabel>
            <Select
            labelId="deploymentModel"
            id="deploymentModel"
            value={deploymentModel}
            label="Deployment Model"
            onChange={handleDeploymentModelChange}
            >
            <MenuItem value={"Single Region"}>Single Region</MenuItem>
            <MenuItem value={"Multi-Region"}>Multi-Region</MenuItem>
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
    {activeStep === 6 && (
        <Paper square elevation={0} sx={{ p: 3, mt:2 }}>
        <Typography>Startup details captured successfully!</Typography>
        <Box>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} >
            Reset
            </Button>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} variant='outlined' endIcon={<SendIcon />}>
            Next
            </Button>
        </Box>
        </Paper>
    )}
    </Box>
  );
}