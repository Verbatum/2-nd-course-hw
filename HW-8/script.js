const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(people.sort((a, b) => a.age > b.age ? 1 : -1));

 //
 
 function isPositive(n) {
        return n > 0;
    }
    function isMale(user) {
        return user.gender === 'male' ;
    }
    function filter(arr, ruleFunction) {
        const output = [];

        for (let i = 0; i < arr.length; i++) {
            if (ruleFunction(arr[i])) {
            output.push(arr [i]);
          }
        }
          return output;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    const human = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(human, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

    //

let currentDate = setInterval(() => console.log(new Date()), 3000);

setTimeout(() => { clearInterval(currentDate); console.log('30 секунд прошло'); }, 30000);

    //

function delayForSecond(callback) {
   setTimeout(() => {
        console.log('Привет, Глеб!');
    }, 1000)
  callback();
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => {sayHi('Глеб')});
