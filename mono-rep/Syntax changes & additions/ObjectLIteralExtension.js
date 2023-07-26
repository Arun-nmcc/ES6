let firstName = 'arun'
let secondName = 'R'
let age = 20






let obj = {
    firstName,
    secondName,
    age,
    println() {
        console.log(this.firstName + ',' + this.secondName + ',' + this.age)


    }
}




console.log(obj.println())
let obj2 = {
    name: 'arun kumar',
    location: 'verkilambi'
};
//deconstruction object
let { name } = obj2;
console.log(name);
