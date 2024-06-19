//UKI - JavaScript Assignment - 2
//Question 07

function dateDifference(date1, date2) {
  let date1Format = new Date(date1);
  let date2Format = new Date(date2);

  let difference = Math.abs(date1Format - date2Format);

  let dateDifferCount = Math.floor(difference / (1000 * 60 * 60 * 24));

  return dateDifferCount;

}
console.log(dateDifference("2022-06-15", "2024-06-15")); // Example dates
    