export abstract class Melon {

    constructor(public weight: number, public melonSort: string, protected element: string) {

    }



    calcElementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    toString() {
        return `Element: ${this.element}` + "\n" +
            `Sort: ${this.melonSort}` + "\n" +
            `Element Index: ${this.calcElementIndex()}`;
    }

}

export class WaterMelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight,melonSort,"Water")
    }
}

export class MeloMelon extends WaterMelon {

    private state: string[];

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.state = ["Fire", "Earth", "Air", "Water"];
    }

    morph() {
        let curState=this.state.shift();
        super.element = curState;
        this.state.push(curState);
    }

}


//let watermelon: Melon = new WaterMelon(33, "SuperSort");
//console.log(watermelon.toString());

let melo: MeloMelon = new MeloMelon(33, "SuperSort");

console.log(melo.toString());

melo.morph();
console.log(melo.toString());
melo.morph();
console.log(melo.toString());
melo.morph();
console.log(melo.toString());
melo.morph();
console.log(melo.toString());
melo.morph();
console.log(melo.toString());
melo.morph();
console.log(melo.toString());