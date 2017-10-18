var Person = (function () {
    function Person(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.describeYourself = function () {
            var gender = this.sex === 'M' ? 'male' : 'female';
            return `{ I am ${this.name} (${gender}) and I am ${this.age} years old.}`
        }
        this.print = function () {
            return `{ name: ${this.name} | sex: ${this.sex} | age: ${this.age} }`;
        }
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
            return this.registered.reduce((acc, v) => `${acc}${v.print()}\n`, "");
        }
    }
    return People;
})();

exports.Person = Person;
exports.People = People;
