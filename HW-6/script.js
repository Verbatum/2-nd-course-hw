let numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 10) break;
    console.log(numbers[i]);
    
}

//

let number = [1, 5, 4, 10, 0, 3];
let a = number.indexOf(4);

console.log(a);

//

let num = [1, 3, 5, 10, 20];
num = num.join(' '); //num = num.join('');

console.log(num);

//

let arr = [];
for (let i = 0; i < 3; i++)
{
    arr[i] = [];
    for (let j = 0; j <3; j++)
    {
        arr[i][j] =  1;
    }
}
console.log(arr);

//

let n = [1, 1, 1];
n.push(2, 2, 2);

console.log(n);

//

let massive = [9, 8, 7, 'a', 6, 5];
massive.sort();
massive.splice(5,1);

console.log(massive);

//

const secret = [9, 8, 7, 6, 5];
let userAnswer = prompt('Угадай число');

if (userAnswer > 9 || userAnswer < 5 || isNaN(userAnswer)) {
    alert('Не угадал')
}  else {
    alert('Угадал')
}

//

let letters = 'abcdef';

letters = letters.split("").reverse().join("");

console.log(letters);

//

let double = [[1, 2, 3,],[4, 5, 6]];

console.log(double.flat());

//

let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arry.length-1; i++) arry[i] = arry[i] + arry[i+1];
    
console.log(arry);

//

const squared = [10, 20, 5, 100]; 
let res = squared.map(item => item ** 2)
console.log(res);

//

const getLength = source => source.map(str => str.length);

console.log(getLength(['яблоко', '', 'не', 'длинное предложение', 'а']));

//

function invert(array) {
    for (let i = 0; i < array.length; i++) array[i] = -array[i] || 0;
    return array ;
 }
 console.log(invert([10, 15, 8, 9, 7, 0]))