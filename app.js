"use strict";
// q1
// Install
Object.defineProperty(exports, "__esModule", { value: true });
// q2
let personname = "Eric";
console.log(`Hello ${personname}, would you like to learn some pyton today`);
// q3
let personName = "Owais";
let LowercaseName = personName.toLowerCase();
console.log("LowercaseName:", LowercaseName);
let UppercaseName = personName.toUpperCase();
console.log("UppercaseNmae:", UppercaseName);
let titlecaseName = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Titlecase:", titlecaseName);
// q4
let quote = "That's one small step for a man, a giant leap for mankind.";
let authour = "Neil Armstrong";
console.log(`${authour} once said, ${quote}`);
// q5
let Famousperson = "Prophet S.A.W";
let theQuote = "The strongest among you is the one who controls his anger";
let Message = `"${theQuote}" : '${Famousperson}'`;
console.log(Message);
// q6
let thenamewithwhitespace = "\n\t  Owais  \n\t";
console.log("The name with white space:", thenamewithwhitespace);
let strippedname = thenamewithwhitespace.trim();
console.log("Stripped Name: ", strippedname);
// q7
const additionresult = 5 + 3;
console.log(`Addition Result ${additionresult}`);
const subtractionresult = 100 - 92;
console.log(`Subtration Result ${subtractionresult}`);
const mulitplicationresult = 2 * 2 * 2;
console.log(`Muliplication Result ${mulitplicationresult}`);
const divisionresult = 64 / 8;
console.log(`Division Result ${divisionresult}`);
// q8
console.log(7 + 1);
console.log(18 - 10);
console.log(2 * 1 * 4);
console.log(64 / 8);
// q9
const Myfavuoritenumber = 8;
const message1 = `My Favourite Number Is : ${Myfavuoritenumber} `;
console.log(message1);
// q10
// Program by [Owais]
// Current date: [4-20-2024]
// This program demonstrates addition, subtraction, multiplication, and division operations
// that result in the number 8.
console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division
// Program by [Your Name]
// Current date: [Date]
// This program stores the author's favorite number in a variable
// and prints a message revealing the favorite number.
const Myfavoritenumber = 8;
const message2 = `My Favourite Number Is : ${Myfavoritenumber} `;
console.log(message2);
// q11
let friends = ['Owais', 'Talha', 'Kabeer'];
for (let friend of friends) {
    console.log(friend);
}
// q12
let names = ["Talha", "Owais", "Kabeer"];
names.forEach(names => {
    console.log(`Hello ${names},! Asalam o alikum have a great day!`);
});
// q13
let motorcylebrands = ["Honda", "Kawasaki", "BMW", "Harley Daivison"];
motorcylebrands.forEach(brand => {
    console.log(`I want to own ${brand} bikes.`);
});
// q14
let guests = ["Talha", "Kabeer", "Zohaib"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, \n\n I would be honoured to invite you on dinner \n\n Sincerely Welcome \n [From Owais]`);
});
// q15
let guest1 = ["Zohaib", "Talha", "Kabeer"];
const cannotattend = "Zohaib";
console.log(`${cannotattend} can't make it`);
const newinvitee = "Abeer";
const IndexOfCannotAttend = guest1.indexOf(cannotattend);
if (IndexOfCannotAttend !== -1) {
    guest1[IndexOfCannotAttend] = newinvitee;
}
guest1.forEach((guest) => {
    console.log(`Dear ${guest} your are invited on dinner. awaiting for your presence . from [Owais] walcome.`);
});
// q16
let guest2 = ["Ali", "Umer", "Ahmed"];
console.log("Hello! We Found a Bigger Table. ");
guest2.unshift("Imran");
const middleIndex = Math.floor(guest2.length / 2);
guest2.splice(middleIndex, 0, "Ashfaq");
guest2.push("Hamza");
guest2.forEach(element => {
    console.log(`Dear ${guest2} Your Are Invited On dinner At My Place. Thankyou_`);
});
// q17
let guest3 = ["Zeshaan", "Ayan", "Fahad"];
console.log("Dinner Was Cancelled cause During. Heavy RainFall ");
while (guest3.length > 2) {
    const removedGuest = guest3.pop();
    console.log(`Sorry ${removedGuest} We Can't Invite You To Dinner`);
}
guest3.forEach(guest => {
    console.log(`Dear ${guest}, You Are Still Invited In  Dinner. `);
});
// q18
let places = ["Skardu", "Islamabad", "Karachi", "Peshawar"];
console.log("Orignal Order");
console.log(places);
console.log("\ Alphabetical Order:");
console.log([...places].sort());
console.log("\n Orignal Order After Sorting:");
console.log(places);
console.log("\n Reverese Alphabatical Order:");
console.log(["...places"].sort().reverse());
console.log("\n Oringnal Order After Reverse Sorting:");
console.log(places);
places.reverse();
console.log("\n Reversed Order:");
console.log(places);
places.reverse();
console.log("\n Back To Orignal Order:");
console.log(places);
places.sort();
console.log("\n Sorted In Alphabatical Order:");
console.log(places);
places.sort((a, b) => b.localeCompare(a));
console.log("\n Sorted In Reverse Alphabatical Order:");
console.log(places);
// q19
let dinnerguests = [" Ahsan", " Ali", " Bilal"];
console.log(`You Are  Invited on Dinner${dinnerguests} . Thankyou`);
// q20
let Fruits = ["Watermelon", "Pomegranate", "Apple", "Orange"];
console.log("list of Fruits:");
console.log(Fruits);
// q21
let cars = [
    { brands: "Toyota", models: "Corolla", yearof: 2018, color: "black" },
    { brands: "BMW", models: "M5", yearof: 2022, color: "Gray" },
    { brands: "Lexus", models: "CT200h", yearof: 2015, color: "burgundy" },
];
console.log("List of cars");
console.log(cars);
// q22
let myArray = [1, 2, 3, 5, 6, 7, 8, 9, 10];
console.log(myArray[5]);
let lastIndex = myArray.length - 1;
console.log(myArray[lastIndex]);
let IndextoAccess = 5;
if (IndextoAccess >= 0 && IndextoAccess < myArray.length) {
    console.log(myArray[IndextoAccess]);
}
else {
    console.log("Index out bounds.");
}
// q23
let car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');
// Test 3
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');
// Test 4
console.log("Is car.length > 0? I predict True.");
console.log(car.length > 0);
// Test 5
console.log("Is car.length < 10? I predict True.");
console.log(car.length < 10);
// Test 6
console.log("Is car.length >= 6? I predict True.");
console.log(car.length >= 6);
// Test 7
console.log("Is car.length <= 5? I predict False.");
console.log(car.length <= 5);
// Test 8
console.log("Is car.startsWith('su')? I predict True.");
console.log(car.startsWith('su'));
// Test 9
console.log("Is car.endsWith('ru')? I predict True.");
console.log(car.endsWith('ru'));
// Test 10
console.log("Is car.includes('bar')? I predict False.");
console.log(car.includes('bar'));
// q24
let string1 = 'hello';
let string2 = 'world';
let number1 = 5;
let number2 = 10;
let array = ['apple', 'banana', 'orange'];
console.log("Is string1 equal to 'hello'? I predict True.");
console.log(string1 === 'hello');
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 !== string2);
console.log("Is string1 lowercase equal to 'hello'? I predict True.");
console.log(string1.toLowerCase() === 'hello');
console.log("Is number1 equal to 5? I predict True.");
console.log(number1 === 5);
console.log("Is number1 not equal to number2? I predict True.");
console.log(number1 !== number2);
console.log("Is number2 greater than number1? I predict True.");
console.log(number2 > number1);
console.log("Is number2 less than number1? I predict False.");
console.log(number2 < number1);
console.log("Is number1 greater than or equal to 5? I predict True.");
console.log(number1 >= 5);
console.log("Is number2 less than or equal to 10? I predict True.");
console.log(number2 <= 10);
console.log("Is number1 greater than 3 and number2 less than 15? I predict True.");
console.log(number1 > 3 && number2 < 15);
console.log("Is number1 greater than 3 or number2 less than 5? I predict True.");
console.log(number1 > 3 || number2 < 5);
console.log("Is 'apple' in the array? I predict True.");
console.log(array.includes('apple'));
console.log("Is 'grape' not in the array? I predict True.");
console.log(!array.includes('grape'));
// q25
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points!");
}
let alien0_color = 'yellow';
if (alien0_color === 'green') {
    console.log("Congratulations! You just earned 5 points!");
}
// q26
let alien1_color = 'yellow'; // You can change this to 'green', 'yellow', or 'red'
if (alien1_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien!");
}
else {
    console.log("Congratulations! You just earned 10 points!");
}
let alien2_color = 'red';
if (alien2_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien!");
}
else {
    console.log("Congratulations! You just earned 10 points!");
}
// q27
let alien5_color = 'green';
if (alien5_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien!");
}
else if (alien5_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien!");
}
else if (alien5_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien!");
}
let alien3_color = 'yellow';
if (alien3_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien!");
}
else if (alien3_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien!");
}
else if (alien3_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien!");
}
let alien4_color = 'red';
if (alien4_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien!");
}
else if (alien4_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien!");
}
else if (alien4_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien!");
}
// q28
let age = 30; // You can change the age value to test different scenarios
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// q29
let favorite_fruits = ['banana', 'apple', 'mango'];
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('mango')) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}
// q30
let usernames = ['admin', 'Eric', 'John', 'Alice', 'Emily'];
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// q31
let users = ["Ahmed", "Ali", "Ayan"];
if (users.length === 0) {
    console.log("we need to find some users");
}
else {
    users: [];
    console.log("All user name have been removed");
}
// q32
let current_users = ["John", "Jane", "Alice", "Bob", "Eve"];
let new_users = ["Alice", "Eve", "Charlie", "David", "Frank"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    let new_user_lower = new_user.toLowerCase();
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
// q33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    let ordinal;
    if (number === 1) {
        ordinal = "1st";
    }
    else if (number === 2) {
        ordinal = "2nd";
    }
    else if (number === 3) {
        ordinal = "3rd";
    }
    else {
        ordinal = number + "th";
    }
    console.log(ordinal);
}
// q34
let favouritepizzas = ["Fajita", "B.Bq", "tikka"];
for (let pizza of favouritepizzas) {
    console.log(`I Like ${favouritepizzas} pizza`);
}
console.log("I Really Love Pizza");
// q35
const animals = ['Dog', 'Cat', 'Rabbit'];
console.log("List of animals:");
for (let animal of animals) {
    console.log(animal);
}
console.log("\nStatements about each animal:");
for (let animal of animals) {
    switch (animal) {
        case 'Dog':
            console.log("A dog would make a great pet.");
            break;
        case 'Cat':
            console.log("A cat can be an independent and affectionate companion.");
            break;
        case 'Rabbit':
            console.log("A rabbit can be a cute and playful pet.");
            break;
        default:
            console.log("This animal is not recognized.");
    }
}
console.log("\nAny of these animals would make a great pet!");
// 36
function make_shirt1(size, message) {
    console.log(`Shirt size:${size}`);
    console.log(`Message: ${message} `);
}
make_shirt1('Large', 'Keep calm code on');
// q37
function make_shirt2(size = 'Large', message = 'I love TypeScript') {
    console.log(`Shirt size: ${size}`);
    console.log(`Message: ${message}`);
}
// Create a large shirt with the default message
make_shirt2();
// Create a medium shirt with the default message
make_shirt2('Medium');
// Create a small shirt with a custom message
make_shirt2('Small', 'Code with passion!');
// q38
function describe_city(city, country = 'Default Country') {
    console.log(`${city} is in ${country}.`);
}
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Paris');
// q39
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with three different city-country pairs
const city1 = city_country('Lahore', 'Pakistan');
const city2 = city_country('Tokyo', 'Japan');
const city3 = city_country('Paris', 'France');
// Print the values returned by the function
console.log(city1);
console.log(city2);
console.log(city3);
// q40
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('Artist1', 'Album1');
const album2 = make_album('Artist2', 'Album2', 12);
const album3 = make_album('Artist3', 'Album3');
// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
// q41
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
const magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
show_magicians(magicianNames);
// q42
function show_magicians2(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the  " + magicians[i];
    }
}
const magicianNames2 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
make_great(magicianNames2);
show_magicians(magicianNames2);
// q43
function show_magicians3(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_the(magicians) {
    const modifiedMagicians = [...magicians];
    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = "the  " + modifiedMagicians[i];
    }
    return modifiedMagicians;
}
const magicianNames3 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
const modifiedMagicians = make_the(magicianNames.slice());
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
// q44
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!");
}
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese", "Mayonnaise");
makeSandwich("Peanut Butter", "Jelly");
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model
    };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
console.log(myCar);
