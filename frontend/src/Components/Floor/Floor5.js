
import ImageMarker from "react-image-marker";
import floor5 from "../picture/floor5.jpg";
import { useState } from "react";

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
        src={floor5}
        markers={markers}
        onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])}
        markerComponent={CustomMarker}
      />
    </div>
  );
}
