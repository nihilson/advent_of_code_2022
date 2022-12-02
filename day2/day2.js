const fs = require('fs');
const readline = require('readline');
console.log("Day2");

async function readInputByLine() {
    const inputStream = fs.createReadStream('day2.input');
    const rl = readline.createInterface({
        input: inputStream,
        crlfDelay: Infinity
    });

    var totalScorePartOne = 0;
    var totalScorePartTwo = 0;

    for await (const line of rl) {

        totalScorePartOne = totalScorePartOne + findScorePartOne(line);
        totalScorePartTwo = totalScorePartTwo + findScorePartTwo(line);
    }

    console.log('total score =' + totalScorePartOne);
    console.log('total score =' + totalScorePartTwo);

}

/*
A - Rock - X - 1
B - Paper - Y - 2
C - Scissor - Z - 3
*/
function findScorePartOne(str) {

    var score = 0;

    switch (str) {

        case 'A X':
            score = 1 + 3;
            break;

        case 'A Y':

            score = 2 + 6;

            break;

        case 'A Z':

            score = 3 + 0;

            break;

        case 'B X':

            score = 1 + 0;

            break;
        case 'B Y':
            score = 2 + 3;

            break;

        case 'B Z':
            score = 3 + 6;

            break;

        case 'C X':
            score = 1 + 6;
            break;

        case 'C Y':
            score = 2 + 0;
            break;

        case 'C Z':

            score = 3 + 3;
            break;
    }
    console.log(str + ' - ' + score);
    return score;
}



/*
A - Rock - 1
B - Paper - 2
C - Scissor - 3

X - Loose
Y - Draw
Z - Win

*/

function findScorePartTwo(str) {

    var score = 0;

    switch (str) {

        case 'A X':
            // Rock + Lose (0) / Scissor(3)
            score = 3 + 0;
            break;

        case 'A Y':
            // Rock + Draw (3) / Rock (1)

            score = 1 + 3;
            break;

        case 'A Z':
            // Rock + Win (6) /Paper (2)
            score = 2 + 6;
            break;
        case 'B X':
            // Paper + Lose (0) / Rock (1)
            score = 1 + 0;
            break;
        case 'B Y':
            // Paper + Draw (3) / Paper (2)
            score = 2 + 3;
          
            break;

        case 'B Z':
            // Paper + Win (6) /Scissor (3)
            score = 3 + 6;
            break;
        case 'C X':
            // Scissor + Lose (0) / Paper (2)
            score = 2 + 0;
            break;
        case 'C Y':
            // Scissor + Draw (3) / Scissor (3)
            score = 3 + 3;
            break;
        case 'C Z':
             // Scissor + Win (6) /  Rock (1)
            score = 1 + 6;
            break;
    }
    console.log(str + ' - ' + score);
    return score;
}

readInputByLine();
