//UKI - JavaScript Assignment - 2
//Question 09

function countOccurrences(arr) {
  let map = new Map();
  let arr_unique_items = new Set(arr);

  for (let item of arr_unique_items) {
    let count = 0; 

    for (let i of arr) {
      if (item === i) {
        count++;
      }
    }
    map.set(item, count);
  }
  return map;
}
// Example usage:
let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countOccurrences(strings));
// Output: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 };
