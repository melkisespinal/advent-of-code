/**
 * @description: For a description of the problem, visit the link below. I use ES6 imports here
 * so that is why package.json is included with type: module. Make sure to run the latest version
 * of Node and do 'node index.js' to execute the file.
 * @author: Melkis Espinal
 * 
 * Link: https://adventofcode.com/2015/day/1
 */

import fs from 'fs';

/**
 * Part 1 of the challenge.
 * @param {*} inputPath: The path to the file containing the input.
 */
const whatIsSantasPositionPartOne = (inputPath) => {
    fs.readFile(inputPath, (err, data) => {
        console.log('***************************************************************************');
        console.time('santa-challenge');//start tracking the time to see performance
        let position = 0; //starts at ground
        if(err){
            console.log('Error', err);
        }

        const steps = data.toString().split('');
        for(const step of steps){
            if(step === '('){
                position++;
            }
            else if(step === ')'){
                position--;
            }
        }

        console.timeEnd('santa-challenge');
        console.log('Part One: ', `The instructions take Santa to floor #${position}.`);
        console.log('***************************************************************************');
    });
}

/**
 * Part 2 of the challenge.
 * @param {*} inputPath: The path to the file containing the input.
 */
const whatIsSantasPositionPartTwo = (inputPath) => {
    fs.readFile(inputPath, (err, data) => {
        console.log('***************************************************************************');       
        console.time('santa-challenge');
        let position = 1; //starts at 1
        let basementPos = -1;
        if(err){
            console.log('Error', err);
        }
    
        const steps = data.toString().split('');
        for(let i = 0; i < steps.length; i++){
            const step = steps[i];
            if(step === '('){
                position++;
            }
            else if(step === ')'){
                position--;
            }

            if(position === -1){//if Santa enters the basement, it's over
                basementPos = i;
                break;//with the hope to make it more efficient
            }
        }
        console.timeEnd('santa-challenge');
        console.log('Part Two: ', `The character that causes Santa to enter the basement is at position ${basementPos}.`);
        console.log('***************************************************************************');
    });
}

whatIsSantasPositionPartOne('input.txt');
whatIsSantasPositionPartTwo('input.txt');
