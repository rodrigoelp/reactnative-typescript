
console.log("Starting script...");

import { Gender, Person, People } from "../lib/people";

const knowerOfNothing = new Person("Jon Snow", Gender.Male, 25);
const motherOfDragons = new Person("Daenerys", Gender.Female, 19);

console.log("About to register", knowerOfNothing.describeYourself());
console.log("About to register", motherOfDragons.describeYourself());

const cast = new People();
cast.register(knowerOfNothing);
cast.register(motherOfDragons);
console.log("Those getting too friendly are:", cast.printList());

console.log("End of script.")