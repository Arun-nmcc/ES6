let fun = ()=>'hello'//it just like a lamda function in java make code small 
console.log(fun());

function arrow(arrowfunction , number){//here i use the arrow function and do some operation with that function and return the value
  return   arrowfunction(number)
}

let square = a=>a*a;

console.log(arrow(square,2));//here i pass the arrow function as a arg 