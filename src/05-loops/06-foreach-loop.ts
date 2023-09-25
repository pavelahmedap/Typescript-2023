let names: string[] = new Array(
  "Mary",
  "Tom",
  "Jack",
  "Jill",
  "Pavel",
  "Jahid"
);

let namesFoundList: string[] = [];
names.forEach((name) => {
  //   console.log(name);
  if (name === "Jack" || name === "Pavel") {
    console.log(`Name found ${name}`);
    namesFoundList.push(name);
    // continue;
  }
});

console.log(namesFoundList);

namesFoundList.forEach(function (item) {
  //   console.log(item);
});

function printvalue(item: string) {
  console.log(item);
}
console.log(`Using function`);

namesFoundList.forEach(printvalue);

console.log("Get all the values from foreach loop");
namesFoundList.forEach((item, index, arr) => {
  console.log(item, " ", index, " ", arr);
});

console.log(`Array with objects`);

interface IPerson {
  name: string;
  age: number;
}
// creating the array of objects
// const peoples: { age: number; name: string }[] = [
const peoples: any[] = [
  {
    age: 18,
    name: "Pavel",
    list: [1, 2, 3, 4],
  },
  {
    age: 28,
    name: "Bob",
  },
  {
    name: "Jahid",
    age: 30,
  },
];

console.log(peoples);

peoples.forEach((person) => {
  console.log(person.name, "=====", person.age);
  //   if (person.name.list.hasOwnProprty()) {
  //     console.log(person.list[2]);
  //   }
});
