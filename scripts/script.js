let num = 266219;
let mult = 1;

while (num > 0) {
  let digit = num % 10;
  mult *= digit;
  num = Math.floor(num / 10);
}

console.log(mult);

let power = mult ** 3;
console.log(power.toString().substring(0,2));
