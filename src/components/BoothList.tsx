import { booths } from "../utils";

type Props = {
  setHighlighted: (id: number) => void;
  currentHighlight: number;
};

export default function BoothList({ setHighlighted, currentHighlight }: Props) {
  return (
    <div className="flex flex-col align-center justify-start md:ml-8 w-3/12 border-8 border-bg-500 rounded-2xl p-2 bg-bg-300">
      <div className="flex align-center justify-center">
        <h1 className="text-2xl font-semibold mb-2">Booths</h1>
      </div>
      {booths.map((t, i) => (
        <div
          className={`hover:font-semibold w-full flex align-center justify-center p-2 border-t-2 ${
            i + 1 === booths.length ? "border-b-2" : ""
          } border-gray-700`}
          onClick={() => setHighlighted(t.id)}
          onMouseOver={() => setHighlighted(t.id)}
          onMouseLeave={() => setHighlighted(0)}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
}
