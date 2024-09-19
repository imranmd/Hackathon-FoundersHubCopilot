import * as React from 'react';
import Box from '@mui/material/Box';
import StartUpDetails from './StartUpDetails';

export default function Questionere() {

  return (
    <Box sx={{ flexGrow: 1, pl: "10%", pr: "5%"}}>
      <h1 className="main-heading">Onboarding to Founders Hub</h1>
      <StartUpDetails/>
    </Box>
  );
}