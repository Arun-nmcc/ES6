//add the properties and delete properties using reflect
class Person {
    constructor(namee) {
        this._namee = namee;
    }
    get namee() {
        return this._namee

    }
    set namee(namee){
        this._namee = namee;

    }
}
let person = new Person('arun');
Reflect.defineProperty(person,'age',{//configuration of teh property
    value : 32,  //default value
   writable : true,// editable or changeable
    configurable : true // change the config details
})
Reflect.deleteProperty(person,age)// to delete the propeties
person.age = 35;
console.log(person.age);