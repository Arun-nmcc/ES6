function Person(firstName,secondName){

    
}






const person ={
    firstName:'arun',
    secondName:'raj',
    name:function(){
        return (this.firstName+''+this.secondName).toUpperCase();
    }

}
person.name = function(){
    return this.firstName+this.secondName;
}
console.log(person.name())