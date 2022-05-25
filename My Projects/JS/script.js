"use strict";

/*
const makeSomeFunc = () => {
    let x = 0;

    const someFunc = () => {
        x = x + 10;
        return x;
    };
    x = x + 10;

    return someFunc;
};

const f = makeSomeFunc();

console.log ( f ())*/

/*let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
    alert( i );
    i++;
}*/

/*let i = 3;
while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
    alert( i );
    i--;
}*/

/*let i = 0;
do {
    alert( i );
    i++;
} while (i < 3);*/

// for (let i = 0; i <= 15; i += 5) { // выведет 0, затем 1, затем 2
//     alert(i);
// }

/*const putNumber = prompt('Введите число')*/

// const key = prompt('Введите слово','')
// switch (key) {
//     case 'run away':
//     case 'run':
//         alert ('убегать');
//         alert ('бежать');
//         break;
//     default:
//         alert ('нет слова');
//         break;
// }

// Задача 1
/*const name = prompt('Введите имя');
alert(`Привет, ${name}!`);*/

// Задача 2
/*const thisYear = 2021;

let birthYear = prompt('Введите год рождения');

alert ('Ваш возраст ' + (thisYear - birthYear) + ' лет');*/

// Задача 3
/*let sideLength = prompt('Введите длину стороны квадрата');

alert('Периметр квадрата = ' + (sideLength * 4));*/

// Задача 4
/*
let radiusCircle = prompt('Введите радиус окружности');

alert('Площадь окружности = ' + (Math.PI * (radiusCircle ** 2)));*/

// Задача 5
/*let distance = prompt('Введите расстояние между городами, в км');

let clock = prompt('Введите за сколько часов хотите добраться, в часах');

alert('Скорость движения должна быть = ' + (distance/clock) + ' км/час');*/

// Задача 6
/*const well = 0.86;

let dollars = prompt('Введите сумму в долларах');

alert('Сумма в евро = ' + (dollars * well) + ' евро');*/

// Задача 7
/*const _1gbt = 1024;

let putMemory = prompt('Введите размер флешки в ГБ');

alert('На флешке помешается ' + Math.floor((putMemory * _1gbt)/820) + ' файлов размером 820 Мб');*/

// Задача 8
/*let putMoney = prompt('Введите сумму денег');

let putPriceChocolate = prompt('Введите цену одной шоколадки');

let numberBuy = Math.floor(putMoney/putPriceChocolate);

let sumBuy = putPriceChocolate * numberBuy;

alert('Вы можете купить ' + numberBuy + ' шоколадок');
alert('У Вас останется ' + (putMoney - sumBuy) + ' долларов');*/

// Задача 9
/*let putNumber = prompt('Введите трехзначное число');
let fistNumber = putNumber%10;
let secondNumber = Math.floor(putNumber%100/10);
let thirdNumber = Math.floor(putNumber/100);

alert('' + fistNumber + secondNumber + thirdNumber);*/

// Задача 10
/*let putNumber = prompt('Введите целое число');

let x = putNumber%2;

(x > 0) && alert('Нечетное');

(x === 0) && alert('Четное');*/
// DZ-2

/*// Задача 1
const age = +prompt('Введите свой возраст');

if (age <= 2) {
    alert('Ребенок');
} else if  (age >= 12 && age < 18) {
    alert('Подросток');
} else if (age >= 18 && age < 60) {
    alert('Взрослый');
} else if (age >= 60 ) {
    alert('Пенсионер');
} else {
        alert( "Некорректный возраст" );
}*/
// Задача 2
/*const number = +prompt('Введите число от 0 до 9');

switch (number) {
    case 0 :
        alert( ")" );
        break;
    case 1 :
        alert( "!" );
        break;
    case 2 :
        alert( "@" );
        break;
    case 3 :
        alert( "#" );
        break;
    case 4 :
        alert( "$" );
        break;
    case 5 :
        alert( "%" );
        break;
    case 6 :
        alert( "^" );
        break;
    case 7 :
        alert( "&" );
        break;
    case 8 :
        alert( "*" );
        break;
    case 9 :
        alert( "(" );
        break;
    default:
        alert( 'Вы ввели не число от 0 до 9' );
}*/
// Задача 3
/*const number = +prompt('Введите трехзначное число');

const firstNumber = Math.floor(number/100);
const secondNumber = Math.floor(number%100/10);
const thirdNumber = number%10;
if ((number - 999) <= 0 && (number - 100) >= 0) {
firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber ? (
    alert('Есть повторяющиеся цифры')
) : (alert('Нет повторяющихся цифр'));
} else {
    alert('Вы ввели не трехзначное число')
}*/
/*// Задача 4
const year = +prompt('Введите год');
if (year%400 === 0 || year%4 === 0 && year%100 !== 0) {
    alert('Високосный')
} else {
    alert('Не високосный')
}*/
// Задача 5
/*
const number = +prompt('Введите пятизначное число');

const firstNumber = Math.floor(number/10000);
const secondNumber = Math.floor(number%10000/1000);
const thirdNumber = Math.floor((number%10000)%1000/100);
const fourthNumber = Math.floor(((number%10000)%1000)%100/10);
const fifthNumber= number%10;

if ((number - 99999) <= 0 && (number - 10000) >= 0) {
    firstNumber === fifthNumber && secondNumber === fourthNumber ? (
        alert('Палиндром')
    ) : (alert('Не палиндром'));
} else {
    alert('Вы ввели не пятизначное число')
}
*/

