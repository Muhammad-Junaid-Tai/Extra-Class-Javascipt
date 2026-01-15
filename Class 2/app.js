// let dateInput = document.getElementById("date");
// let viewPara = document.getElementById("viewAge");

// function ageCalc() {
//   let date_Value = new Date(dateInput.value);
//   console.log(date_Value);
//   let birthYear = date_Value.getFullYear();
//   let currentYear = new Date().getFullYear();

//   let result = currentYear - birthYear;
//   //    console.log(result);

//   viewPara.innerText = result;
// }

// let yourName = prompt('Name');
// let yourFatherName = "Qasim Tai";
// let yourFatherFullName = "Muhammad " + yourFatherName;
// let yourFullName = yourName + " " + yourFatherFullName;
// alert(yourFullName);

// let guessA_Number = prompt("Number Enter Karo");
// let numType = Number(guessA_Number);
// alert(typeof guessA_Number);
// alert(typeof numType);

// 8 !== 5 = True
// 8 < 5 = false
// 8 !== 8 = false
// 9 <= 10 = true

// let family = ["Moin-ud-Din", "Ghulam Ghous", "Irfan",
//    "Sameera", "Qurt-ul-Ain", "Khadija", 7];

// let walida =family[5];
// let walid = family[0];

// let number = family[6];
// let count = family.length;

//   alert(count === number);

//  let studentsList2 = [];

let fruitsName = [
  "Mango",
  "Pine Apple",
  "Guava",
  "Dragon Fruit",
  "Peach",
  "Avacado",
  "Angoor",
  "Anaar",
  "Cheeku",
  "Shareefa",
];
// fruitsName.push("Mosambi", "Kela", "Tarbooz");   // Ye Arrey ki list k end me add ho jaayengey //
let totalFruits = fruitsName.length;
console.log(totalFruits);
console.log(fruitsName);

// fruitsName.pop();
// totalFruits = fruitsName.length;
// console.log(totalFruits);
// console.log(fruitsName);
  
// let singleFruit = fruitsName.shift();
// console.log(fruitsName);
// console.log(singleFruit);


// fruitsName.unshift(singleFruit, "Strawberry",fruitsName[4]); 
// console.log(fruitsName);

// let urduFruits = fruitsName.slice(8,10)
// console.log(urduFruits);  


let urduFruitSep = fruitsName.splice(6,0,"Grapes","Pomegranate");
console.log(urduFruitSep);
console.log(fruitsName);

fruitsName.splice(0,fruitsName.length);

console.log(fruitsName);













