const fs = require('fs');

function loadInput(path) {
    const data =  fs.readFileSync(path, "utf-8");
    return data.split("\n");
}

function day7() {

    const data = loadInput('day7.input');

    console.log('Num of rows in Input DaTA - '+ data.length);

    const { files, dirs } = findDirectorySize(data);

    var sum=0;
    for(const dir of dirs){
        
        if(dir.size<100000){
            sum += dir.size;
        }
    }

    console.log('PartOne ='+ sum);
    
    const totalFileSize = files.size;
    console.log('totalFileSize='+ totalFileSize);

    const sizeRemaining = 70000000 - totalFileSize;
    const sizeRequiredForUpgrade = 30000000 - sizeRemaining;
    
    console.log('SizeRequiredForUpgrade='+sizeRequiredForUpgrade);

    const smallestDir = dirs.find(dir => dir.size >= sizeRequiredForUpgrade);
    console.log('PartTwo = '+smallestDir.size);

}

function findDirectorySize(commands, from = 0, name = "/") {
    
    let directoryContents = {
        size: 0,
        files: [],
        name: name,
    };

    const directories = [];
    let i = from;
    console.log(commands[i]);
    for ( i; i < commands.length; i++) {

        let command = commands[i].split(" ");
        // console.log(command);

        if (command[0] === "$") {
            if (command[1] === "cd") {
                if (command[2] === "..") {
                    // End of directory.. step back 
                    return { files: directoryContents, newI: i, dirs: directories };

                }
                else if (command[2] != "/") {
                    // Moove into a directory.. recursively find DirectorySize
                    console.log(command[1] + " "+ command[2]);
                    let { files, newI, dirs } = findDirectorySize(commands, i + 1, command[2])

                    directories.push(files);
                    directories.push(...dirs);
                    i = newI;

                    if (files) {
                        directoryContents.files.push(files);
                        directoryContents.size += files.size;
                    }
                }
            }
        }
        else if (!isNaN(command[0])) {
            console.log(command[0] + " "+ command[1]);
            directoryContents.size += parseInt(command[0]);
            directoryContents.files.push({
                name: command[1],
                size: parseInt(command[0]),
            });

        }

    }
    return { files: directoryContents, newI: i, dirs: directories };
}

day7();