//UKI - JavaScript Assignment - 2
//Question 16

function updateAttendance(newAttendance, overallAttendance) {
  // your code here
  for (let name of newAttendance) {
    overallAttendance.add(name);
}
return overallAttendance;
}
let overallAttendance = new Set(["Alice", "Bob"]);
let todayAttendance = ["Charlie", "Alice"];
overallAttendance = updateAttendance(todayAttendance, overallAttendance);
console.log([...overallAttendance]);
// Output: ["Alice", "Bob", "Charlie"]
