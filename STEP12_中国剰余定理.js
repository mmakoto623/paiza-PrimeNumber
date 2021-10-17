//中国剰余定理
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
  let line = lines[0].split(" ");
  m1 = parseInt(line[0]);
  m2 = parseInt(line[1]);
  b1 = parseInt(line[2]);
  b2 = parseInt(line[3]);
  
  for(let i=0;i<=m2;i++) {
      let Z= m1*i + b1;
      if( Z%m2 == b2){
          console.log(Z);
          break;
      }
  }
  
});
