const fs = require('fs');
const readline = require('readline');
console.log("Day1");

async function readInputByLine(){
    const inputStream = fs.createReadStream('day1.input');
    const rl = readline.createInterface({
        input: inputStream,
        crlfDelay: Infinity
    });
    
    var total = 0;
    var totalsArray =[];
    
    for await (const line of rl) {
        if(line == ''){
            console.log('total = ' + total);
            totalsArray.push(total);
            total = 0;
        }
        else{
            console.log(`${line}`);
            total = total + parseInt(line);
        }
  }
  totalsArray.sort(compareNumbers);
  console.log('TopTotalCalories = '+ totalsArray[0]);
  console.log('Top3TotaCalories = ' + parseInt(totalsArray[0] + totalsArray[1] + totalsArray[2]));
}
function compareNumbers(a, b) {
  return b - a;
}
readInputByLine();
