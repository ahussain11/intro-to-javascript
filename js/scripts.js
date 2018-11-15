// // const obj1 = {
// //     name: 'Austin'
// // };

// // const obj2 = {
// //     name: 'Austin'
// // };

// // const arr1 = ['Cat'];
// // const arr2 = ['Cat'];

// // console.log(obj1.toString() === obj2.toString());


// // const num = '42';
// // console.log(num);
// // console.log(+num);


// // Try it out
// const str1 = 'pizza';
// const str2 = new String(str1);

// // loose equals don't care about data type
// console.log(str1 == str2);
// // Strict equals does
// console.log(str1 === str2);


// // GEMDAS rules apply to math operations, order of operations

// // fizzBuzz Test is a really popular interview question


// let number = 0;

// // console.log('number', number);
// // number++;
// // console.log('number', number);
// // number++;
// // console.log('number', number);
// // number--;
// // console.log('number', number);

// const item = 9.99;
// const item2 = 7.99;
// const discount =  0.5;

// console.log(number += item);
// console.log(number += item2);
// console.log(number *= discount); // 50% discount


// // const num1 = prompt(`Type in a number below:`, 10);
// // const num2 = prompt(`Type in another number:`, 10);
// // const mutliplier = prompt(`What do you want to multiply the sum by?`, 2);

// // alert((+num1 + +num2) * +mutliplier);
// // console.log((+num1 + +num2) * +mutliplier);




// // Control Flow

// const firstName = 'Austin';

// if (firstName === 'Austin') {
//     // If statement evaluates true, this runs
//     // Indent within the curly braces

//     console.log('Your name is Austin.');
// } else if (firstName === 'Jack') {
//     // If statement evaluates false, this runs

//     console.log('Your name is Jack.');
// } else {
//     console.log('Your name is not Austin or Jack.')
// }


// const magicNumber = 4;

// if (magicNumber === 1) {
//     console.log(1);
// } else if (magicNumber === 2) {
//     console.log(2);
// } else {
//     console.log('No magic number for you');
// }


// // && -> both sides must equate to true
// // || -> either side can equate to true
// if (true || true) {
//     console.log('Great success!');
// }

// const age = 21;

// if (age === 21 || age === 80) {
//     console.log('You are 21 or 80.');
// }


// const lastName = '';

// // Looking for truthy or falsy values
// if (!lastName) {
//     console.log(`Please provide a last name`);
// }

// /**
//  * prompt user for name
//  * if they provide a name alert their name
//  * if they provide no value alert that you need a valid name
//  */

// //  const userName = prompt('What is your name?');

// //  if (userName) {
// //      confirm(`Is your name ${userName}?`);
// //      console.log(userName);
// //  } else {
// //      alert('Answer the question rebel scum...')
// //  }


// // Refactored the above example to ternary statement
// // const userName = prompt('What is your name?');

// // userName ? alert(userName) : alert('Answer the question rebel scum');

// /**
//  * evaluation ? true : false
//  */

// //  true ? console.log(true) : console.log(false);


// //  const superHero = prompt('What is your favorite super hero?');

// //  switch (superHero) {
// //      case 'Batman':
// //          console.log('Batman is gr8');
// //          break;
// //      case 'Superman':
// //          console.log('Try again...');
// //          break;    
// //      default:
// //          console.log('Sorry, not a superhero.');
// //  }


// const userAgeMinimum = confirm('Are you over 18?');

// if (userAgeMinimum) {
//     const userAgeMaximum = confirm('Are you less than 80?');

//     if (userAgeMaximum) {
//         const likesStarWars = confirm('Do you like Star Wars?');
//         if (likesStarWars) {
//             alert('Yeah you do!');
//         } else {

//         }
//     } else {
//         confirm('Do you like prunes?');
//     }
// } else {
//     alert('You are not old enough.')
// }

const userName = prompt('Hey there! What is your name?');
const favColor = prompt(`Hey, ${userName}! What is your favorite color?`, 'ex. red, orange, yellow, green, blue, pink, purple, black, white, or grey').toLowerCase();

// add in toLowerCase()
// if (favColor === 'red' || favColor === 'Red') {
//     alert(`${favColor} is a great choice, ${userName}!`);
// } else if (favColor === 'orange' || favColor === 'Orange') {
//     alert(`${favColor} is a great choice, ${userName}!`);
// } else if (favColor === 'yellow' || favColor === 'Yellow') {
//     alert(`${favColor} is a great choice, ${userName}!`);
// } else if (favColor === 'green' || favColor === 'Green') {
//     alert(`${favColor} is a great choice, ${userName}!`);
// } else if (favColor === 'blue' || favColor === 'Blue') {
//     alert(`${favColor} is a great choice, ${userName}!`);
// } else if (favColor === 'pink' || favColor === 'Pink') {
//     alert(`${favColor} is a great choice, ${userName}!`);
// } else if (favColor === 'purple' || favColor === 'Purple') {
//     alert(`${favColor} is a great choice, ${userName}!`);
// } else if (favColor === 'black' || favColor === 'Black') {
//     alert(`${favColor} is a great choice, ${userName}!`);
// } else if (favColor === 'white' || favColor === 'White') {
//     alert(`${favColor} is a great choice, ${userName}!`);
// } else if (favColor === 'grey' || favColor === 'Grey') {
//     alert(`${favColor} is a great choice, ${userName}!`);
// } else {
//     alert("Hm, that didn't work...try again.");
// }

if (favColor === 'red' || 'orange' || 'yellow' || 'green' || 'blue' || 'pink' || 'purple' || 'black' || 'white' || 'grey' || 'gray') {
    alert(`${favColor} is a great choice, ${userName}!`);
} else {
    alert("Hm, that didn't work...Please reload the page and try again.");
}