// Задача 6
/*function func (){const moneyUSD = +prompt('Введите сумму USD');
let e = document.getElementById("choice");
let strUser = e.value;



const eur = 0.86;
const uan = 26.39;
const azn = 1.7;

strUser === 'EUR' ? (alert(moneyUSD * eur)) : ((strUser === 'UAN' ? (alert(moneyUSD * uan)) : (strUser === 'AZN' ? (alert(moneyUSD * azn)) : (alert('Error')))))
}*/

// Задача 7
/*const discount3 = 0.97;
const discount5 = 0.95;
const discount7 = 0.93;
const purchaseAmount = +prompt('Введите сумму покупки');

    if (purchaseAmount >= 200 && purchaseAmount < 300) {
        alert(`К оплате со скидкой ` + purchaseAmount * discount3 + ` руб`)
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
        alert(`К оплате со скидкой ` + purchaseAmount * discount5 + ` руб`)
    } else if (purchaseAmount >= 500) {
        alert(`К оплате со скидкой ` + purchaseAmount * discount7 + ` руб`)
    } else {
        alert(`Сумма к оплате ` + purchaseAmount + ` руб`)
    }*/

// Задача 8
/*
const circleLength = +prompt('Введите длину окружности');
const squarePerimeter = +prompt('Введите периметр квадрата');
(circleLength/Math.PI) <= (squarePerimeter/4) ? (
    alert('Окружность поместиться в квадрат')
) : (alert('Окружность НЕ поместиться в квадрат'))
*/

// Задача 9

/*
const circleLength = +prompt('Введите длину окружности');
const squarePerimeter = +prompt('Введите периметр квадрата');
(circleLength/Math.PI) <= (squarePerimeter/4) ? (
    alert('Окружность поместиться в квадрат')
) : (alert('Окружность НЕ поместиться в квадрат'))
*/

// DZ-3
// Задача 1
/*const a = +prompt('Put first number');
const b = +prompt('Put second number');
let sum = 0;
for (let index = a; index <= b; index++) {
    sum += index;
}
alert(sum);*/
// Задача 2
/*let numb1 = prompt('Введите первое число');
let numb2 = prompt('Введите второе число');
let numb3;


calc(numb1, numb2)
alert('НОД чисел ' + numb1 + ' и ' + numb2 + ' будет: ' + numb3)

function calc(a, b) {
    let c;
    while (a != b) {
        if (a > b) {
            a = a - b;

        } else
        if (a < b) {
            c = a;
            a = b;
            b = c;
        }

    }
    return numb3 = a


}*/
/*
const bind = (func, context, param) => {
    return (...args) => {
        func.apply(context, [param, ...args])
    };
};

const f1 = (a, b, c) => {}
const f2 = (b, c) => {
    f1(2, b , c)
}
const f3 = (c) => {
    f2(3, c)
}
*/

/*
const sum = (a, b) => a + b;
sum(1, 2)*/

/*
sum(1)(2)

/!*
const sum = (a) => {
    return (b) => a + b;
}

sum(1)(2)

const sum = (a) => {
    return (b) => a + b;
}*!/
*/
// При помощи цикла for выведите чётные числа от 2 до 10.
/*for (let i = 2; i <= 10; ++i) {
    if (i%2 === 1) continue;
    alert (i)
}*/

