
console.log("Starting script...\n\n");

// getting the types defined for people.
import { Gender, Person, People } from "../lib/people";

const knowerOfNothing = new Person("Jon Snow", Gender.Male, 25);
const motherOfDragons = new Person("Daenerys", Gender.Female, 19);

console.log("Who are you? > ", knowerOfNothing.describeYourself());
console.log("Who are you? >", motherOfDragons.describeYourself());

const winkWink = new People();
winkWink.register(knowerOfNothing);
winkWink.register(motherOfDragons);
console.log("Those getting too friendly are:", winkWink.printList());
console.log("I am tired of people with people...")

console.log("\n\n\nNow, playing with some geometry...")
import { Geometry } from "../lib/geometry";
// What I really would love to do is = 
// import { Point, Line, distanceBetweenPoints } from "../lib/geometry";


 // But I can extract the definition from the Geometry module like this.
var { Point, Line } = Geometry;
// I wonder... is this evil? If you are reading this code, and you have a
// valid reason why this should never be done. Send me a comment/issue.

const p1 = new Point(10, 10);
const p2 = new Point(20, 42);

console.log("Created a point: ", p1.print())
console.log("Created a point: ", p2.print())

const line = new Line(p1, p2);

console.log("Created a line:", line.infoString());
console.log("The line marks a distance of: ", line.distance());
console.log("Checking what line tells us with the ditance between points: ", Geometry.distanceBetweenPoints(p1, p2));
console.log("Was the calculation correct? ", line.distance() === Geometry.distanceBetweenPoints(p1, p2));

console.log("\n\nEnd of script.")