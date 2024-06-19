//UKI - JavaScript Assignment - 2
//Question 05

function calculateAge(birthdate) {
  let currentDate = new Date();
  let birthDate = new Date(birthdate);
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  return !isNaN(birthDate.getTime()) === true
    ? age
    : "Invalid Input! The input must be in the format YYYY-MM-DD.";
}
console.log(calculateAge("1990-06-15"));
