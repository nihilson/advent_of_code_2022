const fs = require('fs');

function loadInput(path) {
    const data =  fs.readFileSync(path, "utf-8");
    return data.split("\n");
}

function day8PartOne() {
    
    var data = loadInput('day8.input');
    
    var tableArray = [];
    var tableArrayPartTwo = [];
    for(const line of data ){
        
        var rowArray = line.split('');
        
        tableArray.push(rowArray);
    
    }
    console.log(tableArray);
    console.log(tableArrayPartTwo);
    
    for(let row = 1;row<tableArray.length-1;row++){
        
        for(let col=1; col < tableArray[row].length-1;col++)
        {
            //console.log('Tree at '+ row + ',' + col + ' is ' + tableArray[row][col] );
            var visibility=[];
            
            //checkVisibility(tableArray,row,col,'right');
             visibility.push(checkVisibility(tableArray,row,col,'left'));
             visibility.push(checkVisibility(tableArray,row,col,'right'));
             visibility.push(checkVisibility(tableArray,row,col,'top'));
             visibility.push(checkVisibility(tableArray,row,col,'down'));
            
            //console.log(visibility);
            
            if(visibility.indexOf('V') != -1){
                //console.log('visible');
                tableArray[row][col]=tableArray[row][col]+'V';
            }
            else{
                //console.log('invisible');
                tableArray[row][col]=tableArray[row][col]+'I';
                }
            
            //console.log(visibility);
        }
    }
    console.log(tableArray);
    
    updateEdge(tableArray);
    
    console.log(tableArray);
    
    var visibleTrees=0;
    var totalTrees= tableArray.length * tableArray[0].length ;
    
    for(let i=0;i<tableArray.length;i++){
        for(let j=0;j<tableArray[0].length;j++){
            
            if(tableArray[i][j].endsWith('V')){
                visibleTrees++;
            }
        
        }
        
    }
    
    console.log('Total Trees =' + totalTrees);
    console.log('VisibleTrees='+visibleTrees);
    
    
   
}

function day8PartTwo(){
    var data = loadInput('day8.input');
    
    var tableArrayPartTwo = [];
    for(const line of data ){
        
        var rowArray = line.split('');
                tableArrayPartTwo.push(rowArray);
    }
   
    
    var scores = [];
    
    console.log('Rows=' + tableArrayPartTwo.length);
    console.log('Cols=' + tableArrayPartTwo[0].length);
    
    for(let row = 0;row<tableArrayPartTwo.length;row++){
        
        for(let col=0; col < tableArrayPartTwo[row].length;col++)
        {
            //console.log('Tree at '+ row + ',' + col + ' is ' + tableArray[row][col] );
            var score=[];
            
            //checkVisibility(tableArray,row,col,'right');
             score.push(getScenicScore(tableArrayPartTwo,row,col,'left'));
             score.push(getScenicScore(tableArrayPartTwo,row,col,'right'));
             score.push(getScenicScore(tableArrayPartTwo,row,col,'top'));
             score.push(getScenicScore(tableArrayPartTwo,row,col,'down'));
            
            console.log('Scenic Score for each tree [ ' +  score + "] = " + parseInt(score[0]) * parseInt(score[1]) * parseInt(score[2]) * parseInt(score[3]) ) ;
            
            scores.push(parseInt(score[0]) * parseInt(score[1]) * parseInt(score[2]) * parseInt(score[3]) );
            
           
        }
    }
    scores.sort
     scores.sort((a, b) => a - b);
    //console.log(scores);
    console.log('HighestScore='+scores[scores.length-1]);
}

