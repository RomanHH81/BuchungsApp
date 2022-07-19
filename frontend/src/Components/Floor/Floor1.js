
import ImageMarker from "react-image-marker";
import floor1 from "../picture/floor1.jpg";
import { useEffect, useState } from "react";
import axios from "axios"

export default function Floor1Marker () {
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

  useEffect(() => {
    axios.get("Floors.json").then(res => {
      console.log(res.data.floor1);
    })
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
      <ImageMarker
        src={floor1}
        markers={markers}
        onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])}
        markerComponent={CustomMarker}
      />
    </div>
  );
}
