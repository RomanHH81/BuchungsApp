import './App.css';
import ResponsiveAppBar from './Components/AppBar';
import FullWidthGrid from './Components/FullWidthGrid';
import { Grid } from '@mui/material';

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <FullWidthGrid/>
      <Grid/>       
    </div>
  );
}

export default App;
