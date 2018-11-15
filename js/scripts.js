// Arrays always start at 0, NOT 1
// Can store multiple data types

// const myFirstArray = ['Austin', 21, true, 'Salinas', ['Alex', 'Kristi', 'Taj']];

// console.log(myFirstArray[4][1]);

// const geekwise = [['Web for Beginners', true], ['Mobile Friendly', true], ['Intro to JS', false]];

// console.log(geekwise[1][0]);
// console.log(geekwise[0][0]);
// console.log(geekwise[2]);

// const myList = ['Mad Max', 17, true, 2015];

// console.log(myList,myList.length,myList[1]);

// const arr = ['Cat'];

// console.log(arr[10]); --> undefined

// const favFilmOne = ['Good Will Hunting', 2000];
// const favFilmTwo = ['The Dark Knight', 2008];
// const favFilmThree = ['The Big Short', 2012];
// const favFilmFour = ['The Lord of the Rings', 1997];
// const favFilmFive = ['Baby Driver', 2017];

// const favFilms = [favFilmOne, favFilmTwo, favFilmThree, favFilmFour, favFilmFive];
// alert(favFilmTitles);

// const topAndBot = [favFilmOne[0], favFilmFive[0]];

// console.log(topAndBot);

// alert(favFilmTitles.length);


// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }

const names = ['Mark', 'Michael', 'Ben', 'Jared'];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

const albums = ['something', 'something else', 'something other'];

// for (let i = 0; i < albums.length; i++) {
//     console.log(albums[i]);
// }

// for (let name of names) {
//     console.log(name);
// }

// names.forEach(name => console.log(name));

// for(let album of albums) {
//     console.log(album);

//     if(album === 'something else') {
//         break;
//     }
// }

// const person = {
//     name: 'Austin',
//     age: 21
// };

// for (let key in person) {
//     console.log(person[key]);
// }

// const user = {};

// user.name = prompt('Give me your name.');
// user.age = prompt('Give me your age.');

// console.log(user);

const favFilms = [['one', 2018], ['two', 2017], ['three', 2016]];

// for (let favFilm of favFilms) {
//     if (favFilm[0] === 'two') {
//         alert(`Your fav movie is ${favFilm[0]} and it was made in ${favFilm[1]}.`);
//     } 
    
// }

favFilms.forEach(favFilm => {
    if (favFilm[0] === 'two') {
        alert(`Your fav movie is ${favFilm[0]} and it was made in ${favFilm[1]}.`);
    }
});
