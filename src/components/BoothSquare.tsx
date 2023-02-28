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
    >
      {id}
    </div>
  );
}
