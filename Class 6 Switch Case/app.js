/////   Switch Case Statement   /////

/// Hafte me 7 din hotey hain
/// Hafta ke dinon ke naam switch case statement ke zariye print karain
/// Haftey ka pehla din Monday hota hai aur aakhri din Sunday hota hai
/// Agar din ka number 1 se 7 ke beech na ho to "Invalid Day Number" print karain

// let day = +prompt("Enter day number (1-7): ");

// let day = 5; // Aap yahan din ka number change kar sakte hain
// let dayName;

// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid Day Number";
// }

// console.log("Today is: " + dayName);




let day = "Friday"; // Aap yahan din ka number change kar sakte hain
let discount;

switch (day) {
    case "Monday":
        discount = "5% off on all items";
        break;
    case "Tuesday":
        discount = "5% off on all items";
        break;
    case "Wednesday":
        discount = "5% off on all items";
        break;
    case "Thursday":
        discount = "5% off on all items";
        break;
    case "Friday":
        discount = "50% off on all items";
        break;
    case "Saturday":
        discount = "5% off on all items";
        break;
    case "Sunday":
        discount = "30% off on items";
        break;
    default:
        discount = "Invalid Day Number";
}

console.log("Today's discount is: " + discount);


/// Output examples:
/// Input: 1  => Output: Today is: Monday
/// Input: 5  => Output: Today is: Friday
/// Input: 8  => Output: Today is: Invalid Day Number