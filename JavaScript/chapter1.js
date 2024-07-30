// let myVar = "Hello World!"

// console.log(typeof 42);
// console.log(typeof myVar);

// const name = "Inigo Montoya";

// console.log(name[2]); // i
// console.log("Hello World"[4]); // o

// const frost =
// 	"Nature’s first green is gold, " +
// 	"Her hardest hue to hold. " +
// 	"Her early leaf’s a flower; " +
// 	"But only so an hour. " +
// 	"Then leaf subsides to leaf. " +
// 	"So Eden sank to grief, " +
// 	"So dawn goes down to day. " +
// 	"Nothing gold can stay. ";

// console.log(frost);
// console.log('They said, "this string doesn\'t need an escape," but that isn\'t true.');

// const frost =
// 	"Nature’s first green is gold, \n\
// Her hardest hue to hold. \n\
// Her early leaf’s a flower; \n\
// But only so an hour. \n\
// Then leaf subsides to leaf. \n\
// So Eden sank to grief, \n\
// So dawn goes down to day. \n\
// Nothing gold can stay.";

// console.log(frost);
const frost =
	`Nature’s first green is gold,
Her hardest hue to hold.
Her early leaf’s a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.`;

// let x = 10;

// {
// 	let y = 5;
// 	{
// 		let z = x + y;
// 		console.log(z);
// 	}
// }

// let x = 10;

// if (x < 0) {
// 	console.log("Negative!");
// } else {
// 	throw "Error - I don't know what I'm doing.";
// }

// console.log("Does this log?");

// let x = 10;

// try {
// 	if (x < 0) {
// 		console.log("Negative!");
// 	} else {
// 		throw "Error - I don't know what I'm doing.";
// 	}
// } catch (error) {
// 	console.log("log this error" ,error);
// }

// console.log("Does this log?");


// let x = 10;
// let isEven;

// try {
// 	if (x > 0) {
// 		isEven = (x % 2 == 0) ? false : true;
// 		debugger;
// 	} else if (x <= 0) {
// 		throw "Error - Value of 0 or below.";
// 	}

// 	console.log(isEven);
// } catch (err) {
// 	console.log(err);
// } finally {
// 	console.log(x);
// }
//for
// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }
//for in
// const str = "Hello World";

// for (let i in str) {
// 	console.log(str[i]);
// }

//for of

// const str = "Hello World";

// for (let c of str) {
// 	console.log(c);
// }
// console.log(typeof null)

// if (false)
//      {

//     console.log('True');
 
//     } else
//     {
 
//     console.log('False');
 
//     }


//     const names = ["John", "Abagail", "Jerome", "Cynthia"];
// const greetings = [];

// for (let i = 0; i < names.length; i++) {
// 	greetings[i] = "Hello welcome, " + names[i] + "!!!!";
// 	console.log(greetings[i]);
// }

// let movies = ['Caddyshack', 'Interstellar', 'Scarface'];
// let firstMovie = movies[0];  // 'Caddyshack'

// console.log(movies.length);
// console.log(movies[0]);

// console.log(movies);
// movies[6] = "Rajini";
// console.log(movies);
// console.log(movies[3]);

let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
let myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

// let ourMovies = yourMovies.concat(myMovies);

// console.log(ourMovies); 

// let yourMoviesManyTimes = yourMovies.concat(yourMovies, yourMovies, yourMovies);

// console.log(yourMoviesManyTimes);


// let yourMoviesCopy = yourMovies.concat();

// console.log(yourMoviesCopy); 

// let yourMoviesCopy = yourMovies;
// console.log(yourMoviesCopy); 

// let movieString = myMovies.join(" and ");

// console.log(movieString + " all walk into a bar..."); 

// myMovies.push('Trading Places', 'Antitrust');

// let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// let myMovie = movies.at(-1); 
// console.log(myMovie); 
// let revmovie= movies.reverse();
// console.log(revmovie); 
// let x = revmovie.length; 
// movies.push("rajini");
// console.log(movies); 
// let y = movies.length; 
// if((x) === (y))
// {
//      console.log("TRUE");

// }
// else
// {
//      console.log("FALSE");
// }

let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'Batman' ,'The Count of Monte Cristo'];

// let batmanIndex = movies.indexOf('Batman');
// console.log(batmanIndex);
let batmanIndex1 = movies.lastIndexOf('Batman');
console.log(batmanIndex1);

movies.forEach((movie) => {
	console.log(movie);
});

movies.forEach((movie, i) => {
	console.log(i + ') ' + movie);
});


