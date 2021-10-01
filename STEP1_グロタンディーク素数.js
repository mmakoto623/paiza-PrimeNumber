//STEP1　グロタンディーク素数 57が素数かどうか判定する

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
  let N=57;
  let flg = true;//true 素数　false 素数でない
  if((N%2 === 0 && N > 2) || (N === 1)){
      flg = false;
  }
  for(let i= 3;i<N;i+=2){
      if(N%i ===0 ){
          flg = false;
          break;
      }
  }
  
  if(flg === true) {
      console.log("YES");
  } else {
      console.log("NO");
  }
  
});

