
export declare module Geometry {
    export class Point {
        constructor(x: number, y: number);
        x: number;
        y: number;
        print: () => string;
    }

    export interface Slope {
        numerator: number;
        denominator: number;
        m: number;
    }

    export class Line {
        constructor(start: Point, end: Point);
        start: Point;
        end: Point;
        slope: () => Slope;
        distance: () => number;
        infoString: () => string;
    }

    export function distanceBetweenPoints(p1: Point, p2: Point): number;
}