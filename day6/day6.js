const fs = require('fs');
const readline = require('readline');
console.log("Day6");

function day6() {

fs.readFile('day6.input', (err, input) => {
    var text = input.toString();
   if (err) throw err;
      //console.log(input.toString());
      findMarkerOne(text.split(""));
      findMarkerTwo(text.split(""));
})

}

function findMarkerOne(charArray){
    var marker = false;
    var markerPosition=0;
    for(let i=0; i<charArray.length;i++ ){
     
        console.log(charArray[i] + '-' + charArray[i+1] + '-'+ charArray[i+2] + '-' + charArray[i+3]);
        if( ( charArray[i] != charArray[i+1] && charArray[i] != charArray [i+2] && charArray[i] != charArray[i+3]) 
            && ( charArray[i+1] != charArray[i+2] && charArray[i+1] != charArray [i+3])
            && ( charArray[i+2] != charArray[i+3] ) ) {
                
                marker = true; 
                markerPosition = i+4;
                break;
            }      
    }
    
    console.log('Marker Identified - '+ marker);
    console.log('Characters Processed = ' + markerPosition);
}

function findMarkerTwo(charArray){
    var marker = 'true';
    var markerPosition=0;
    for(let i=0; i<charArray.length;i++ ){
        
        console.log(charArray[i] + '-' + charArray[i+1] + '-'+ charArray[i+2] + '-' + charArray[i+3] + '-' + charArray[i+4] + '-' + charArray[i+5]+ '-' + charArray[i+6]+ '-' + charArray[i+7]+ '-' + charArray[i+8]+ '-' + charArray[i+9]+ '-' + charArray[i+10]+ '-' + charArray[i+11]+ '-' + charArray[i+12]+ '-' + charArray[i+13]);
        console.log("marker=" + marker);
        for( let j=i; j< (i+14) ; j++){
            for(let k=(j+1); k<(i+14);k++){
                if(charArray[j] == charArray[k]){
                    marker='false';
                }
            }
        }
        console.log("markers=" + marker);
        if(marker === 'true'){
            markerPosition = i+14;
            break;
        }
        marker='true';
    }
    
    console.log('Marker Identified - '+ marker);
    console.log('Characters Processed = ' + markerPosition);
}

day6();