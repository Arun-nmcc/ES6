
// if any obj want to iterate the value it must have [symbol.iterator] by default some objs has this property like array ..
// if we want to overide we can 

let array = [1,2,3,4,5];

let it =array[Symbol.iterator]();
console.log(it.next());




