let books = [
  { id: 1, name1: "The Russian", type: "fiction", available: true },
  { id: 2, name1: "Just as I Am", type: "non-fiction", available: false },
  { id: 3, name1: "The Vanishing Half", type: "fiction", available: true },
  { id: 4, name1: "The Midnight Library", type: "fiction", available: true },
  { id: 5, name1: "Untamed", type: "non-fiction", available: true },
  { id: 6, name1: "Viscount Who Loved Me", type: "fiction", available: false },
];
console.log("Get all the books", books);

let names1 = books.filter((book) => {
  return book.name1 === "Just as I Am";
  //   console.log(book.name === "Just as I Am");
});
console.log(names1);

let { name1 } = names1[0];
console.log(name1);

console.log("=======================");
console.log("Get all the books genre is fiction and it's not available");

let fictionbookList = books
  .filter((book) => {
    return book.type === "fiction";
  })
  .filter((book) => book.available === false);
console.log(fictionbookList);

console.log("===============");
let fBookWithId = books.filter((book) => {
  return book.id >= 3 && book.available === false;
});

console.log(fBookWithId);
