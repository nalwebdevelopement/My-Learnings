// //declare an array in js

// //const array_name = [item1,item2]

// let cars = ["benz","vovo","BMW"]
// console.log (cars);

// //convert array  to string

// let car = cars.toString();
// console.log (car);
// console.log(car[5])
// cars.forEach((i)=>{console.log(i);

// });

// cars.forEach((j)=>
// {
//     console.log( j);
// });

// for(let m of cars)
// {
//     console.log(m[i]);
// }

// // Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements". In this example, person[0] returns John:

// const person = ["John", "Doe", 46];
// const person1 = {firstName:"John", lastName:"Doe", age:46};
// console.log(person1.age);

// function outer() {

//        let count = 0;
    
//        function inner() {
    
//           count += 1;
    
//           return count;
    
//     }  
    
//     return inner;
    
//     }

// const increment = outer();

// console.log(increment());

// console.log(increment());

// let x = 10;

// function example() {

//    let x = 20;

//    console.log(x);

// }

// example();

// console.log(x);
// // 


let cars = ["benz", "kia", "Tayoto", "volvo", "hundai","Tesls"]
let speed = []
// for of
console.log("for of method")
console.log("-------------------------")
for(car1 of cars)
{
   console.log(car1);
}

//for in
console.log("for in method");
console.log("-------------------------");
for(c in cars)
{
   console.log(c);
   console.log(cars[c]);
}

console.log("for Each method")
console.log("-------------------------")
cars.forEach((c1,i,speed) =>
{
   console.log(c1,i,speed);
});

const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989,
	make: "Audi"
}
console.log("for in method");
console.log("-------------------------");
   for(let key in vehicle)
   {
      console.log(key ,vehicle[key]);
   }
console.log("for of method")
console.log("-------------------------") // unable to iterate with for of for an object
// for(key1 of vehicle.key)
// {
//    console.log(key1);
// }
console.log("for Each method")
console.log("-------------------------")
// vehicle.forEach((c2) => // wrong method
// {
//    console.log(c2);
// });
Object.keys(vehicle).forEach(key =>
{
   const value = vehicle[key];
   console.log(`${key}: ${value}`);
});
