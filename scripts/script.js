/*
Необходимо выполнить в отдельном js файле, подключенному к отдельной HTML странице
1) Создать массив week и записать в него дни недели в виде строк
·        Вывести на экран все дни недели
·        Каждый из них с новой строчки
·        Выходные дни - курсивом
·        Текущий день - жирным шрифтом(использовать объект даты)
2) Запушить проект в репозиторий для усложненных заданий на Github
*/

'use strict';


const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday', 
  'Thursday',
  'Friday',
  'Saturday',
];

const date = new Date;

week.forEach(function(day){
  const el = document.createElement('p');
  if (day === 'Saturday' || day === 'Sunday') el.style.fontStyle = 'Italic';
  if (day === week[date.getDay()]) el.style.fontWeight = 'Bold';
  el.textContent = day;
  document.body.append(el);
});




