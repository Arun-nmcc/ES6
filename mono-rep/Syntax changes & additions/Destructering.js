//destructering obj

let perosn ={
    name:'arun',
    age:32
}


let{name,age}=perosn;
console.log(name,age);
//destructering array
let arr =[1,2,3,4,5];
let [a,b, ,c,d] = arr;
console.log(a,b,c,d)