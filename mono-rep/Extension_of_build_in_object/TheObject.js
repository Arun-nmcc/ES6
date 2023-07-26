// class Obj1{
//     constructor(){
//         this.name ='arun'
//     }
// }
// class Obj2{
//     constructor(){
//         this.name ='hello'
//     }
// }
let obj1 = {
    a : 'first'
}
let obj2 = {
    b : 'name'
}


// let obj1 = new Obj1;
// let obj2 = new Obj2;
let obj = Object.assign(obj2,obj1);
console.log(obj);


