//UKI - JavaScript Assignment - 2
//Question 14

function union(...arrays) {
  let resultSet = new Set();
  for (let array of arrays) {
    for (let item of array) {
      resultSet.add(item);
    }
  }
  return [...resultSet];
}

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let array3 = [5, 6, 7];
console.log(union(array1, array2, array3));
// Output: [1, 2, 3, 4, 5, 6, 7]
