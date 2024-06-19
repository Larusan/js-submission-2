//UKI - JavaScript Assignment - 2
//Question 03

let classes = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Alice", "Eve"],
  ["Frank", "George", "Bob"],
];
function checkDuplicates(classes) {
  let nameSet = new Set();
  // your code here

  let allClasses = classes.flat(); //convert 2D array to 1D array

  return allClasses.length === nameSet.add(allClasses) ? false : true;
}
console.log(checkDuplicates(classes));
// Output: true
