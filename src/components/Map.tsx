import BoothSquare from "./BoothSquare";
import { booths } from "../utils";
import BlankMap from "../assets/map.png";
import RestroomSymbol from "../assets/restroom.png";

type Props = { selectedBoothId: number };

export default function Map({ selectedBoothId }: Props) {
  return (
    <div className="h-[930px] relative md:overflow-y-visible md:overflow-x-scroll overflow-scroll">
      <div className="relative map w-[1151px] h-[889px]">
        <img src={BlankMap} className="absolute top-0 left-0 w-full h-full" />
        <img
          src={RestroomSymbol}
          className="absolute top-[110px] right-[20px] w-10 h-10"
        />
        {booths
          .filter((t) => t.name)
          .map((t, i) => (
            <BoothSquare
              key={`booth-${i}`}
              id={i + 1}
              xOffset={t.xOffset}
              yOffset={t.yOffset}
              text={t.textOverride ?? (i + 1).toString()}
              name={t.name}
              description={t.description}
              highlighted={selectedBoothId}
            />
          ))}
      </div>
    </div>
  );
}
