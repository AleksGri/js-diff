/*
1) Создать массив week и записать в него дни недели в виде строк

·        Вывести на экран все дни недели

·        Каждый из них с новой строчки

·        Выходные дни - курсивом

·        Текущий день - жирным шрифтом(использовать объект даты)




2) Запушить проект в репозиторий для усложненных заданий на Github
*/

'use strict';

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const print = document.getElementById("print");
let date = new Date();
let day = date.getDay();
console.log(day);


for (let i = 0; i < week.length; i++) {
  if (week[i] === 'Saturday' || week[i] === 'Sunday')
  {print.innerHTML += "<p><i>" + week[i] + "</i></p>";}
  else {
    print.innerHTML += "<p>" + week[i] + "</p>";
  }

}

const tagP = document.getElementsByTagName("p");
tagP.style.fontWeight = 'bold';

// const tagP = document.getElementsByTagName("p");

// for (let i = 0; i < week.length; i++) {
//   if (week[i] === day) tagP.style.fontWeight = 'bold';
// }






// week.forEach(e => {
//   print.innerHTML = "<p>" + e + "</p>";
// });