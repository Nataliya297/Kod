//1
//Создать цикл, который выводит числа от 1 до 10 включительно.
console.log("DZ-1");
for (let count = 1; count <= 10; count++) {
  console.log(count);
}

//2
//Написать цикл, который выводит только четные числа от 1 до 20.

console.log("DZ-2");
for (let counter = 1; counter <= 20; counter++) {
  const isEven = counter % 2 === 0;
  if (isEven) {
    console.log(counter);
  }
}

//3
//Реализовать цикл, который выводит таблицу умножения для числа 5.
console.log("DZ-3");
let five = 5;
for (let count = 1; count <= 10; count++) {
  const multiply = five * count;
  console.log(`${five}*${count}=${multiply}`);
}
//4
//Написать функцию, которая считает сумму всех чисел от 1 до 100.
console.log("DZ-4");
let res1 = 0;
for (counter = 1; counter <= 100; counter++) {
  const sum = res1 + counter;
  console.log(`${res1}+${counter}=${sum}`);
  res1 += counter;
}
console.log(`Итого: ${res1}`);

console.log('Test');
