//paiza予想
//全ての 3 よりも大きな平方数は 2 つの素数の和として表すことができる

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    
  const is_prime=(function(x){
    flg=false;
    if (x === 0 || x === 1) {
        return flg;
    }
    for (let i = 2; i * i <= x; i++) {
        if (x % i === 0) {
            return flg;
        }
    }
    flg=true;
    return flg;
  });

  let ans = Array();
  for (let i = 3; i * i <= 100000000; i += 2) {
    if (!is_prime(i * i - 2)) {
      ans.push(i * i);
    }
  }

  if (ans.length === 0) {
    console.log("paiza's conjecture is correct.");
  } else {
    for (let a of ans) {
      console.log(a);
    }
  }

});

