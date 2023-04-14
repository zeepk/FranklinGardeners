import { booths } from "../utils";

type Props = {
  setHighlighted: (id: number) => void;
  currentHighlight: number;
};

export default function BoothList({ setHighlighted, currentHighlight }: Props) {
  return (
    <div className="min-w-20 mb-4 pb-12 md:h-[60%] h-60 overflow-y-auto flex flex-col align-center justify-start md:ml-8 w-full md:w-3/12 border-8 border-bg-500 rounded-2xl p-2 bg-bg-300">
      <div className="flex align-center justify-center">
        <h1 className="text-2xl font-semibold mb-2">Booths</h1>
      </div>
      {booths.map((t, i) => (
        <div
          key={t.id}
          className={`text-right hover:bg-bg-100 bg-bg-300 hover:font-semibold w-full flex align-center justify-between p-2 border-t-2 ${
            i + 1 === booths.length ? "border-b-2" : ""
          } border-gray-700`}
          onClick={() => setHighlighted(t.id)}
          onMouseOver={() => setHighlighted(t.id)}
          onMouseLeave={() => setHighlighted(0)}
        >
          <p>{t.id}.</p>
          <p>{t.textOverride ?? t.name}</p>
        </div>
      ))}
    </div>
  );
}
