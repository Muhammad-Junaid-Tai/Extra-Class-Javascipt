// List of Loops in JavaScript

// 1. For Loop
// Syntax: for (initialization; condition; increment) { // code to be executed }
//  kab tak chalega ye loop

// 2. While Loop
// Syntax: while (condition) { // code to be executed }
//  kab tak chalega ye loop

// 3. Do...While Loop
// Syntax: do { // code to be executed } while (condition);
//  kam se kam ek baar to chalega ye loop

// 4. For...In Loop
// Syntax: for (variable in object) { // code to be executed }
//  object ke properties ke liye chalega ye loop

// 5. For...Of Loop
// Syntax: for (variable of iterable) { // code to be executed }
//  iterable ke elements ke liye chalega ye loop


// Example Usage:


////////////////////////////
/////// 1. For Loop ////////
///////////////////////////
// Syntax: for (initialization; condition; increment) { // code to be executed }


//  Variable i ko 1 se start karo, jab tak i 5 se chota hai tab tak i ko increment karte jao

// for (let i = 1; i < 5; i++) {
//     console.log("Number: " + i);
// }


// for loop ka use karke 1 se 10 tak ke numbers ka sum nikalna
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i; // sum = sum + i
// }
// console.log("Sum of numbers from 1 to 10 is: " + sum);

// console.log("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55");


////////////////////////////
/////// 2. While Loop //////
////////////////////////////
// Syntax: while (condition) { // code to be executed }
//  jab tak condition true hai tab tak loop chalega


// let i = 1;
// while (i < 5) {
//     console.log("Count: " + i);
//     i++;
// }   



// let sum = 0;
// let n = 1;
// while (n <= 10) {
//     sum += n; // sum = sum + n
//     n++;
// }
// console.log("Sum of numbers from 1 to 10 is: " + sum);
// console.log("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55");


/////////////////////////////////
/////// 3. Do...While Loop //////
/////////////////////////////////
// Syntax: do { // code to be executed } while (condition);
//  kam se kam ek baar to chalega ye loop


// let k = 1;
// do {
//     console.log("Do...While Loop iteration: " + k);
//     k++;
// } while (k < 5);



// let sum = 0;
// let n = 1;
// do {
//     sum += n; // sum = sum + n
//     n++;
// } while (n <= 10);
// console.log("Sum of numbers from 1 to 10 is: " + sum);
// console.log("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55");



///////////////////////////////
/////// 4. For...In Loop //////
///////////////////////////////
// Syntax: for (variable in object) { // code to be executed }
//  object ke properties ke liye chalega ye loop

// const beta = {
//     name: "Taha",
//     fName: "BabbarSher Hussain Tai",
//     age: 3
// };
// for (let key in beta) {
//     console.log(key + ": " + beta[key]);
// }   

// const dukanList = {
//     dukan1: "Kaghzi Bazar",
//     dukan2: "24 Market",
//     dukan3: "Tariq Road"
// };
// for (let dukan in dukanList) {
//     console.log(dukan + ": " + dukanList[dukan]);
// }

////////////////////////////////
/////// 5. For...Of Loop ///////
////////////////////////////////
// Syntax: for (variable of iterable) { // code to be executed }
//  iterable ke elements ke liye chalega ye loop

// const numbers = [10, 20, 30, 40];
// for (let num of numbers) {
//     console.log("Number: " + num);
// }


// const fruitlist = ["Apple", "Banana", "Mango", "Orange"];
// for (let phal of fruitlist) {
//     console.log("Fruit: " + phal);
// }

// End of Loops in JavaScript





