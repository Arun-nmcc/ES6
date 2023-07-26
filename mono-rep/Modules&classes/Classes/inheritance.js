class Person{
    constructor(name ,age ){
        this.name = name;
        this.age = age;

    }
  
}
class Arun extends Person{
    constructor(work){
        super('arun',2);
        this.work =work
    }

}
let arun = new Arun('dev');
console.log(arun);