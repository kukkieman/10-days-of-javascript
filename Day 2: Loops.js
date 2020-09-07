'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function vowelsAndConsonants(s) {
    
    var flag = 0;
    
    for(var i=0; i<s.length; i++) {
        switch(s.charAt(i)) {
            case 'a': flag=1;
                      break;
            case 'e': flag=1;
                      break;
            case 'i': flag=1;
                      break;
            case 'o': flag=1;
                      break;
            case 'u': flag=1;
                      break;
            default:  flag=0;
                      break;
        }
        if(flag == 1) console.log(s.charAt(i));
    }
    
    for(var i=0; i<s.length; i++) {
        switch(s.charAt(i)) {
            case 'a': flag=1;
                      break;
            case 'e': flag=1;
                      break;
            case 'i': flag=1;
                      break;
            case 'o': flag=1;
                      break;
            case 'u': flag=1;
                      break;
            default:  flag=0;
                      break;
        }
        if(flag == 0) console.log(s.charAt(i));
    }

}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
