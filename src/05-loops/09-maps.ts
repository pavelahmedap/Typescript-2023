let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

const updatedNumber = numbers.map((num) => {
  return num + 5;
});
console.log(updatedNumber);

console.log("==========Chaining==============");
const newNumbers = numbers
  .map((num) => {
    return num * 5;
  })
  .map((num) => {
    return num - 0.999;
  })
  .filter((num) => {
    return num > 30;
  })
  .map((num) => {
    return num + 1;
  })
  .map((num) => num + 0.999)
  .filter((num) => num < 50);

console.log(newNumbers);
