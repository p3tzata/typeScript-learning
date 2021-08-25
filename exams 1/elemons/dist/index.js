"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeloMelon = exports.WaterMelon = exports.Melon = void 0;
class Melon {
    constructor(weight, melonSort, element) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.element = element;
    }
    calcElementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: ${this.element}` + "\n" +
            `Sort: ${this.melonSort}` + "\n" +
            `Element Index: ${this.calcElementIndex()}`;
    }
}
exports.Melon = Melon;
class WaterMelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort, "Water");
    }
}
exports.WaterMelon = WaterMelon;
class MeloMelon extends WaterMelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.state = ["Fire", "Earch", "Air", "Water"];
    }
    morph() {
        let curState = this.state.shift();
        super.element = curState;
        this.state.push(curState);
    }
}
exports.MeloMelon = MeloMelon;
//let watermelon: Melon = new WaterMelon(33, "SuperSort");
//console.log(watermelon.toString());
let melo = new MeloMelon(33, "SuperSort");
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
//# sourceMappingURL=index.js.map