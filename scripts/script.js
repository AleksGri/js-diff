/*
Что должна делать программа:

— спрашивает пользователя: "Угадай число от 1 до 100".
— если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
— если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
— если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
— если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".

—  если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение  "Поздравляю, Вы угадали!!!".
*/

'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function() {
  const secretNumber = Math.floor(Math.random() * 100);
  console.log('secretNumber is ' + secretNumber);
  let attempt = 10;
  
  const result = function() {
    
    let userNumber = prompt('Угадай число от 1 до 100');
    if (userNumber === null) alert('Игра окончена');
    else if (!isNumber(userNumber)) {
      alert('Введи число!');
      result();
    }
    else if (attempt > 1) {
      attempt--;
      userNumber = +userNumber;
    
      if (userNumber < secretNumber) {
      alert('Загаданное число больше. Осталось попыток: ' + attempt + '. Попробуй еще раз');
      result();
      }
      else if (userNumber > secretNumber) {
        alert('Загаданное число меньше. Осталось попыток: ' + attempt + '. Попробуй еще раз');
        result();
      }
      else if (userNumber === secretNumber){
        const winMessage = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
        if (winMessage) game();
        else {
          alert('Игра окончена');
        }
      }
    }
    else {
      const noMoreAttempt = confirm("Попытки закончились, хотите сыграть еще?");
      if (noMoreAttempt) game();
      else {
        alert('Игра окончена');
      }
    }
  };
  result();
};

game();

