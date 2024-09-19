import * as React from 'react';
import Box from '@mui/material/Box';
import StartUpDetails from './StartUpDetails';
import useAppBarTitle from './useAppBarTitle';

export default function Questionere() {

  useAppBarTitle("Onboarding to Founders Hub");

  return (
    <Box sx={{ flexGrow: 1, pl: "10%", pr: "5%"}}>
      <StartUpDetails/>
    </Box>
  );
}