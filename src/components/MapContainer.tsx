import { useState } from "react";
import Map from "./Map";
import BoothList from "./BoothList";
import type { Booth } from "../utils";

type Props = {
  vendors: Booth[];
};

export default function MapContainer({ vendors }: Props) {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  return (
    <div className="mb-60 md:mb-0 relative h-screen my-4 flex align-center justify-center md:flex-row flex-col-reverse">
      <Map vendors={vendors} selectedBoothId={currentHighlight} />
      <BoothList vendors={vendors} setHighlighted={setCurrentHighlight} />
    </div>
  );
}
