let password = 'пароль';
let validation = prompt ('Введите пароль');
if (validation == password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно')
}

let c = Number(prompt('Введите число'));
(c > 0 && c <10) ? console.log('Верно') : console.log('Неверно');

let d = Number(prompt('Введите число'));
let e = Number(prompt('Введите число'));
(d > 100 || c > 100) ? console.log('Верно') : console.log('Неверно');

let a = '2';
let b = '3';
alert(+a + +b);

let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        console.log('Зима')
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весна')
        break;
    case '6':
    case '7':
    case '8':
        console.log('Лето')
        break;
    case '9':
    case '10':
    case '11':
        console.log('Осень')
        break;

    default:
        console.log('Такого месяца не существует')
        break;
}