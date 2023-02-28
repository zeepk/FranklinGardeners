export type Booth = {
  id: number;
  xOffset: number;
  yOffset: number;
  width?: number;
  height?: number;
  rotation?: number;
};

export const booths: Booth[] = [
  { id: 1, xOffset: 10, yOffset: 82 },
  { id: 2, xOffset: 18, yOffset: 82 },
  { id: 3, xOffset: 26, yOffset: 82 },
];
