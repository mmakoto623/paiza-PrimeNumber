//大きな数字を素数かどうか判定する
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
  let N = parseInt(lines[0]);

  if([2,3,5,7].indexOf(N) !== -1){
      console.log("YES");
      return;
  }

  let flg = false;//true 素数　false 素数でない
  
  //７より大きな素数は６で割ると余りが1か５である
  let amari = N%6;
  if((amari === 1 || amari === 5) && N>7) {
      flg = true;
      for(let i= 7;i<Math.sqrt(N)+1;i+=2){
          if(N%i === 0) {
              flg = false;
              break;
          }
      }
  }
  
  if(flg === true) {
      console.log("YES");
  } else {
      console.log("NO");
  }
    
});
