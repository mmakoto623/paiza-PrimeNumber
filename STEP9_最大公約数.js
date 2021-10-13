//STEP9 最大公約数

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
  A=Array(N);
  for(let i=0;i<N;i++) {
      A[i]=parseInt(lines[i+1]);
  }
  
  let ans = A[0];
  for (let i = 1; i < N; i++) {
    //ユークリッドの互除法で最大公約数を求める
    ans = (function(n1, n2){
      let a = n1;
      let b = n2;
      while (b !==0){
        let m = a % b;
        a = b; 
        b = m;
      }
      return a;
    }(ans, A[i])); 
  }
  
  console.log(ans);
});

