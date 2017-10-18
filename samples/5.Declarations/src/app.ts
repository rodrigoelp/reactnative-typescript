
console.log("Starting script...");

import { Gender, Person } from "../lib/people";

const knowerOfNothing = new Person("Jon Snow", Gender.Male, 25);
const motherOfDragons = new Person("Daenerys", Gender.Female, 19);

console.log("About to register", knowerOfNothing.describeYourself());
console.log("About to register", motherOfDragons.describeYourself());

console.log("End of script.")