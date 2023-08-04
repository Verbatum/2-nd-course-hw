let a = 0;
while (a < 2) {
   console.log ("Привет")
    a++;
}

let b = 1;
while (b <= 5) {  
console.log(b);
b++;
}

let c = 7;
while (c <= 22) {  
console.log(c);
c++;
}

const salary = {
    "200": "Коля",
	"300": "Вася",
	"400": "Петя",
};
for (let key in salary) {
    console.log(salary[key], '— зарплата', key, 'долларов');
}

let n = 1000;
let num = 0;
while (n >= 50) {
    num++;
    n /= 2;
    alert(n);
    alert(num);
}

for (let friday = 4; friday <= 31; friday++) {
    if (friday === 4 || friday === 11 || friday === 18 || friday === 25) {
        console.log(`Сегодня пятница, ${friday}-е`, "число. Необходимо подготовить отчет.");
    }
}

//const year = Number (prompt ('Введите год'));
//if (year % 4 === 0) {
//    alert ('Год високосный')     
//} else if (year % 400 !== 0) {
//    alert ('Год не високосный')
//}
//else {
//    alert ('Год не високосный')
//}

//for (let dayFriday = 2; dayFriday <= 31; dayFriday += 7) { 
//	console.log(`Сегодня пятница, ${dayFriday}-е число. Необходимо подготовить отчет.`);
//}