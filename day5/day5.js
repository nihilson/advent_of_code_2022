const fs = require('fs');
const readline = require('readline');
console.log("Day4");

var stack0 = []; // empty stack to fill up the 0th array position
var stack1 = ['G','T','R','W'] ;
var stack2 = [ 'G','C','H','P','M','S','V','W'];
var stack3 = ['C','L','T','S','G','M'];
var stack4 = ['J','H','D','M','W','R','F'];
var stack5 = ['P','Q','L','H','S','W','F','J'];
var stack6 = ['P','J','D','N','F','M','S'];
var stack7 = ['Z','B','D','F','G','C','S','J'];
var stack8 = ['R','T','B'];
var stack9 = ['H','N','W','L','C'];

var crateStacks = [stack0, stack1, stack2,stack3,stack4,stack5,stack6,stack7,stack8,stack9];
console.log("Crate Stacks in the beginning");
console.log(crateStacks);
async function readInput() {
    const inputStream = fs.createReadStream('day5.input');
    const rl = readline.createInterface({
        input: inputStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
    
        var array = line.split(" ");
        //moveCratesPartOne(parseInt(array[1]), parseInt(array[3]),parseInt(array[5]));
        moveCratesPartTwo(parseInt(array[1]), parseInt(array[3]),parseInt(array[5]));
        
    }
    console.log("Crate Stacks after re-arrangement");
    console.log(crateStacks);
    console.log("Top Crates = "+ crateStacks[1].pop()+crateStacks[2].pop()+crateStacks[3].pop()+crateStacks[4].pop()+crateStacks[5].pop()+crateStacks[6].pop()+crateStacks[7].pop()+crateStacks[8].pop()+crateStacks[9].pop());
}

//For Part One puzzle
function moveCratesPartOne(x, y, z){
    for(let i=0;i<x;i++){
        crateStacks[z].push(crateStacks[y].pop());
    }
    
}
// For Part Two puzzle
function moveCratesPartTwo(x, y, z){
    
    if(x==1){
        crateStacks[z].push(crateStacks[y].pop());
    }else{
    
    var crates = [];
    for(let i=0;i<x;i++){
        crates[i] = crateStacks[y].pop();
    }
    for(let j=(x-1);j>=0;j--){
        crateStacks[z].push(crates[j]);
    }
    }
}
readInput();