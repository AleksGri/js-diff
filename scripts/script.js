function cutter (newString) {
  if (typeof newString !== 'string') return 'WRONG INPUT';
  
  while (newString[0] === ' ') {
    console.log(newString[0]);
    newString = newString.slice(1);
  }

  while (newString.slice(-1) === ' ') {
    newString = newString.slice(0, -1);
  }

  if (newString.length > 30) {
    newString = newString.slice(0, 30) + '...';

  }
  
  return newString;
}

console.log(cutter(6));
console.log("_________________________________________")
console.log(cutter('   паровозик, который смог   '));
console.log(cutter('   123456789012345678901234567890|1234567890  '));







