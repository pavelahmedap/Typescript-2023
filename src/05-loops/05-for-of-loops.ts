// for of
const array = [1, 2, 3, 4, 5, 6, 7];

for (let number of array) {
  console.log(`Value is ${number}`);
}

const myFriends = ["Nahid", "Jahid", "Ilius"];

for (const friend of myFriends) {
  console.log(`My friend name is: ${friend}`);
}

// Maps
const map = new Map<string, string>();

map.set("AP", "Ahmed Pavel");
map.set("PA", "Pavel Ahmed");
map.set("NI", "Pavel Ahmed");
console.log(map);

console.log("Print map values");

// It's printing us a array
for (let name of map) {
  // console.log(name);
}

for (let [key, value] of map) {
  console.log(`Key: ${key} -> Value: ${value}`);
}

// let nameAgeMapping = new Map();
// // let nameAgeMapping = new Map<string, number>();

// //1. Add entries
// nameAgeMapping.set("Pavel", 37);
// nameAgeMapping.set("Ahmed", 35);
// nameAgeMapping.set("Nahid", 40);
// nameAgeMapping.set("Jahid", 40);
// console.log(nameAgeMapping);

let myObj = {
  game1: "cricket",
  game2: "Soccer",
  game3: "NFS",
};

console.log(myObj);

for (let key in myObj) {
  console.log(key);
  // console.log(myObj);
}
