// Напиши скрипт который подсчитывает общую сумму зарплат работников
// количество работников хрвниться  переменной employes
// Зарплата каждого работника это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary и вывести в консоль
// const minSalary = 500;
// const maxSalary = 5000;
// const employes = 7;
// let totalSalary = 0;

// for (let i = 0; i <= employes; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

//     totalSalary += salary;
// }

// console.log('общая зарплата:' , totalSalary);


// Напиши скрипт который подсчитывает сумму всех четных чисел
// которые входят в диапазон переменных man....max


const min = 2;
const max = 100;
let summa = 0;

for (let i = min; i <= max; i += 1) {
    if (i % 2 === 0) {
    summa += i;
}
    console.log(i);

}

 console.log('summa:', summa);
