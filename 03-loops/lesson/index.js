//1
//Написать цикл, который выводит все числа от 1 до 10.  - while do

let counter = 1;

while (counter <= 10) {
  console.log(counter);
  counter += 1;
}
//2
//Написать цикл, который выводит все четные числа от 1 до 100. - do while

counter = 1;
console.log("###2 задание");
do {
  const isEven = counter % 2 === 0;
  if (isEven) {
    console.log(counter);
  }
  counter++;
} while (counter <= 100);

//3
//Написать цикл, который выводит все числа от 100 до 1 (в обратном порядке). for
//
console.log("###3 задание");
for (let counter = 100; counter >= 1; counter--) {
  console.log(counter);
}
//4
//Написать цикл, который выполняется 20 раз, каждую итерацию выводится сообщение на экран - число ${число} - ${чётное / нечётное} , т.е, внутри цикла сперва необходимо определить является ли число чётным или нет - for
console.log("###4 задание");
for (let counter = 0; counter < 20; counter++) {
  const isEven = counter % 2 === 0;
  const numberType = isEven ? "четное" : "нечетное";
  const message = `число ${counter}-${numberType}`;
  console.log(message);
}
//5
//Написать функцию, которая считает сумму всех чисел от 1 до 100.
let res = 0;
for (let counter = 1; counter <= 100; counter++) {
  const sum = res + counter;
  console.log(`${res}+${counter}=${sum}`);
  res += counter;
}
console.log(`Результат равен: ${res}`);

//## **Проект: калькулятор**

/**
 * Для каждой операции калькулятора осуществлять вывод слагаемых, оператора и результата, к примеру: 
`4 + 3 = 7`

`7 + 3 = 10`

1. Реализовать функцию `суммирования` калькулятора 
2. Реализовать функцию `вычитания` калькулятора 
3. Реализовать функцию `умножения` калькулятора
4. Реализовать функцию `деления` калькулятора

Важно реализовать калькулятор таким образом, чтобы результат после выполнения операции сохранялся. К примеру, мы вызвали функцию сумму - `4 + 3`, в результате получили `7` , при следующем вызове этой функции в качестве аргументов мы передаём результат предыдущего вычисления - `7`*/
let calcResult = 0; //создаем хранилище общего результата вычислений калькулятора
//ф-я сумирования - это ф-я суммы 2-х значений
console.log("### Калькулятор");
const result = (number1, number2) => {
  const result = number1 + number2;
  console.log(`${number1}+${number2}=${result}`);
  return result;
};
//вычитания
const minus = (number1, number2) => {
  const result = number1 - number2;
  console.log(`${number1}-${number2}=${result}`);
  return result;
};
//умножения
const multiply = (number1, number2) => {
    const result = number1 * number2;
    console.log(`${number1}*${number2}=${result}`);
    return result;
  };
  //деления
const divide = (number1, number2) => {
    const result = number1 / number2;
    console.log(`${number1}/${number2}=${result}`);
    return result;
  };
calcResult = result(1, 4);
calcResult = result(calcResult, 100);
calcResult = minus(calcResult, 4);
calcResult = minus(calcResult, 50);
calcResult = multiply(calcResult, 2);
calcResult = divide(calcResult, 10);
console.log(calcResult);
