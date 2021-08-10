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
  
  const result = function() {
    
    let userNumber = prompt('Угадай число от 1 до 100');
    if (userNumber === null) alert('Игра окончена');
    else if (!isNumber(userNumber)) {
      alert('Введи число!');
      result();
    }
    else {
      userNumber = +userNumber;
      console.log("userNumber: " + userNumber);
    
      if (userNumber < secretNumber) {
      alert('Загаданное число больше. Попробуй еще раз');
      result();
      }
      else if (userNumber > secretNumber) {
      alert('Загаданное число меньше. Попробуй еще раз');
      result();
      }
      else if (userNumber === secretNumber){
      alert('Поздравляю, Вы угадали!!!');
      }
    }
  };
  result();
};

game();

