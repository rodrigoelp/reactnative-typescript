/**
 * @name: Person
 * @description: It describes the basic information of a person, their name, sex and age.
 */

var genderType = { male: 'M', female: 'F', other: 'U' };

var Person = (function () {
    function Person(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.describeYourself = function () {
            var genderDef = function(g) {
                switch (g) {
                    case genderType.male:
                        return "male";
                    case genderType.female:
                        return "female";
                    default:
                        return "other";
                }
            }
            var genderName = genderDef(this.gender);
            return `{ I am ${this.name} (${genderName}) and I am ${this.age} years old.}`
        }
        this.shortPrint = function () { return `${this.name} (${this.age})`;}
    }
    return Person;
})();

var People = (function () {
    function People() {
        this.registered = [];
        
        this.register = function (p) {
            if (p === undefined) {
                throw "Why are you trying to register a nobody?";
            }
            if (!(p instanceof Person)) {
                objTypeName = p.constructor.name;
                msg = `You should not register a ${objTypeName}. Just register a person at a time.`;
                throw msg;
            }
            this.registered = this.registered.concat(p);
        }

        this.printList = function () {
            return this.registered.reduce((acc, person) => `${acc}${person.shortPrint()}\n`, "\n");
        }
    }
    return People;
})();

exports.Person = Person;
exports.Gender = genderType;
exports.People = People;
