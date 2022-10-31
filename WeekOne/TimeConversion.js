'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let time = s.split(':');
    let hour = time[0];
    let min = time[1];
    let sec = time[2].slice(0,2);
    let ampm = time[2].slice(2,4);
    if(ampm === 'PM' && hour !== '12'){
        hour = parseInt(hour) + 12;
    } else if(ampm === 'AM' && hour === '12'){
        hour = '00';
    }
    return `${hour}:${min}:${sec}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
