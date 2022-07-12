import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicDatePicker from './DatePicker';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  const FullWidthGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2} md={2}>
          <Item><BasicDatePicker/></Item>
        </Grid>
        <Grid item xs={10} md={10}>
          <Item></Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>xs=2 md=2</Item>
        </Grid>
       </Grid>
    </Box>
  );
}

export default FullWidthGrid;

