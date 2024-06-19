//UKI - JavaScript Assignment - 2
//Question 02

let employees = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 30 },
];
let ageLimit = 30;
function filterEmployees(employees, ageLimit) {
  ageLimitGouped = [];

  ageLimitGouped.employees = [
    ...employees.filter((employees) => {
      return employees.age <= ageLimit;
    }),
  ];

  return ageLimitGouped.employees;
}
console.log(filterEmployees(employees, ageLimit));
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]
