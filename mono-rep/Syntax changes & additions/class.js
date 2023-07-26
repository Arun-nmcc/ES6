class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
    getPersonDetails(){
        console.log(this.age+this.name)
    }
}
const person = new Person('arun',4);
class Ocupation{
    constructor(nameOfOCupation){
        this.nameOfOCupation=nameOfOCupation;
    }
    getOcupation(){
        console.log(this.nameOfOCupation)
    }
    
}