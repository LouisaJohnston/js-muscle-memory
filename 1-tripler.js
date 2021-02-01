/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/
// incoming array: [4, 1, 7] 

function tripler(array) {
  // initialize the empty array
  const output = [];

  // loop through the incoming array
  // use the index to access the elements inside the incoming array
  for (let i = 0; i < array.length; i++) {
    //grabs element in that position as opposed to console.log(i) which just grabs the position
    // console.log(array[i] * 3);
    const tripled = array[i] * 3;
    output.push(tripled);
    // array begins empty, replaced index with output from array[i] * 3 
    // output[i] = array[i] * 3

  }

  // on each element in the incoming array, multiply it by three
  // push the tripled numbers into the output

  // return the no-longer-empty array
  return output;
}

// count from 20 to 100 in multiples of 5
for (let i = 20; i <= 100; i+= 5) {
    console.log(i)
}


let myVar = 19

myVar += 2
//same as
myVar = myVar + 2