/*
for (let i = 0; ; ) {
    alert( `number ${i}!` );
}
*/

/*
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}
*/

/*
let num;

do {
    num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);*/
// объекты можно связать через __proto__
/*
    const animal = {
        name: '',
        run: () => {
            console.log('Я бегу')
        }
    }
    const tiger = {
            __proto__: animal
    }

    tiger.run();


    const Animal = function (name) {
        this.run = () => {}
    }

console.log(Animal()) // undefined
console.log(new Animal()) // {
// /!*
// name: '',
//     run: () => {
//     console.log('Я бегу')
// }
// *!/*/

/*const Animal = function (name) {
    this.name = name;
    this.run = () => {}
}

const animal = new Animal('Барсик');

const Tiger = function () {
    this.__proto__ = animal; // не работает, если нет animal

}

const tiger = new Tiger('Барсик');*/

/*
const Animal = function (name = 'Лев') {
    this.name = name;
    this.run = () => {
        console.log('Бегу')
    }
}
const animal = new Animal();

const Tiger = function () {}

Tiger.prototype = animal;

const tiger = new Tiger ();

tiger.run();*/

/*
const Animal = function (name = 'Лев') {
    //this.__proto = Animal.prototype = {}
    this.name = name;
}

Animal.prototype = {
    run: function () {
        console.log('Бегу');
    }
};

const animal = new Animal();
animal.run()

const Tiger = function () {}
    Tiger.prototype = Animal.prototype;

    const tiger = new Tiger();
    tiger.run();*/

/*const Auto = function (speed, power) {
    this.maxSpeed = speed;
    this.power = power;
}

Auto.prototype = {
    run: function () {
        this.run = function () {
            console.log('Я еду со скоростью ' + this.maxSpeed);
        };
    },
    getPower: function () {
        this.getPower = function () {
            console.log('Моя грузоподъемность ' + this.power);
        }
    },
};

const AutoCrane = function (speed, power, craneLength) {
    this.maxSpeed = speed;
    this.power = power;
    this.craneLength = craneLength;
    this.getCraneLength = function () {
        console.log(this.craneLength);
    }
}
AutoCrane.prototype = Object.create(Auto.prototype);
    AutoCrane.prototype.getCraneLength = function () {
        console.log(this.craneLength);
    }

const bmwCrane = AutoCrane (150, 5000, 10);

bmwCrane.getPower()*/



/*
const auto1 = new Auto(100, 500);
const auto2 = new Auto(90, 10000);

auto1.run()
auto1.getPower()

auto2.run()
auto2.getPower()
*/

/*
auto1
{
    maxSpeed: 100,
        power: 500,
    this.run = function () {
        console.log('Я еду со скоростью ' = this.maxSpeed)
    }
    this.getPower = function () {
        console.log('Моя грузоподьемность ' + this.power)
    }
}*/
/*
auto2
{
    maxSpeed: 90,
        power: 1000,
    this.run = function () {
        console.log('Я еду со скоростью ' = this.maxSpeed)
    }
    this.getPower = function () {
        console.log('Моя грузоподьемность ' + this.power)
    }
}*/
/*
class Auto {
    constructor(maxSpeed, power) {
        this.maxSpeed = maxSpeed;
        this.power = power;
    }
    run = function () {
        console.log('Я еду со скоростью ' = this.maxSpeed)

    }
    getPower = function () {
        console.log('Моя грузоподьемность ' + this.power)
    }
}*/
/*

let next = true;
do {
    if (i===6)


    next = confirm ('Продолжить?');
} while (next);
*/

//DZ-4
// Задача 3

/*
let n1 = 1;
let n2 = 4;
let n3 = 9;

const func = function () {
    let str1 = '' + n1 + n2 + n3;
    return str1
}
console.log(func())

const func1 = function () {
    let str = `${n1}${n2}${n3}`;
    return  str;
}
console.log(func1())*/

//=================== Объекты
/*
 const user1 = {
     login: 'Test login',
     password: '****',
 };

 const user2 = new Object();

 user1.age = 25;*/

/*const a = +prompt('Введите длину прямоугольника')
const b = +prompt('Введите ширину прямоугольника')

function () {

}*/

