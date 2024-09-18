import * as React from 'react';
import Box from '@mui/material/Box';
import StartUpDetails from './StartUpDetails';
import FunctionalRequirements from './FunctionalRequirements';
import NonFunctionalRequirements from './NonFunctionalRequirements';

export default function Questionere() {

  const [onboardingState, setOnboardingState] = React.useState(0);

  const handleNext = () => {
    setOnboardingState((prevOnboardingState) => prevOnboardingState + 1);
  };

  return (
    <Box sx={{ flexGrow: 1, pl: "10%", pr: "5%"}}>
      <h1 className="main-heading">Onboarding to Founders Hub</h1>
      {onboardingState === 0 && <StartUpDetails handleNext={handleNext}/>}
      {onboardingState === 1 && <FunctionalRequirements handleNext={handleNext}/>}
      {onboardingState === 2 && <NonFunctionalRequirements />}
    </Box>
  );
}