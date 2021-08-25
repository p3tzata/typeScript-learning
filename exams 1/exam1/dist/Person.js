"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    Person.prototype.prints = function () {
        console.log("My name is " + this.name + " and I am " + this.age + " years old.");
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map