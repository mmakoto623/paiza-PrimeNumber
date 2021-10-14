//STEP10 最小公倍数
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

  const gcd=(function(x, y) {
      return (x % y)? gcd(y, x % y): y;
  });
  const lcm=(function(x, y) {
      return x / gcd(x, y) * y;
  });

  let N = parseInt(lines[0]);
  a=parseInt(lines[1]);

  for(let i=2;i<=N;i++) {
      let b=parseInt(lines[i]);
      a=lcm(a,b);
  }
  console.log(a);
  
});
