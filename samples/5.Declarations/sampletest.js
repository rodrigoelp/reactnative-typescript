var p = require("./lib/people");
var g = require("./lib/geometry");

var knowerOfNothing = new p.Person("Jon Snow", "M", 25);
var motherOfDragons = new p.Person("Daenerys", "F", 19);

console.log("About to register", knowerOfNothing.print());
console.log("About to register", motherOfDragons.print());
var cast = new p.People();
cast.register(knowerOfNothing);
cast.register(motherOfDragons);
console.log("Family doing 'it': ", cast.printList())

console.log("Changing to geometry");

var p1 = new g.Point(10, 10);
var p2 = new g.Point(20, 42);
console.log(p1.print())
var line = new g.Line(p1, p2);

console.log(line.infoString());
console.log(line.distance());