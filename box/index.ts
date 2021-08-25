import { Box } from './Box';
import { fun } from './Box';

var box = new Box<number>();

console.log(box.count());

box.add(1);
box.add([2,3]);
box.add(3);
console.log(box.count());
box.remove();
console.log(box.count());

fun.call(box);

console.log(box.count());