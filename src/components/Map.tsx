import BoothSquare from "./BoothSquare";
import { booths } from "../utils";
import BlankMap from "../assets/blankMap.png";

type Props = {
  selectedBoothId: number;
};

export default function Map({ selectedBoothId }: Props) {
  return (
    <div className="relative map w-[1151px] h-[889px]">
      <img src={BlankMap} className="absolute top-0 left-0 w-full h-full" />
      {booths.map((t) => (
        <BoothSquare
          id={t.id}
          width={t.width}
          height={t.height}
          xOffset={t.xOffset}
          yOffset={t.yOffset}
          rotation={t.rotation}
          text={t.text}
          highlighted={selectedBoothId}
        />
      ))}
    </div>
  );
}

// <style>
//   .map {
//     object-fit: cover;
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//   }
// </style>
