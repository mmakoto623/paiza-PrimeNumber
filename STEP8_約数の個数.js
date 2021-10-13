//STEP8 約数の個数

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
  let N=parseInt(lines[0]);
  divisors=Array(N+1);
  for(let i=0;i<=N;i++){
      divisors[i]=0;
  }

  for(let i = 2; i * i <= N; i++) {
    while (N % i === 0) {
      divisors[i]++;
      N /= i;
    }
  }

  if (N != 1) {
    divisors[N]++;
  }
  
  let ans=1;
  for(let i of divisors) {
    ans *= (i + 1);
  }

  console.log(ans);
});
