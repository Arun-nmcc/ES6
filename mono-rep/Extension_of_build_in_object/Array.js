let array =Array(5);//in this we create array with 5 length
let arr = Array.of(4,3,5);//we can create array with this element
console.log(arr[0]);
let ar = Array.from(arr,val=> val+2);//create the array from existing array 
console.log(ar)
console.log('copywithin  '+arr.copyWithin(0,2))
let it =arr.entries();

for(let element of it){
    console.log(element);//basically print the element along with index number
}