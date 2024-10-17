// Task 1
const text = "My name is Yuliia";
const revrsedText = text.split("").reverse().join("");
console.log(revrsedText);


// Task 2
function getIntegerPart(number) {
  return Math.trunc(number);
}
console.log(getIntegerPart(8, 25));


// Task 3
const userName = prompt("Введіть своє імʼя");
if (userName) {
  alert(userName.toUpperCase());
}


// Task 4
function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}.${month}.${year}`;
}
console.log(formatDate("2021-09-22"));


// Task 5
function isEqual(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(isEqual("pApA", "papa"));
console.log(isEqual("qwerty", "QWErty"));
console.log(isEqual("aaa", "EEE"));


// Task 6
function throwError() {
  throw new Error("Error1");
}
try {
  throwError();
} catch (error) {
  console.log("Error2");
}
