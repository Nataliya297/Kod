//1 задание
const name = "Nataliya";
const name2 = "Nikita";

if (name === "Nataliya") {
  console.log(`Приветствую, ${name}`);
} else {
  console.log("Вы еще не зарегистрированы, Зарегистрироваться?");
}

if (name2 === "Nataliya") {
  console.log(`Приветствую, ${name2}`);
} else {
  console.log("Вы еще не зарегистрированы, Зарегистрироваться?");
}

// 2 задание
const health = 105;

if(health ===100){
  console.log("Вы здоровы");
}else if (health < 100 && health >=75) { // от 75-99
  console.log("Не мешало бы подлечиться");
} else if (health < 75 && health >=50) { //50-74
  console.log("Желательно подлечиться");
}else if(health < 50 && health > 0){ //1-49
  console.log("Срочно надо подлечиться, уровень здоровья слишком низкий");
}else if(health === 0){
  console.log("Вы мертвы");
}else{
  console.log(`Ваш уровень здоровья: ${health}`);
}

//3 задание

function checkUser(userName){
  if (userName === "Nataliya") {
    console.log(`Приветствую, ${userName}`);
  } else {
    console.log("Вы еще не зарегистрированы, Зарегистрироваться?");
  }
}

checkUser('Nataliya');
checkUser('Sergey');

//4 задание
/**
 * Функция проверяет уровень здоровья персонажа и выводит на экран
 * @param {*} health -текущее здоровье персонажа
 */
const checkHealth = (health)=>{
  if(health ===100){
    console.log("Вы здоровы");
  }else if (health < 100 && health >=75) { // от 75-99
    console.log("Не мешало бы подлечиться");
  } else if (health < 75 && health >=50) { //50-74
    console.log("Желательно подлечиться");
  }else if(health < 50 && health > 0){ //1-49
    console.log("Срочно надо подлечиться, уровень здоровья слишком низкий");
  }else if(health === 0){
    console.log("Вы мертвы");
  }else{
    console.log(`Ваш уровень здоровья: ${health}`);
  }
}
checkHealth(150);
checkHealth(100);
checkHealth(75);
checkHealth(50);
checkHealth(0);