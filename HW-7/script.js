let str = 'Hello, WoRlD!';
str = str.toUpperCase();
console.log(str);

//

function searchStart(array, string) {
    return array.filter(item => item.toLowerCase().startsWith(string.toLowerCase()));
  }

  console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
  console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
  console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

  //

  console.log(Math.floor(32.58884));
  console.log(Math.ceil(32.58884));
  console.log(Math.round(32.58884));

  //

  console.log(Math.max(52, 53, 49, 77, 21, 32));
  console.log(Math.min(52, 53, 49, 77, 21, 32));

  function minMax(...elements) {
    return [Math.min(...elements), Math.max(...elements)];
  }

  console.log(minMax(52, 53, 49, 77, 21, 32));

  //

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  console.log(randomInteger(1, 10));
  
  //

function getRandomArrNumbers(el) {
    
    return Array.from(Array(Math.floor(el/2)), () => Math.floor(Math.random() * el));
}

  console.log(getRandomArrNumbers(7)); // [6, 2, 7]
  console.log(getRandomArrNumbers(12)); // [9, 11, 10, 9, 3, 0]

  //

  function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  console.log(random(7, 15));

  //

  let correctDate = new Date();
  console.log(correctDate);

  //

  let currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + 73);
    
  console.log(currentDate);

  //

    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let myDate = new Date();

    let fullDate = 'Дата: ' + myDate.getDate() + " " + months[myDate.getMonth()] +
    " " + myDate.getFullYear() + " - это " + days[myDate.getDay()] + "\n" +
    'Время: ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();

    console.log(fullDate);