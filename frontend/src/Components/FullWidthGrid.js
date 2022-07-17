import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicDatePicker from './DatePicker';


import CarPark from "./Floor/Carpark";
import Floor1 from "./Floor/Floor1";
import Floor2 from "./Floor/Floor2";
import Floor3 from "./Floor/Floor3";
import Floor4 from "./Floor/Floor4";
import Floor5 from "./Floor/Floor5";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const FullWidthGrid = ({activePage, setActivePage}) => {

  const Floor = () => {
    switch (activePage) {
      case "Tiefgarage":
        return <CarPark />;
      case "1. Etage":
        return <Floor1 />;
      case "2. Etage":
        return <Floor2 />;
      case "3. Etage":
        return <Floor3 />;
      case "4. Etage":
        return <Floor4 />;
      case "5. Etage":
        return <Floor5 />;     
      default:
        return null
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2} md={2}>
          <Item><BasicDatePicker/></Item>
        </Grid>
        <Grid item xs={10} md={10}>
          <Item>
            <Floor />
          </Item>
        </Grid>
        <Grid item xs={2} md={2}>
          <Item>xs=2 md=2</Item>
        </Grid>
       </Grid>
    </Box>
  );
}

export default FullWidthGrid;
