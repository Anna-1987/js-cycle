// напиши скрипт выбора отеля по количеству звезд

const stars = 8;
let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 30;
// } else if (stars === 4) {
//     price = 50;
// } else if (stars === 5) {
//     price = 60;
// } else {
//     console.log ('have not stars')
// }

//-------- вместо if --->witch
// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 40;
//         break;
//     case 4:
//         price = 50;
//         break;
//     case 5:
//         price = 60;
//         break;
    
//     default:
//         console.log('have not stars');
// }

// console.log(price);



// ----напишите скрипт выбора опции доставки товара
// option: 1-самовызовб, 2- курьер, 3-почта.

const option = 0;
let message = '';


switch (option) {
    case 0:
        message = "Вы сможите забрать товар завтра с 12:00 в нашем офисе";
        break;
     case 1:
        message = "Курьер доставить товар завтра с 9:00 до 18:00";
        break;
     case 2:
        message = "Посылка будет отправлена сегодня";
        break;
    default:
        message = 'Вам перезвонит менеджер';
}

console.log(message);