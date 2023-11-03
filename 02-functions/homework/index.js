//1
const isOpen = "Дверь";

if (isOpen === "Дверь открыта") {
  console.log(isOpen);
} else {
  console.log("Дверь закрыта");
}

//2

const discount0 = "5%";
const discount = "10%";
const discount2 = "15%";
const discount3 = "20%";
const discount4 = "25%";
const discount5 = "40%";

const statusUser = "1";

if (statusUser === "bronze") {
  console.log(
    `Приветствуем вас! Ваш статус: ${statusUser} и ваша скидка составляет: ${discount}`
  );
} else if (statusUser === "silver") {
  console.log(
    `Приветствуем вас! Ваш статус: ${statusUser} и ваша скидка составляет: ${discount2}`
  );
} else if (statusUser === "gold") {
  console.log(
    `Приветствуем вас! Ваш статус: ${statusUser} и ваша скидка составляет: ${discount3}`
  );
} else {
  console.log(`У вас нет статуса!`);
}

//3

const statusUser2 = "2";

switch (statusUser2) {
  case "bronze":
    console.log(
      `Приветствуем вас! Ваш статус: ${statusUser2} и ваша скидка составляет: ${discount}`
    );
    break;
  case "silver":
    console.log(
      `Приветствуем вас! Ваш статус: ${statusUser2} и ваша скидка составляет: ${discount2}`
    );
    break;
  case "gold":
    console.log(
      `Приветствуем вас! Ваш статус: ${statusUser2} и ваша скидка составляет: ${discount3}`
    );
    break;
  case "platinum":
    console.log(
      `Приветствуем вас! Ваш статус: ${statusUser2} и ваша скидка составляет: ${discount4}`
    );
    break;
  case "palladium":
    console.log(
      `Приветствуем вас! Ваш статус: ${statusUser2} и ваша скидка составляет: ${discount5}`
    );
    break;
  default:
    console.log(
      `Приветствуем вас! Ваш статус: iron и ваша скидка составляет: ${discount0}`
    );
    break;
}

//Функции
//1
let nameUser = function (name) {
  console.log(`Имя пользователя: ${name}`);
};
nameUser("Nataliya");
nameUser("Ivan");

//2
ageUser(15);

function ageUser(age) {
  if (age >= 18) {
    console.log("true");
  } else {
    console.log("false");
  }
}

let ageUser2 = function (age) {
  if (age >= 18) {
    console.log("Ура, вы совершеннолетний");
  } else {
    console.log("Тебе бы подрасти, дружок");
  }
};
ageUser2(15);

//3

const statusName = (statusUser3) => {
  if (statusUser3 === "bronze") {
    console.log(
      `Приветствуем вас! Ваш статус: ${statusUser3} и ваша скидка составляет: ${discount}`
    );
  } else if (statusUser3 === "silver") {
    console.log(
      `Приветствуем вас! Ваш статус: ${statusUser3} и ваша скидка составляет: ${discount2}`
    );
  } else if (statusUser3 === "gold") {
    console.log(
      `Приветствуем вас! Ваш статус: ${statusUser3} и ваша скидка составляет: ${discount3}`
    );
  } else if (statusUser3 === "platinum") {
    console.log(
      `Приветствуем вас! Ваш статус: ${statusUser3} и ваша скидка составляет: ${discount4}`
    );
  } else if (statusUser3 === "palladium") {
    console.log(
      `Приветствуем вас! Ваш статус: ${statusUser3} и ваша скидка составляет: ${discount5}`
    );
  } else {
    console.log (`Приветствуем вас! Ваш статус: iron и ваша скидка составляет: ${discount0}`);
  }
};
statusName("bronze");
statusName("silver");
statusName("gold");
statusName("platinum");
statusName("palladium");
statusName("");
