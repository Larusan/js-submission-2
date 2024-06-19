//UKI - JavaScript Assignment - 2
//Question 13

function intersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  return [...set1].filter(item => set2.has(item));
  // understand the above 2 variable declarations
}
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
console.log(intersection(array1, array2));
// Output: [3, 4]
