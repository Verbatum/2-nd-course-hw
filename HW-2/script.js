let a = 20;
alert(a);

let year = 2007;
alert(year);

let creatorName = `Brendan Eich`;
alert(creatorName);

let x = 10;
let y=2;
alert(x/y);
alert(x+y);
alert(x-y);
alert(x*y);

let number = 2;
let result = 2**5;
alert(result);

let A = 9;
let B = 2;
alert(A%B);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt('Сколько вам лет?');
let Result = age;
alert(Result);

let user = {
	name: 'Alex',
	age: 38,
    isAdmin: true,
    cityOfResidence: 'Moscow'
};
delete user.cityOfResidence;
user.age = 37;

let info = prompt("Какую информацию хотите узнать о пользователе?", "name");

let userName = prompt('Введите как вас зовут?');
alert(`Привет, ${userName}!`);
