"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fun = exports.Box = void 0;
class Box {
    constructor() {
        this.items = [];
    }
    add(el) {
        //this.items.push(el);
        //This is faster; This create new ref;
        this.items = this.items.concat(el);
    }
    count() {
        return this.items.length;
    }
    remove() {
        this.items.pop();
    }
}
exports.Box = Box;
function fun(el) {
    this.add(el);
}
exports.fun = fun;
//# sourceMappingURL=Box.js.map