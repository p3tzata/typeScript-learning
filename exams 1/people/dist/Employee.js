"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Junior = exports.Employee = void 0;
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
}
exports.Employee = Employee;
class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
    }
}
exports.Junior = Junior;
let Ivo = new Junior("Ivcho", 34);
console.log(Ivo.name);
//# sourceMappingURL=Employee.js.map