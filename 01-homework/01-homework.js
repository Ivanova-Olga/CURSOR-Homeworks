let potato = 15.678;
let tomato = 123.965;
let carrot = 90.2345;

console.log(Math.max(potato, tomato, carrot));

console.log(Math.min(potato, tomato, carrot));

let summary = potato+tomato+carrot;
console.log(summary);

console.log(Math.floor(potato)+Math.floor(tomato+Math.floor(carrot)));

console.log(Math.round(summary / 100)*100);

let x = Math.floor(summary);
if (summary % 2 === 0) {
    x = true;
} else {
    x = false;
};
console.log(x);

let change = 500 - summary;
console.log(change);

let average = summary / 3;
console.log(average.toFixed(2));

let discount = Math.random();
console.log(discount);

let charge = summary - discount;
console.log(charge.toFixed(2));

let income = summary / 2 - discount;
console.log(income);


let str = `строка на
несколько строчек,
можно сколько угодно`

    `Дважды два равно ${2 * 2}`;
console.log(str);


