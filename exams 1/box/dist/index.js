"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Box_1 = require("./Box");
const Box_2 = require("./Box");
var box = new Box_1.Box();
console.log(box.count());
box.add(1);
box.add([2, 3]);
box.add(3);
console.log(box.count());
box.remove();
console.log(box.count());
Box_2.fun.call(box);
console.log(box.count());
//# sourceMappingURL=index.js.map