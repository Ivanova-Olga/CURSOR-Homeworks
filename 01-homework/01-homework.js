let potato = 15.678;
let tomato = 123.965;
let carrot = 90.2345;

let max = Math.max(potato, tomato, carrot);
console.log(max);

let min = Math.min(potato, tomato, carrot);
console.log(min);

let summary = potato+tomato+carrot;
console.log(summary);

let sum_minus_coins = Math.floor(potato)+Math.floor(tomato)+Math.floor(carrot);
console.log(sum_minus_coins);

let sumround100 = Math.round(summary / 100)*100;
console.log(sumround100);

let boolean = Math.floor(summary);
if (summary % 2 === 0) {
    boolean = true;
} else {
    boolean = false;
};
console.log(boolean);

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

let advanced =  `Максимальна ціна: ${max}
Мінімальна ціна: ${min}
Вартість всіх товарів: ${summary}
Вартість товарів без копійок: ${sum_minus_coins}
Сума товарів, округлена до сотень: ${sumround100}
Парне чи не парне число сума всіх товарів: ${boolean}
Решта з 500 грн: ${change}
Середнє значення цін, округлене до другого знаку після коми: ${average}
Випадкова знижка: ${discount}
Сума до оплати зі знижкою: ${change}
Чистий прибуток при оплаті зі знижкою: ${income}`;
console.log(advanced);
