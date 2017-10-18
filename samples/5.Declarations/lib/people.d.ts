
/**
 * Representation of a person.
 */
export declare class Person {
    constructor(name: string, gender: string, age: number);
    describeYourself: () => string;
    shortPrint: () => string;
}

export declare class People {
    constructor();
    register(p: Person): void;
    printList(): string;
}

export enum Gender {
    Male = "M",
    Female = "F",
    Other = "U"
}
