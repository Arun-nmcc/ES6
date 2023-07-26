// basically in java script we can assign default value to the parameter in the function
function fun1 (number1= 1 , number2 = 10){
    console.log('this function going to print '+number1 +' to '+number2)
    for(let i = number1; i <= number2; i++){
        console.log(i)
    }

}fun1(11 ,20);
function fun1(){// this method overrides the pervious one because these two havae same name if want to achieve method overloading
                 //we can do that by different way like check the parameter is undefiend or not
    console.log('no parameterized function')
}
fun1();

console.log("-------")
fun1(11 ,20);