function checkVisibility(tableArray, row, col, direction ){
    var visibility = 'I';
    
    switch (direction){
        
        case 'left':
            
            for(let i=col-1; i>=0;i--){
                //console.log ('comparing  LEFT tree  at ' + row + ','+ i  + ' whose height is' + parseInt(tableArray[row][i]) + ' with Tree at '+ row + ',' + col + ' is ' + tableArray[row][col]  ) ;
                
                if( parseInt(tableArray[row][i]) < parseInt(tableArray[row][col]) ){
                    visibility='V'
                }else{
                    visibility = 'I';
                    break;
                }
            }
            break;
            
        case 'right':
            
            for(let i=col+1; i<tableArray[row].length;i++){
                //console.log(parseInt(tableArray[i][col]) );
                //console.log ('comparing right with tree at row = ' + row + ' col = '+ i  + 'height is' + parseInt(tableArray[row][i]) ) ;
                if( parseInt(tableArray[row][i]) < parseInt(tableArray[row][col]) ){
                    visibility='V'
                }else{
                    visibility='I'
                    break;
                }
                    
            }
            break;
        case 'top':
            
            for(let i=row-1; i>=0;i--){
                if( parseInt(tableArray[i][col]) < parseInt(tableArray[row][col]) ){
                    visibility='V'
                }else{
                    visibility='I'
                    break;
                }
            }
            break;
        case 'down':
            for(let i=row+1; i<tableArray.length;i++){
                if( parseInt(tableArray[i][col]) < parseInt(tableArray[row][col]) ){
                    visibility='V'
                }else{
                    visibility='I'
                    break;
                }
            }
            break;
    }
    
    //console.log('returning visibility='+visibility);
    return visibility;
}



function getScenicScore(tableArray,row, col,direction){
    var score = 0;
    
    switch (direction){
        
        case 'left':
            
            for(let i=col-1; i>=0;i--){
                
                //console.log( 'comparint tree of height '+ tableArray[row][col] + ' at '+ row + "," + col + ' with LEFT tree at '+ row + "," + i + 'of height'+ tableArray[row][i]  );
                //console.log ('comparing  LEFT tree  at ' + row + ','+ i  + ' whose height is' + parseInt(tableArray[row][i]) + ' with Tree at '+ row + ',' + col + ' is ' + tableArray[row][col]  ) ;
                
                if( parseInt(tableArray[row][i]) <parseInt(tableArray[row][col]) ){
                    score++;
                }else{
                    score++;
                    break;
                }
            }
            break;
            
        case 'right':
            
            for(let i=col+1; i<tableArray[row].length;i++){
                //console.log( 'comparint tree of height '+ tableArray[row][col] + ' at '+ row + "," + col + ' with RIGHT tree at '+ row + "," + i + 'of height'+ tableArray[row][i]  );
                if( parseInt(tableArray[row][i]) < parseInt(tableArray[row][col]) ){
                    score++;
                }else{
                    score++
                    break;
                }
                    
            }
            break;
        case 'top':
            
            for(let i=row-1; i>=0;i--){
               // console.log( 'comparint tree of height '+ tableArray[row][col] + ' at '+ row + "," + col + ' with TOP tree at '+ row + "," + i + 'of height'+ tableArray[i][col]  );
                if( parseInt(tableArray[i][col]) < parseInt(tableArray[row][col]) ){
                    score++;
                }else{
                    score++;
                    break;
                }
            }
            break;
        case 'down':
            for(let i=row+1; i<tableArray.length;i++){
                //console.log( 'comparint tree of height '+ tableArray[row][col] + ' at '+ row + "," + col + ' with DOWN tree at '+ row + "," + i + 'of height'+ tableArray[i][col]  );

                if( parseInt(tableArray[i][col]) < parseInt(tableArray[row][col]) ){
                    score++;
                }else{
                    score++;
                    break;
                }
            }
            break;
    }
    
    //console.log('returning visibility='+visibility);
    return score;
}

function updateEdge(tableArray){
    
    for(let i=0;i<tableArray[0].length;i++){
        tableArray[0][i] = tableArray[0][i]+'V';
        tableArray[tableArray.length-1][i] = tableArray[tableArray.length-1][i]+'V';
    }
    
    for(let i=0;i<tableArray.length;i++){
        tableArray[i][0] = tableArray[i][0]+'V';
        tableArray[i][tableArray[0].length-1] = tableArray[i][tableArray[0].length-1]+'V';
    }
    
}

day8PartOne();
day8PartTwo();