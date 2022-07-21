
import ImageMarker from "react-image-marker";
import floor1 from "../picture/floor1.jpg";
import { useEffect, useState } from "react";
import Tooltip from '@mui/material/Tooltip';

export default function Floor1Marker({ floors }) {
  let [markers, setMarkers] = useState([]);

  const CustomMarker = () => {
    return (
      <div
        className="image-marker__marker image-marker__marker--default"
        data-testid="marker"
      ></div>
    );
  };

  const savePoints = () => {
    console.log(markers);
  }

  const getPoints = () => {
    const returnArray = [];
    floors.floor1.map(e => {
      returnArray.push({top: e.Koordinaten_Top, left: e.Koordinaten_Left})
    })
    return returnArray;
  }

  useEffect(() => {
    setMarkers(getPoints())
  }, [])

  return (
    <div>
      <button disabled={!markers.length > 0} onClick={() => setMarkers([])}>
        Reset
      </button>
      <button
        disabled={!markers.length > 0}
        onClick={() => setMarkers((prev) => prev.slice(0, -1))}
      >
        Remove Marker
      </button>
      <button onClick={savePoints} > 
        Save
      </button>
      <Tooltip title="Delete">
       
      </Tooltip>
       <ImageMarker
          src={floor1}
          markers={markers}
          onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])}
          markerComponent={CustomMarker}
        />
    </div>
  );
}
