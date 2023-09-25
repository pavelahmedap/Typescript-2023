"use strict";
const programmingLanguages = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    cpp: "C++",
};
for (const programmingLanguage in programmingLanguages) {
    //   console.log(programmingLanguage);
    //   console.log(programmingLanguages[programmingLanguage]);
    console.log(`Key ${programmingLanguage}, value ${programmingLanguages[programmingLanguage]}`);
}
// const car: { type: string; model: string; year: number } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009,
// };
// for (const key in car) {
//   console.log(`Key ${key}, value ${car[key]}`);
// }
const programmingList = ["js", "rb", "py", "java", "cpp"];
for (const key in programmingList) {
    console.log(key);
    console.log(programmingList[key]);
}
