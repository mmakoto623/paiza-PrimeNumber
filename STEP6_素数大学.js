//素数大学
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

  let is_prime = Array(1000001);
  for(let i=2;i<=1000000;i++){
      is_prime[i]=true;
  }
  is_prime[0] = false;
  is_prime[1] = false;

  for(let i=2;i<=1000000;i++){
      if(is_prime[i] === true){
          for(let k=2;(k*i)<=1000000;k++){
              is_prime[k*i] = false;
          }
      }
  }

  let N = parseInt(lines[0]);
  for(let i=1;i<=N;i++) {
      if(is_prime[parseInt(lines[i])] === true){
          console.log("pass");
      } else {
          console.log("failure");
      }
  }
});
