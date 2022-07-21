
import ImageMarker from "react-image-marker";
import floor2 from "../picture/floor2.jpg";
import { useEffect, useState } from "react";

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

  const getPoints = () => {
    const returnArray = [];
    floors.floor2.map(e => {
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
      <ImageMarker
        src={floor2}
        markers={markers}
        onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])}
        markerComponent={CustomMarker}
      />
    </div>
  );
}