// задача 7

/*
function time (h = '00', m = '00', s = '00') {
    let h1 = 0, m1 = m, s1 = s;
    if (h > 9) {
        h1 = h;
    } else if ((h >= 0) && (h <= 9)){
        h1 = '0' + h;
    } else {
        h1 = h;
    }
    console.log(`${h1}:${m1}:${s1}`);
}
const a = +prompt('Часы');
time(a)*/

// Задача 8

//DZ 5
// Задача 1
/*function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

alert( pow(2, 3) ); // 8*/
/*
// Задача 2
function nod (a, b) {
    if (b === 0)
        return a;
    if (a > b)
        return nod (b, a % b);
    else
        return nod (a, b % a);
}

console.log(nod(21, 6));*/

//Задача 3

/*
const number = "5284572";
let result = 0;

for (let i = 0; i < number.length; i++) {
    result = number[i] >= result ? +number[i] : result;
}
console.log(result)

function getMaxNum(number) {
    if (number < 10) return number
        return Math.max(number % 10, getMaxNum(parseInt(number / 10)));
}
console.log(getMaxNum(number));
*/
//Задача 6
/*
function Fibonacci(n) {
    if (n === 1) return 1;
    if (n === 0) return 0;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(4))*/

//DZ-6
/*
const auto = {
    manufacturer: 'BMW',
    model: 'M5',
    issueYear: 2021,
    averageSpeed: 250,
    showInfo: function() {
        alert(`Производитель: ${this.manufacturer},\n Модель: ${this.model}
    Год выпуска ${this.issueYear}
    Средняя скорость ${this.averageSpeed} км/ч`)
},

}
auto.showInfo();
*/

