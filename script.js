let password = 'пароль';
let validation = prompt ('Введите пароль');
validation = password ? 'Пароль введен верно' : 'Пароль введен неправильно';
alert (validation);

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
        console.log('Зима')
        break;
    case '2':
        console.log('Зима')
        break;
    case '3':
        console.log('Весна')
        break;
    case '4':
        console.log('Весна')
        break;
    case '5':
        console.log('Весна')
        break;
    case '6':
        console.log('Лето')
        break;
    case '7':
        console.log('Лето')
        break;
    case '8':
        console.log('Лето')
        break;
    case '9':
        console.log('Осень')
        break;
    case '10':
        console.log('Осень')
        break;
    case '11':
        console.log('Осень')
        break;
    case '12':
        console.log('Зима')
        break;

    default:
        console.log('Такого месяца не существует')
        break;
}