//ゴールドバッハ予想
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

  let is_prime = Array(N+1);
  for(let i=2;i<=N;i++){
      is_prime[i]=true;
  }
  is_prime[0] = false;
  is_prime[1] = false;

  for(let i=2;i<=N;i++){
      if(is_prime[i] === true){
          for(let k=2;(k*i)<=N;k++){
              is_prime[k*i] = false;
          }
      }
  }
  
  maxseki=0;
  a=0;
  b=0;
  for(let i=2;i<=N;i++){
      if(is_prime[i] === true){
        let tmp = N-i;
        if(is_prime[tmp] === true){
            if(maxseki<i*tmp){
                maxseki=i*tmp;
                a=i;
                b=tmp;
            }
        }
      }
  }
  
  console.log(a);
  console.log(b);
  
});
