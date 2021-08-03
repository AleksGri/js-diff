// let num = 266219;
// let mult = 1;

// while (num > 0) {
//   let digit = num % 10;
//   mult *= digit;
//   num = Math.floor(num / 10);
// }

// console.log(mult);

// let power = mult ** 3;
// console.log(power.toString().substring(0,2));

//lesson03
// 1)
const lang = prompt('Укажите язык: "ru" или "en"', 'ru');
if (lang === 'ru') console.log(
  'Понедельник, вторик, среда, четверг, пятница, суббота, воскресенье');
else if (lang === 'en') console.log(
  'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday');
else {
  console.log('Wrong input');
}


switch (lang) {
  case ('ru') : console.log(
  'Понедельник, вторик, среда, четверг, пятница, суббота, воскресенье');
  break;
  case ('en') : console.log(
  'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday');
  break;
  default: console.log('Wrong input');
}

const days = [['ru', 'en'],
  ['Понедельник, вторик, среда, четверг, пятница, суббота, воскресенье',
  'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday']
];
console.log(days[1][days[0].indexOf(lang)]);


// 2)
const namePerson = prompt('Укажите имя').toLowerCase();

console.log(
  (namePerson === 'артем') ? 'директор' :
  (namePerson === 'максим') ? 'преподаватель' :
                                                'студент');





