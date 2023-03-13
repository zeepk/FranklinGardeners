import { useState } from "react";
import type { Booth } from "../utils";

type Props = Booth & {
  highlighted: number;
  text: string;
};

export default function BoothSquare({
  id,
  xOffset,
  yOffset,
  width = 6,
  height = 4,
  rotation = 0,
  text,
  name,
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
  const tooltipStyle = {
    left: style.left,
    top: `${yOffset - 5}%`,
    transform: "none",
  };
  return (
    <div className="font-semibold text-center">
      {text && (showTooltip || highlighted === id) && (
        <div
          style={tooltipStyle}
          className="z-10 p-1 absolute w-40 bg-bg-100 border-2 border-pink-100"
        >
          {name ?? text}
        </div>
      )}
      <div
        style={style}
        className="md:pt-1 flex align-center justify-center absolute bg-cyan-200 z-[1] border-2 border-cyan-300 align-middle"
        onClick={() => setShowTooltip(true)}
        onMouseOver={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div style={{ transform: `rotate(${360 - rotation}deg)` }}>{id}</div>
      </div>
    </div>
  );
}