/*
/!*
/!*Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
- Функция для вывода на экран информации об автомобиле;
- Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.*!/

const car = {
    manufacturer: 'Mitsubishi',
    model: 'Lancer',
    year: 2007,
    averageSpeed: 100,
    showInfo() {
        console.log(`Производитель: ${this.manufacturer},\n модель: ${this.model},\n Cредняя скорость: ${this.averageSpeed} `);
    },
    getTravelTime(s = 0, restInterval = 1) {
        if (isNaN(s) || isNaN(restInterval)) {
            return 'Error';
        }
        let travelTime = s / this.averageSpeed;
        let numberOfStops = Math.floor(travelTime / 4);
        travelTime += numberOfStops * restInterval;
        return travelTime;
    },
}

car.showInfo();
console.log(car.getTravelTime(500));    // 7.25
console.log(car.getTravelTime(800));    // 12

/!*Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
- Функция сложения 2-х объектов-дробей;
- Функция вычитания 2-х объектов-дробей;
- Функция умножения 2-х объектов-дробей;
- Функция деления 2-х объектов-дробей;
- Функция сокращения объекта-дроби.*!/

const fraction1 = {
    numerator : 1,
    denominator : 5,
}

const showFraction = () => console.log(`${fraction1.numerator}/${fraction1.denominator}`);
console.log(showFraction(fraction1));    // 1/5               
function makeFraction(numerator, denominator) {
    return {
        numerator,
        denominator,
    };
}

const fraction2 = makeFraction(2, 9);
console.log(fraction2);  // {numerator: 2, denominator: 9}


// общий знаменатель:
const commonDenominator = (fraction1 = {}, fraction2 = {}) => {
    return fraction1.denominator * fraction2.denominator;
}


// сложение дробей
const sumOfFractions = (fraction1 = {}, fraction2 = {}) => {

    return `${fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator} / ${commonDenominator(fraction1, fraction2)}`;
}

console.log(sumOfFractions(fraction1, fraction2));      // 19/45
console.log(sumOfFractions({numerator: 3, denominator: 5}, {numerator: 4, denominator: 5}));    // 35/25


// вычитание дробей
const subtractionOfFractions = (fraction1 = {}, fraction2 = {}) => {

    return `${fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator} / ${commonDenominator(fraction1, fraction2)}`;
}

console.log(subtractionOfFractions(fraction1, fraction2));      // -1/45
console.log(subtractionOfFractions({numerator: 7, denominator: 9}, {numerator: 2, denominator: 8}));    // 38/72

// умножение дробей
const multiplicationOfFrations = (fraction1 = {}, fraction2 = {}) => {
    return `${fraction1.numerator * fraction2.numerator}/${fraction1.denominator * fraction2.denominator}`;
}

console.log(multiplicationOfFrations(fraction1, fraction2));    // 2/45

// деление дробей
const divisionOfFrations = (fraction1 = {}, fraction2 = {}) => {
    return `${fraction1.numerator * fraction2.denominator}/${fraction1.denominator * fraction2.numerator}`;
}

console.log(divisionOfFrations(fraction1, fraction2));  // 9/10

// сокращение дробей
const fractionReduction = (fraction = {}, coefficient) => {
    return `${fraction.numerator / coefficient}/${fraction.denominator / coefficient}`
}

const fraction = makeFraction(3, 9);
console.log(fractionReduction(fraction, 3));    // 1/3

/!*Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:
- Функция вывода времени на экран;
- Функция изменения времени на переданное количество секунд;
- Функция изменения времени на переданное количество минут;
- Функция изменения времени на переданное количество часов.
Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».*!/

const time = {
    h: 2,
    m: 23,
    s: 40,
    showTime() {
        console.log(`${this.h}:${this.m}:${this.s}`);
    },
    changeSeconds(sec) {
        let hours = sec / 3600;
        this.h += Math.floor(hours);
        let minutes = (sec - Math.floor(hours) * 3600) / 60;
        this.m += Math.floor(minutes);
        this.s = sec - (Math.floor(hours) * 3600) - (Math.floor(minutes) * 60);

        if (this.s >= 60) {
            this.s %= 60;
            this.m += Math.floor(this.s / 60);
        }
        if (this.m >= 60) {
            this.m %= 60;
            this.h += Math.floor(this.m / 60);
        }

        return time;
    },
    changeMinutes(min) {
        let hours = min / 60;
        this.h += Math.floor(hours);
        this.m += min - (Math.floor(hours) * 60);

        if (this.m >= 60) {
            this.m %= 60;
            this.h += Math.floor(hours / 60);
        }

        return time;
    },
    changeHours(hour) {
        this.h = this.h + hour;

        return time;
    },
}

console.log(time);   // {h: 2, m: 23, s: 40, showTime: ƒ, changeSeconds: ƒ, …}

time.showTime();     // 2:23:40
console.log(time.changeSeconds(4500));       // {h: 3, m: 38, s: 0, showTime: ƒ, changeSeconds: ƒ, …}
console.log(time.changeSeconds(8050));       // {h: 5, m: 52, s: 10, showTime: ƒ, changeSeconds: ƒ, …}
console.log(time.changeSeconds(108050));     // {h: 35, m: 52, s: 50, showTime: ƒ, changeSeconds: ƒ, …}

console.log(time);       // {h: 35, m: 52, s: 50, showTime: ƒ, changeSeconds: ƒ, …}

console.log(time.changeMinutes(85));         // {h: 36, m: 17, s: 50, showTime: ƒ, changeSeconds: ƒ, …}
console.log(time.changeMinutes(12));         // {h: 36, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}

console.log(time);       // {h: 36, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}

console.log(time.changeHours(3));             // {h: 39, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}
console.log(time.changeHours(4));             // {h: 43, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}

console.log(time);       // {h: 43, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}


const makeTime = (h = 0, m = 0, s = 0) => {
    (h < 9 && h >= 0) ? (h = `0${h}`) : h ;

    (m >= 0 && m < 9) ? (m = `${m}`) : (m >= 0 && m < 60) ? m : console.log('error.Enter 0 < m < 60');

    (s >= 0 && s < 9) ? (s = `${s}`) : (s >= 0 && s < 60) ? s : console.log('error.Enter 0 < s < 60');

    return {
        h,
        m,
        s,
    };
}

const time1 = makeTime(6, 12, 50);
const time3 = makeTime(3, 47, 62);  // error. Enter 0 < s < 60
const time4 = makeTime(18, 38, 22);

console.log(time1);    // {h: "06", m: 12, s: 50}
console.log(time4);    // {h: 18, m: 38, s: 22}


const showTime = (time = {}) => {
    return console.log(`${time.h}:${time.m}:${time.s}`);

}
showTime(time1);     // 06:12:50
showTime(time4);     // 18:38:22
*/



function Button ({style: = "colored"}) {
    const styles = ['blue', 'transparent'];
    let style = '';
    if style ===

}
