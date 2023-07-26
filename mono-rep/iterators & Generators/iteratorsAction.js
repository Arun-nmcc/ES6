let array = [1, 2];
array[Symbol.iterator] = function () {
  let count = 0; // Start the counter at the beginning of the array
  let len = this.length;
  let arr = this;
  return {
    next() {
      if (count < len) {
        return {
          value: arr[count++], // Return the current element and then increment the counter
          done: false
        };
      }
      return {
        value : undefined,
        done: true
      };
    }
  };
};
let it = array[Symbol.iterator]();
console.log(it.next()); 
console.log(it.next());
 console.log(it.next());