var p = require("./lib/people");
var g = require("./lib/geometry");

var knowerOfNothing = new p.Person("Jon Snow", p.Gender.male, 25);
var motherOfDragons = new p.Person("Daenerys", p.Gender.female, 19);

console.log("About to register", knowerOfNothing.describeYourself());
console.log("About to register", motherOfDragons.describeYourself());
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