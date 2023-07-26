class Person{
    constructor(namee){
        this.namee =namee;
    }
    print(msg){
        console.log(msg+`hello `+this.namee)//backtic not working in reflect
    }

}
function Fun(){
    this.age = 34;
}
let person = Reflect.construct(Person,['arun'])//first arg is Person and second is constructor arg and thrid one is convert the person type to fun type
Reflect.apply(person.print,person,['hello']);//first call the function second one send the ref object ,thrid one pass args name
