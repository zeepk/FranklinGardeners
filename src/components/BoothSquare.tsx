import { useState } from "react";
import type { Booth } from "../utils";

type Props = Booth & {
  highlighted: number;
};

export default function BoothSquare({
  id,
  xOffset,
  yOffset,
  width = 6,
  height = 4,
  rotation = 0,
  text,
  highlighted,
}: Props) {
  const [showTooltip, setShowTooltip] = useState(highlighted === id);
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
      className="md:pt-1 flex align-center justify-center text-center font-semibold absolute bg-cyan-500 border-2 border-cyan-300 align-middle"
      onClick={() => setShowTooltip(true)}
      onMouseOver={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {text && (showTooltip || highlighted === id) && (
        <div className="p-2 absolute w-40 top-[-50px] bg-bg-100 border-2 border-pink-100">
          {text}
        </div>
      )}
      {id}
    </div>
  );
}
