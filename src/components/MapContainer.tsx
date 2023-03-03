import { useState } from "react";
import Map from "./Map";
import BoothList from "./BoothList";

export default function BoothSquare() {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  return (
    <div className="flex align-center justify-center">
      <Map selectedBoothId={currentHighlight} />
      <BoothList
        currentHighlight={currentHighlight}
        setHighlighted={setCurrentHighlight}
      />
    </div>
  );
}
