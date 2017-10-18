
/**
 * This is a geometry library.
 */

var Geometry = {
    Point: (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
            this.print = function () {
                return `{x: ${this.x.toString()} | y: ${this.y.toString()} }`;
            }
        }
        return Point;
    })(),
    Line: (function () {
        function Line(start, end) {
            this.start = start;
            this.end = end;
            
            this.slope = function () {
                n = this.end.y - this.start.y;
                d = this.end.x - this.start.x;
                return { numerator: n, denominator: d, m: n / d };
            }

            this.distance = function () {
                return Geometry.distanceBetweenPoints(this.start, this.end);
            }

            this.infoString = function () {
                s = this.start;
                e = this.end;
                return `{(x:${s.x},  y:${s.y}) -> (x:${e.x}, y:${e.y})}`
            }
        }
        return Line;
    })(),
    distanceBetweenPoints: function(p1, p2) {
        return Math.sqrt(
            Math.pow(p2.x - p1.x, 2) +
            Math.pow(p2.y - p1.y, 2)
        );
    },
    distance: function(line) {
        return Geometry.distanceBetweenPoints(line.start, line.end);
    }
};

exports.Geometry = Geometry;
exports.Point = Geometry.Point;
exports.Line = Geometry.Line;