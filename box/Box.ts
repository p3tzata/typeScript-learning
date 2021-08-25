export class Box<T> {

    items: T[];

    constructor() {
        this.items=[];
    }


    add(el: T | T[]) {
        //this.items.push(el);
        //This is faster; This create new ref;
        this.items = this.items.concat(el);
    }

    count(): number {
        return this.items.length;
    }

    remove(): void {
        this.items.pop();
    }


}


export function fun<T>(this: Box<T>, el: T): void {
    this.add(el);
}
