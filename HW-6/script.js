let numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) break;
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
let userAnswer = secret.includes(Number(prompt('Угадай число'))) ? 'Угадал' : 'Не угадал';

alert(userAnswer);

//

let letters = 'abcdef';

letters = letters.split("").reverse().join("");

console.log(letters);

//

let double = [[1, 2, 3,],[4, 5, 6]];

console.log(double.flat());

//

let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arry.length-1; i++) {
    console.log(arry[i] + arry[i+1]);
}

//

const squared = [10, 20, 5, 100]; 
let res = squared.map(item => item ** 2)
console.log(res);

//

const getLength = source => source.map(str => str.length);

console.log(getLength(['яблоко', '', 'не', 'длинное предложение', 'а']));

//

function filterPositive(arr) {
   let res = arr.filter(item => item < 0);
   return res;
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));


/* let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];

function getArray(firstArray, secondArray) {
    return firstArray.filter((i) => !secondArray.includes(i)); 
}
console.log(getArray(array1, array2));


const indString = (arr, str) => {
    return arr.indexOf(str) < 0 ? 'Не найдено' : arr.indexOf(str);
}

console.log (indString(['ckj', 'словос'], 'слово'))


function getSum(c) {
    return c.reduce((sum, item) => sum + item, 0) // 0 - здесь задает значение для sum
}
let c = [5, 8, 6, 0]
console.log(getSum(c))


function getString(arr) {
    return arr.join(', ')
}
console.log(getString([9, 8, 7, 6, 5])) */
