
//foreach
const products = ['milk','egg','sugar','protien']
products.forEach((product,index)=> console.log(`product name is ${product} and the product index is ${index}`));


//map

//map take the copy of the array and then modify the index values based on the requirment and return it
const newList = products.map((product , index)=>`product  name  ${product} and the index is ${index}`)
console.log(newList)
//filter
const newFilteredList = products.filter((product)=>'egg'!=product)
console.log(`new fileter list ${newFilteredList}`)