const fs = require('fs');
const readline = require('readline');
console.log("Day4");

async function partOne() {
    const inputStream = fs.createReadStream('day4.input');
    const rl = readline.createInterface({
        input: inputStream,
        crlfDelay: Infinity
    });

    // Day4  - Part One Loop
    var total = 0;
    for await (const line of rl) {

        var inputArray = line.split(',');
        var leftArray = inputArray[0].split('-');
        var rightArray = inputArray[1].split('-');

        /*
        
        a - b , c - d 
        
        a < c, b >=d 
        a > c, b <= d
        a = c, b= d or b < d or d < b
        
        */

        if ((parseInt(leftArray[0]) < parseInt(rightArray[0]) && parseInt(leftArray[1]) >= parseInt(rightArray[1])) ||
            (parseInt(leftArray[0]) > parseInt(rightArray[0]) && parseInt(leftArray[1]) <= parseInt(rightArray[1])) ||
            (parseInt(leftArray[0]) == parseInt(rightArray[0]) && parseInt(leftArray[1]) <= parseInt(rightArray[1])) ||
            (parseInt(leftArray[0]) == parseInt(rightArray[0]) && parseInt(leftArray[1]) >= parseInt(rightArray[1]))

        ) {

            console.log(line + ' - overlaps');
            total++;
        }
        else {
            console.log(line);
        }

        inputArray = [];
    }
    console.log("PartOne Total=" + total);

}


async function partTwo() {
    const inputStream = fs.createReadStream('day4.input');
    const rl = readline.createInterface({
        input: inputStream,
        crlfDelay: Infinity
    });

    // Day4  - Part One Loop
    var total = 0;
    for await (const line of rl) {

        var inputArray = line.split(',');
        var leftArray = inputArray[0].split('-');
        var rightArray = inputArray[1].split('-');

        /*
    
        a - b , c - d 
        a < c, b < c 
        a > c , d < a
       
        */

        if (
            (parseInt(leftArray[0]) < parseInt(rightArray[0]) && parseInt(leftArray[1]) < parseInt(rightArray[0])) ||
            (parseInt(leftArray[0]) > parseInt(rightArray[0]) && parseInt(rightArray[1]) < parseInt(leftArray[0]))) {
            console.log(line + ' - No overlaps');
            total++;
        }
        else {

            console.log(line);
        }

        inputArray = [];
    }
    console.log("PartTwo NonOverlaps total=" + total);
    
    var overlaps = 1000 - parseInt(total);
    console.log("PartTwo Overlaps total=" + overlaps);
}

partOne();
partTwo();