/**
 * @description: For a description of the problem, visit the link below. I use ES6 imports here
 * so that is why package.json is included with type: module. Make sure to run the latest version
 * of Node and do 'node index.js' to execute the file.
 * @author: Melkis Espinal
 * 
 * Link: https://adventofcode.com/2015/day/1
 */

import fs, { access } from 'fs';

/**
 * Part 1 of the challenge.
 * ( means Santa goes UP
 * ) means Santa goes DOWN
 * 
 * Time Complexity: O(n) - We go through the input one by one, one time.
 * Space Complexity: O(1) - We only have the input file loaded into memory.
 * No new space is used.
 * 
 * @param {*} inputPath The path to the file containing the input.
 */
const whatIsSantasPositionPartOne = (inputPath) => {
    fs.readFile(inputPath, (err, data) => {
        if(err){
            console.log('Error', err);
        }
        console.time('part-one');
        const directions = data.toString();
        const directionsArr = directions.split('');

        const answer = directionsArr.reduce((acc, currVal) => {
            if(currVal === '('){
                return acc += 1;
            }
            else if(currVal === ')'){
                return acc -= 1;
            }
        }, 0);//starts at position 0 (floor)

        console.timeEnd('part-one');
        console.log('Part One:', `The instructions take Santa to floor #${answer}.\n\n`);
    });
}

/**
 * Part 2 of the challenge.
 * ( means Santa goes UP
 * ) means Santa goes DOWN
 * 
 * Time Complexity: O(n) - We go through the input one by one, one time.
 * Space Complexity: O(1) - We only have the input file loaded into memory.
 * No new space is used.
 * 
 * @param {*} inputPath The path to the file containing the input.
 */
const whatIsSantasPositionPartTwo = (inputPath) => {
    fs.readFile(inputPath, (err, data) => {
        if(err){
            console.log('Error', err);
        }
        console.time('part-two');
        const directions = data.toString();
        const directionsArr = directions.split('');
        let santaPosition = 0;
        let santaBasementPos = -1;
        
        //some() is best here because it exits when the condition
        //is met.
        const answer = directionsArr.some((currVal, i) => {
            if(currVal === '('){
                santaPosition += 1;
            }
            else if(currVal === ')'){
                santaPosition -= 1;
            }
            santaBasementPos = i+1;
            return santaPosition < 0;
        });

        console.timeEnd('part-two');
        console.log('Part Two:', `The character that causes Santa to enter the basement is at position ${santaBasementPos}.\n`);
    });
}

whatIsSantasPositionPartOne('input.txt');
whatIsSantasPositionPartTwo('input.txt');
