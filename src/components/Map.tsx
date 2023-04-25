import BoothSquare from "./BoothSquare";
import type { Booth } from "../utils";
import BlankMap from "../assets/map2.png";
import RestroomSymbol from "../assets/restroom.png";

type Props = {
  vendors: Booth[];
  selectedBoothId: number;
};

export default function Map({ vendors, selectedBoothId }: Props) {
  return (
    <div className="h-[930px] relative md:overflow-y-visible md:overflow-x-scroll overflow-scroll">
      <div className="relative map w-[1151px] h-[889px]">
        <img src={BlankMap} className="absolute top-0 left-0 w-full h-full" />
        <img
          src={RestroomSymbol}
          className="absolute top-[110px] right-[20px] w-10 h-10"
        />
        {vendors
          .filter((t) => t.name)
          .map((t, i) => (
            <BoothSquare
              key={`booth-${i}`}
              id={t.id}
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
