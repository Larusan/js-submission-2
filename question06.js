//UKI - JavaScript Assignment - 2
//Question 06

function addDays(date, days) {

 
 let resultDate = new Date(date);
 resultDate.setDate(resultDate.getDate() + days);
 let dateFormat = resultDate.toISOString().split('T')[0];
 return dateFormat;

}
console.log(addDays("2022-06-15", 10));
