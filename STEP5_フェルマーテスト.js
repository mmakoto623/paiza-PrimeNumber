//STEP5:フェルマーテスト
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
  
  let flg = true; //true:素数 false:素数でない
  let a = 2;
  if(N%a === 0) {
      flg = false;
  } else {
      let fermat = 1;
      for(let i=0;i<(N-1);i++){
        //1. fermat に a を掛ける。
        //2. fermat に 「fermat を N で割った余り」 を代入する。
        //１から２を（N-1)回繰り返す
        fermat *= a;
        fermat = fermat%N;
      }
      if(fermat === 1){
          flg = true;
      }else{
          flg = false;
      }
  }
  
  if(flg === true){
      console.log("YES");
  } else {
      console.log("NO");
  }
});
