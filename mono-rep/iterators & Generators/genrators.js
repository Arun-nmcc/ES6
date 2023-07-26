function *fun(){//basically it return the iterator using that we have the controll of excuting 
   function fun1(){
    console.log('inside fun1 ..')
   }
   function fun2(){
    console.log('inside fun2 ..')
   }
   function fun3(){
    console.log('inside fun3 ..')
   }
   yield fun1();
   yield fun2();
   yield fun3();
}
let it = fun();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());