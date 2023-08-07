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

    if (c % 2 == 0) {
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
    } else if(confirm === 0 || confirm <= 12) {
        return 'Привет, друг!'
    }
    else if(confirm >12) {
        return ('Добро пожаловать!')
    }
}
alert (age());

//

function ageVerification() {
    let e = prompt('Введите первое число');
    let f = prompt('Введите второе число');
    
    if (isFinite(e) || isFinite(f)) {
        return e * f;
    } else{
        return 'Одно или два значения не являются числом'
    }
    
}
alert (ageVerification());

//

function number() {
    let g = prompt ('Введите число');

    if (isFinite(g)) {
        return `${g} в кубе равняется ${g ** 3}`;
    } else {
        return 'Переданный параметр не является числом';
    }
    
}
alert (number());

//

const circle1 = {
    radius: 5,
    getArea: function() {
        return 3.14 * (circle1.radius ** 2)
    },
    getPerimeter: function() {
        return 2 * 3.14 * circle1.radius
    }
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());

const circle2 = {
    radius: 7,
    getArea: function() {
        return 3.14 * (circle2.radius ** 2)
    },
    getPerimeter: function() {
        return 2 * 3.14 * circle2.radius
    }
}
console.log(circle2.getArea());
console.log(circle2.getPerimeter());