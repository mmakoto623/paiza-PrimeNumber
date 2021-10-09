//STEP7_素因数分解

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

  let is_prime = Array(100001);
  for(let i=2;i<=100000;i++){
      is_prime[i]=true;
  }
  is_prime[0] = false;
  is_prime[1] = false;

  for(let i=2;i<=100000;i++){
      if(is_prime[i] === true){
          for(let k=2;(k*i)<=100000;k++){
              is_prime[k*i] = false;
          }
      }
  }
  
  ans = Array();
  while(N>=2){
    for(let i=2;i<=N;i++){
        if(is_prime[i]===true){
            if(N%i===0){
                ans.push(i);
                N=N/i;
            }
        }
    }
  }
  
  ans.sort(function (a, b) {return a - b});
  for(let i of ans){
      console.log(i);
  }
});


