import { useState } from "react";
import Map from "./Map";
import BoothList from "./BoothList";

export default function BoothSquare() {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  return (
    <div className="mb-60 md:mb-0 relative h-screen my-4 flex align-center justify-center md:flex-row flex-col-reverse">
      <Map selectedBoothId={currentHighlight} />
      <BoothList
        currentHighlight={currentHighlight}
        setHighlighted={setCurrentHighlight}
      />
    </div>
  );
}
