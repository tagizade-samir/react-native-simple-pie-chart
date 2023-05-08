import { DASHES_AMOUNT, IDashMap } from './types';

const SVG_SIZE = 100;
const STROKE_WIDTH = 10;
const SECONDARY_STROKE_WIDTH = 5;
const SVG_CENTER = SVG_SIZE / 2;
const SVG_RADIUS = (SVG_SIZE - STROKE_WIDTH) / 2;
const SECONDARY_SVG_RADIUS = (SVG_SIZE - SECONDARY_STROKE_WIDTH) / 2;
const SVG_CIRCUMFERENCE = 2 * Math.PI * SECONDARY_SVG_RADIUS;

const DASHES_MAPPING: Record<DASHES_AMOUNT, IDashMap> = {
  10: { dash: 0.01, space: 0.09 }, // sum = .1
  20: { dash: 0.01, space: 0.04 }, // sum = .05
  25: { dash: 0.005, space: 0.035 }, // sum = .04
  50: { dash: 0.002, space: 0.018 }, // sum = .02
  100: { dash: 0.002, space: 0.008 }, // sum = .01
};

const COLORS = [
  '#e9c46a',
  '#e76f51',
  '#2a9d8f',
  '#8338ec',
  '#023e8a',
  '#ef476f',
  '#78290f',
  '#2ec4b6',
  '#ffecd1',
  '#023e8a',
];

export const DEFAULT = {
  SVG_SIZE,
  STROKE_WIDTH,
  SECONDARY_STROKE_WIDTH,
  DASHES_MAPPING,
  SVG_CENTER,
  SVG_RADIUS,
  SECONDARY_SVG_RADIUS,
  SVG_CIRCUMFERENCE,
  COLORS,
};
