import './App.css';

import { useState, useEffect } from "react";

import ResponsiveAppBar from './Components/AppBar';
import FullWidthGrid from './Components/FullWidthGrid';
import { Grid } from '@mui/material';

function App() {

  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage("1. Etage");
  }, []);

  return (
    <div>
      <ResponsiveAppBar activePage={activePage} setActivePage={setActivePage} />
        <FullWidthGrid activePage={activePage} setActivePage={setActivePage} />
      <Grid/>       
    </div>
  );
}

export default App;
