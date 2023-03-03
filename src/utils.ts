export type Booth = {
  id: number;
  xOffset: number;
  yOffset: number;
  width?: number;
  height?: number;
  rotation?: number;
  text: string;
};

export const booths: Booth[] = [
  { id: 1, xOffset: 10, yOffset: 82, text: "Flower booth" },
  { id: 2, xOffset: 18, yOffset: 82, text: "Lucien Land" },
  { id: 3, xOffset: 26, yOffset: 82, text: "Lemonade stand" },
];
