"use strict";
// Reduce is great for adding list values -
const prices = [100, 600, -100];
const total = prices.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0);
console.log(total);
