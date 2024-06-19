//UKI - JavaScript Assignment - 2
//Question 04
function getDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
console.log(getDateTime());