function lowerValue(a, b) {
    if (a<=b) {
        return a;
    } else {
        return b;
    }
};

console.log(lowerValue(8, 4))

//

function parity() {
    let c = prompt('Введите число');

    if (c % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
};

console.log (parity());

//

function exponentiation() {
    let d = prompt('Введите число');

    return d**2;
}
    
console.log(exponentiation());

function exponentiation() {
    let d = prompt('Введите число');

    return d**2;
}
    
alert(exponentiation());

//

function age(){
    let confirm = prompt('Введите ваш возраст');

    if (confirm < 0) {
        return 'Вы ввели неправильное значение';
    } else if (!confirm.trim()) {
        return 'Вы не ввели данные'
    } else if(confirm <= 12) {
        return 'Привет, друг!'
    } else if(confirm > 12) {
        return ('Добро пожаловать!')
    } 
}

alert (age());

//

function ageVerification() {
    let e = prompt('Введите первое число');
    let f = prompt('Введите второе число');
    
    if (isNaN(e) || isNaN(f)) {
        return 'Одно или два значения не являются числом'
    } else if (!e.trim() || !f.trim()) {
        return 'Вы не ввели данные'
    }
    else{
        return e * f;
    } 
    
}
alert (ageVerification());

//

function number() {
    let g = prompt ('Введите число');

    if (isNaN(g)) {
        return 'Переданный параметр не является числом';
    } else if (!g.trim()) {
        return 'Вы не ввели данные'
    } else {
        return `${g} в кубе равняется ${g ** 3}`;    
    }
}
alert (number());

//

const circle1 = {
    radius: 5,
    getArea: function() {
        return Math.PI * (this.radius ** 2)
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius
    }
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());

const circle2 = {
    radius: 7,
    getArea: function() {
        return Math.PI * (this.radius ** 2)
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius
    }
}
console.log(circle2.getArea());
console.log(circle2.getPerimeter());