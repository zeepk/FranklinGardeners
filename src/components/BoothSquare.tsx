import { useState } from "react";
import type { Booth } from "../utils";

type Props = Booth;

export default function BoothSquare({
  id,
  xOffset,
  yOffset,
  width = 6,
  height = 4,
  rotation = 0,
}: Props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const style = {
    top: `${yOffset}%`,
    left: `${xOffset}%`,
    width: `${width}%`,
    height: `${height}%`,
    transform: `rotate(${rotation}deg)`,
  };
  return (
    <div
      style={style}
      className="flex align-center justify-center text-center font-semibold absolute bg-cyan-500 border-2 border-cyan-300"
      onClick={() => setShowTooltip(true)}
      onMouseOver={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <div className="absolute w-40 top-[-38px] bg-green-500 border-2 border-green-300">
          {"Sample text tooltip"}
        </div>
      )}
      {id}
    </div>
  );
}
