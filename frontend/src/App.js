import { useState, useEffect } from "react";
import ResponsiveAppBar from "./Components/AppBar";
import FullWidthGrid from "./Components/FullWidthGrid";
import { Grid } from "@mui/material";
import axios from "axios";

function App() {
  const [activePage, setActivePage] = useState("");

 const [floors, setFloors] = useState({});

 // Neue Funktion zum JSON-Laden (asynchron)
 const getFloorData = async () => {
  const response = await axios.get("Floors.json");
  return response.data;
 }

  useEffect(() => {
    setActivePage("1. Etage");

    // hier werden die Etagen-Daten geladen und der State gesetzt:
    getFloorData().then(res => {
      setFloors(res);
    })
  }, []);

  return (
    <div>
      <ResponsiveAppBar activePage={activePage} setActivePage={setActivePage} />
      <FullWidthGrid activePage={activePage} setActivePage={setActivePage} floors={floors} />
      <Grid />
    </div>
  );
}

export default App;
