
console.log("Starting script...\n\n");

import { Gender, Person, People } from "../lib/people";
import { Geometry, Point } from "../lib/geometry";

const knowerOfNothing = new Person("Jon Snow", Gender.Male, 25);
const motherOfDragons = new Person("Daenerys", Gender.Female, 19);

console.log("About to register", knowerOfNothing.describeYourself());
console.log("About to register", motherOfDragons.describeYourself());

const cast = new People();
cast.register(knowerOfNothing);
cast.register(motherOfDragons);
console.log("Those getting too friendly are:", cast.printList());

console.log("\n\n\nNow, playing with some people...")

// Haven't found a way to remove that annoying "Geometry" module name at the beginning.
// tried 
const p1 = new Geometry.Point(10, 10);
const p2 = new Geometry.Point(20, 42);
console.log(p1.print())
const line = new Geometry.Line(p1, p2);

console.log(line.infoString());
console.log(line.distance());

console.log("\n\nEnd of script.")