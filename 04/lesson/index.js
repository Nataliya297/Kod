//1
//Создайте объект car с свойствами brand, model и year, и методом start, который выводит в консоль сообщение "Автомобиль {brand} {model} {year} года выпуска заведен".
const car = {
  brand: "BMW",
  model: "XЗ",
  year: 2023,

  //   start: () => {
  //     console.log(`Автомобиль ${car.brand} ${car.model} ${car.year} года выпуска`);
  //   },
  getThis() {
    console.log(this);
  },
  start() {
    console.log(
      `Автомобиль ${this.brand} ${this.model} ${this.year} года выпуска ${this.getThis}`
    );
  },
};
//вызываем метод у объекта
car.start();
//2
//Создайте объект user с свойствами name, age и методом greet, который выводит в консоль сообщение "Привет, меня зовут {name}, мне {age} лет".
const user = {
  name: "Игорь",
  age: "42",

  greet: () => {
    console.log(`Привет, меня зовут ${user.name}, мне ${user.age} лет`);
  },
};
user.greet();
//3
//Создайте объект calculator с методами add, minus, multiply и divide, которые принимают два числа в качестве аргументов и выполняют соответствующую математическую операцию, возвращая результат.
const calculator = {
  result: 0,
  //ф-я сумирования - это ф-я суммы 2-х значений
  sum(number1, number2) {
    const result = number1 + number2;
    console.log(`${number1}+${number2}=${result}`);
    this.result = result;
  },
  //вычитания
  minus(number1, number2) {
    const result = number1 - number2;
    console.log(`${number1}-${number2}=${result}`);
    this.result = result;
  },
  //умножения
  multiply(number1, number2) {
    const result = number1 * number2;
    console.log(`${number1}*${number2}=${result}`);
    this.result = result;
  },
  //деления
  divide(number1, number2) {
    const result = number1 / number2;
    console.log(`${number1}/${number2}=${result}`);
    this.result = result;
  },
};

calculator.sum(1, 4);
console.log(calculator);

calculator.sum(calculator.result, 4);
calculator.minus(calculator.result, 2);
calculator.multiply(calculator.result, 3);
calculator.divide(calculator.result, 2);
console.log(calculator);

//4
//Создайте объект book с свойствами title, author и year, и методом getInfo, который выводит в консоль информацию о книге в формате "Название: {title}, Автор: {author}, Год издания: {year}".

const book = {
  title: "Денискины рассказы",
  author: "В.Драгунский",
  year: "2021",

  getInfo() {
    console.log(
      `Название: ${this.title}, Автор: ${this.author}, Год издания: ${this.year}`
    );
  },
};
book.getInfo();

//МАССИВЫ
//1
//Создайте массив с числами (не менее 10) и выведите его длину
const numbers = [1,2,3,4,5,6,7,8,9,10];

const createArray = (number) => {
    let array = [];
    for (let counter = 0; counter < number; counter++){
        array.push(counter);
    }
    return array
}
console.log(`массив ${numbers}  и его длина : ${numbers.length}`);

console.log(createArray(30));

//2
//Создайте два новых массива на основании предыдущего, содержащий только чётные и нечётные числа соответственно
let copiedArrayOne = [];
let copiedArrayTwo = [];

copiedArrayOne = numbers.filter(n => {
    return n %2 !== 0
});
console.log(copiedArrayOne);


copiedArrayTwo = numbers.filter(n => {
    return n %2 === 0
});
console.log(copiedArrayTwo);
//3
//Создайте массив содержащий объекты user, со свойствами age , number, city

 let user2 = ['age', 'number', 'city'];
console.log(user2);
//4 
//Добавьте новый элемент в конец массива и выведите обновленный массив.
user2.push(11);
console.log(user2);
//5
//Удалите первый элемент из массива и выведите обновленный массив.
user2.shift();
console.log(user2);
//6 
//Используя метод join(), объедините все элементы массива в одну строку, разделенную запятой.
console.log(user2.join(", "));
//7
//Проверьте, содержит ли массив определенный элемент, и выведите соответствующее сообщение.

console.log(user2.includes('jane'));// false
console.log(user2.includes('number'));//true
console.log(user2.includes('city'));//true
