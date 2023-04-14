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
  text,
  name,
  highlighted,
}: Props) {
  const [hovering, setHovering] = useState(highlighted === id);
  const style = {
    top: `${yOffset}%`,
    left: `${xOffset}%`,
    width: `4%`,
    height: `4%`,
  };
  const tooltipStyle = {
    left: style.left,
    top: `${yOffset - 5}%`,
    transform: "none",
  };
  const showTooltip =
    (hovering || highlighted === id) && name && name.length > 0;
  return (
    <div className="font-semibold text-center">
      {text && showTooltip && (
        <div
          style={tooltipStyle}
          className="z-10 p-1 absolute w-60 bg-bg-100 border-2 border-pink-100"
        >
          {name ?? text}
        </div>
      )}
      <div
        style={style}
        className={`text-sm pt-1 flex align-center justify-center absolute z-[1] border-2 ${
          showTooltip
            ? "border-pink-100 bg-bg-100"
            : "border-cyan-300 bg-cyan-200"
        } align-middle`}
        onClick={() => setHovering(true)}
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div>{id}</div>
      </div>
    </div>
  );
}
