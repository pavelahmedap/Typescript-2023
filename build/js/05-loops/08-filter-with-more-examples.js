"use strict";
let books = [
    { id: 1, name: "The Russian", type: "fiction", available: true },
    { id: 2, name: "Just as I Am", type: "non-fiction", available: false },
    { id: 3, name: "The Vanishing Half", type: "fiction", available: true },
    { id: 4, name: "The Midnight Library", type: "fiction", available: true },
    { id: 5, name: "Untamed", type: "non-fiction", available: true },
    { id: 6, name: "Viscount Who Loved Me", type: "fiction", available: false },
];
console.log("Get all the books", books);
let nam = books.filter((book) => {
    return book.name === "Just as I Am";
    //   console.log(book.name === "Just as I Am");
});
console.log(nam);
const { name } = nam[0];
console.log(name);
console.log("=======================");
console.log("Get all the books genre is fiction and it's not available");
let fictionbookList = books
    .filter((book) => {
    return book.type === "fiction";
})
    .filter((book) => book.available === false);
console.log(fictionbookList);
