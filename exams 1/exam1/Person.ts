export class Person {
	constructor(private name: string, private age: number) {
    };

    prints(): void {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }

 

}

