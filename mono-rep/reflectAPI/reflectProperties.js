//access the properties using reflect
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
const mum ={
    _namee : 'anna'
}
let person = new Person('arun');
Reflect.set(person,'namee','hello',mum);//first ref second property name third value want to replace last ref want to overdide only works with this
console.log(Reflect.has(person,'namee'));
console.log(Reflect.ownKeys(person));// print the properties available in the person object
console.log (mum);
console.log(Reflect.get(person,'namee',mum));