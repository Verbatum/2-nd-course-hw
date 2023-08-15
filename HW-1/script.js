function seasons() {
    let monthNumber = prompt('Введите номер месяца');

    if (monthNumber == 12 || monthNumber == 1 || monthNumber == 2){
        return alert('Зима');
    } else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5){
        return alert('Весна');
    } else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8){
        return alert('Лето');
    } else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11){
        return alert('Осень');
    } else if (monthNumber > 12 || isNaN(monthNumber) || monthNumber <= 0 ){
        return alert('Нет такого месяца');
    }
};

function wordGame() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    alert(fruits = fruits.sort(() => Math.random() - 0.5));

    let userUnswer1 = prompt('Какое слово было первым?');
    let userUnswer2 = prompt('Какое слово было последним?');

    if (userUnswer1.toLowerCase() === fruits[0].toLowerCase() && userUnswer2.toLowerCase() === fruits[6].toLowerCase()) {
        alert('Поздравляю, ты угадал оба слова')
    } else if (userUnswer1.toLowerCase() === fruits[0].toLowerCase() || userUnswer2.toLowerCase() === fruits[6].toLowerCase()){
        alert('Вы были близки к победе')
    } else {
        alert('Неверно')
    }
}