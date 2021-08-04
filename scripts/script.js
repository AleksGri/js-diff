
//lesson03
// 1)
const days = [['ru', 'en'],
  ['Понедельник, вторик, среда, четверг, пятница, суббота, воскресенье',
  'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday']
];

const lang = prompt('Укажите язык: "ru" или "en"', 'ru');
if (lang === 'ru') console.log(days[1][0]);
else if (lang === 'en') console.log(days[1][1]);
else {
  console.log('Wrong input');
}


switch (lang) {
  case ('ru') : console.log(days[1][0]);
  break;
  case ('en') : console.log(days[1][1]);
  break;
  default: console.log('Wrong input');
}

console.log(days[1][days[0].indexOf(lang)]);


// 2)
const namePerson = prompt('Укажите имя').toLowerCase();

console.log(
  (namePerson === 'артем') ? 'директор' :
  (namePerson === 'максим') ? 'преподаватель' :
                                                'студент');





