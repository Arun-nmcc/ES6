class Person {
    constructor(namee) {
        this.namee = namee;
    }
}
let person = new Person('kj')
console.log(Reflect.getPrototypeOf(person));//get the prototype of the Person using reflect