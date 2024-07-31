//declare an array in js

//const array_name = [item1,item2]

//let cars = ["benz","vovo","BMW"]
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

function outer() {

       let count = 0;
    
       function inner() {
    
          count += 1;
    
          return count;
    
    }  
    
    return inner;
    
    }

const increment = outer();

console.log(increment());

console.log(increment());

let x = 10;

function example() {

   let x = 20;

   console.log(x);

}

example();

console.log(x);
