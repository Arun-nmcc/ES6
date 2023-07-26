function fun1(){
    console.log(this)

}
fun1()


const obj = {name:'arun',
fun2 : function(){
    console.log(this)
}}

obj.fun2();