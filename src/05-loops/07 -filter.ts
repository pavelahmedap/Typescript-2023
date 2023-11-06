const nameList = ["Mary", "Tom", "Jack", "Jill", "Pavel", "Jahid"];

const myNumber = [1, 2, 3, 4, 5, 6];
console.log(myNumber);

let values = myNumber.filter((num) => {
  return num > 4;
});
console.log(values);

values = myNumber.filter((num) => {
  return num < 3;
});
console.log(values);

console.log(`============Using for each=========`);

let newNumber: number[] = [];
myNumber.forEach((number) => {
  if (number > 4) {
    newNumber.push(number);
  }
});

console.log(newNumber);
