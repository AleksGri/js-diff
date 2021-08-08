// 1)
arr = [];
arr.push('234');
arr.push('345');
arr.push('456');
arr.push('567');
arr.push('222');
arr.push('444');
arr.push('768');

for(let i = 0; i < arr.length; i++) {
  if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
    console.log(arr[i]);
  }  
}


// 2)
const isSimple = function(n) {
  if (n === 0 || n ===1) return false;
  else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
};


const simpleNumber = function (nStart, nFinish) {
  for (let i = nStart; i <= nFinish ; i++) {
    if(isSimple(i)) console.log(i + ' - простое число');
  }
};
  
  simpleNumber(0, 100);


