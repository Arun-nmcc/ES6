let obj1 ={
    name : 'arun',
    age : 12
}
let obj2 ={
    name : 'hello',
    age : 32
}
let ma = new WeakMap();//keys are only in object

ma.set(obj1,"obj");
ma.set(obj2,"obj1");
console.log(ma.get(obj1));
