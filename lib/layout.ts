import type { CSSProperties } from "react";

/** The hero artwork is 1365 x 768; every overlay is positioned in % of that frame. */
export const W = 1365;
export const H = 768;
type Box = readonly [x: number, y: number, w: number, h: number];

const pct = (n: number) => `${n.toFixed(3)}%`;
export const box = ([x, y, w, h]: Box): CSSProperties => ({
  left: pct((x / W) * 100), top: pct((y / H) * 100), width: pct((w / W) * 100), height: pct((h / H) * 100),
});
/** A hover "lift" clone: same artwork, cropped to the element's box. */
export const clone = (b: Box): CSSProperties => {
  const [x, y, w, h] = b;
  return {
    ...box(b),
    backgroundSize: `${((W / w) * 100).toFixed(2)}% ${((H / h) * 100).toFixed(2)}%`,
    backgroundPosition: `${((x / (W - w)) * 100).toFixed(2)}% ${((y / (H - h)) * 100).toFixed(2)}%`,
  };
};
/** Prefixes public/ assets with the GitHub Pages base path when set. */
export const asset = (p: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${p}`;