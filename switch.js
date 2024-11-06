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
switch (stars) {
    case 1:
        price = 20;
        break;
    case 2:
        price = 30;
        break;
    case 3:
        price = 40;
        break;
    case 4:
        price = 50;
        break;
    case 5:
        price = 60;
        break;
    
    default:
        console.log('have not stars');
}

console.log(price);
