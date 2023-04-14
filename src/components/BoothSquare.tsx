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
  description,
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
    left: `${xOffset > 70 ? xOffset - 20 : xOffset}%`,
    top: `${
      yOffset < 20
        ? yOffset + 5
        : yOffset - (description ? 10 + description.length / 17 : 8)
    }%`,
    transform: "none",
  };
  const showTooltip =
    (hovering || highlighted === id) && name && name.length > 0;
  return (
    <div className="text-left">
      {text && showTooltip && (
        <div
          style={tooltipStyle}
          className="z-10 p-2 absolute w-80 bg-bg-100 border-2 border-pink-100"
        >
          <p className="font-semibold text-xl mb-2">{name ?? text}</p>
          <p className="font-normal">{description ?? ""}</p>
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
