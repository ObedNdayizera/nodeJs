import getPosts, { getPostsLength } from "./postController.js";

// const { generateRandomNumber, celciusToFahrenheit } = require('./utils');

// console.log(`Random Number: ${ generateRandomNumber()}`);
// console.log(`Celcius to fahrenhiet: ${ celciusToFahrenheit(5)}`);


console.log(getPosts());
console.log('post length: ' + getPostsLength());