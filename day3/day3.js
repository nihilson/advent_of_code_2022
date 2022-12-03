const fs = require('fs');
const readline = require('readline');
console.log("Day3");

async function partOne() {
    const inputStream = fs.createReadStream('day3.input');
    const rl = readline.createInterface({
        input: inputStream,
        crlfDelay: Infinity
    });
    
    // Day3  - Part One Loop
    var totalPriorityPartOne=0;
    for await (const line of rl) {
       console.log(line);
       var input1 = line.substr(0,line.length/2);
       var input2 = line.substr(line.length/2,line.length);
       var matchingLettersArray = findmatchingLetters(input1,input2);
       console.log(matchingLettersArray);
       totalPriorityPartOne = totalPriorityPartOne + findPriority(matchingLettersArray[0]);
    }
    console.log("totalPriorityPartOne="+totalPriorityPartOne)  ;
    return totalPriorityPartOne;
}

async function partTwo(){
     // Day3  - Part Two  Loop
    const inputStream = fs.createReadStream('day3.input');
    const rl = readline.createInterface({
        input: inputStream,
        crlfDelay: Infinity
    });
    
    var totalPriorityPartTwo =0;
    var groupArray =[];
    var counter = 0
    for await (const line of rl) {
        counter++; 
        groupArray.push(line);
        
        if(counter == 3){
           var matchingLettersArray = findmatchingLettersForGroup(groupArray);
           console.log(matchingLettersArray);
           totalPriorityPartTwo = totalPriorityPartTwo + findPriority(matchingLettersArray[0]);
           counter=0;
           groupArray=[];
        }
        
    }
    
    console.log('totalPriorityPartTwo=' +totalPriorityPartTwo);
    return totalPriorityPartTwo;
}
function findmatchingLettersForGroup(group){
    const array =[];
    console.log(group);
    
    var s1 = group[0];
    var s2 = group[1];
    var s3 = group[2];
    
    for( const c1 of s1){
        for (const c2 of s2){
            for(const c3 of s3){
                if(c1 == c2 && c2 == c3)
                    array.push(c1);
                    // break after we find a match ? 
            }
        }
    }
    return array; 
}
function findmatchingLetters(input1, input2){
    const array =[];
    
    console.log('input1 = '+input1 );
    console.log('input2 = '+input2);
    
    var s1 = input1.split('');
    var s2 = input2.split('');
    
    for( const c1 of s1){
        for (const c2 of s2){
            if(c1 == c2)
                array.push(c1);
        }
    }
    return array; 
}

function findPriority(input){
    
    console.log('input =' + input)
    
    const priorityArray = ["0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    console.log('priorityScore='+priorityArray.indexOf(input));
    return priorityArray.indexOf(input);
}

const partOneAnswer = partOne();
const partTwoAnswer = partTwo();