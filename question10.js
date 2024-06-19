//UKI - JavaScript Assignment - 2
//Question 10

let employees = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
function mapEmployeeIdsToNames(employees) {
  let map = new Map();
  employees.forEach((emp) => {
    map.set(emp.id, emp.name);
  });
  return map;
}
let employeeMap = mapEmployeeIdsToNames(employees);
console.log(employeeMap);
// Output: Map { 1 => 'Alice', 2 => 'Bob', 3 => 'Charlie' }
