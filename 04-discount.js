// Напиши скрипт суммы покупки со скидкой в зависимости
// от потраченной суммы за все время

//     - общая сумма потраченого totalSpent
//     - сумма текущего платежа paymen
//     - скидка discount

//     - Если потрачено от 100 до 1000 скидка 2 %
//     - Если потрачено от 1000 до 5000 скидка 5%
//     - Если потрачено больше 5000  скидка 10%
//     - Если потрачено меньше 100 скидка 0%

//  в результате вівести сообщение
// "Оформляем заказ на сумму ..... со скидкой....."

let totalSpent = 2000;
let paymen = 900;
let discount = 0;
if (totalSpent < 100) {
    console.log('скидка 0%');
}else if (totalSpent >= 100 && totalSpent < 1000) {
    console.log('скидка 2%');
    discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
     console.log('скидка 5%');
    discount = 0.05;
} else {
     console.log('скидка 10%');
    discount = 0.1;
}

paymen = paymen - paymen * discount;
console.log(`Оформляем заказ на сумму ${paymen} со скидкой ${discount * 100}%`);

totalSpent += paymen;
console.log('Общая сумма потраченого в магазинеж:', totalSpent);
