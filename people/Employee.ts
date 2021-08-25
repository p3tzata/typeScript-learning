export abstract class  Employee {

    salary: number;
    tasks: string[];
    

    constructor(public name: string, public age:number) {
        this.salary = 0;
        this.tasks = [];
    }




}

export class Junior extends Employee {

    constructor(name: string, age: number) {
        super(name, age);
    }

} 


let Ivo: Employee = new Junior("Ivcho", 34);

console.log(Ivo.name);