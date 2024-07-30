//Count down to 0 from a given number.

// let count = 10;
// console.log(`*********Count down to 0 from a given number***********`);
// while(count >= 0)
// {
//     console.log(count)
//     count = count - 1;
// }



// let number = 1;
// console.log(`*********Log integers in multiples of 3 as long as they are less than 35.***********`);
// while(number <=35)
// {
//     console.log(number)
//     number = number + 2;
// }

 //let number2 = 0;
// console.log(`*********Print integers in multiples of 5 as long as they are less than 100.***********`);
// while(number2 <=100)
// {
//     console.log(number2);
//     number2 = number2 + 5;
// }

// console.log(`*********Print integers between 0 and 20 with the following conditions:***********`);
// console.log(`*********All numbers divisible by 2 should be multiplied by 3 before they are output.***********`);

// while(number2 <=20)
// {
//     if((number2 % 2 )=== 0)
//     {
//     console.log("*****");
//     console.log(`${number2}`);
//     console.log(`${number2}` * 3);
//     }
//     number2 = number2 + 1;
// }

console.log(`*********Print all prime numbers between 0 and 20.***********`);
let primeend = 20;
let primestart= 1
let prime;
let count;
while(primestart <= primeend)
 {
    count = 0;
    prime = 1
    while(prime <= primestart)
    {
        ////console.log("sdfsdfsd")
       // let resu= primestart % prime;
       // console.log(resu);
        if((primestart % prime) === 0)
        {
            count++;
           // console.log(count);
        }
        prime++;
        
    }
    console.log(`sdfsdfsd ${prime}`)
    console.log(count);
    if(count === 2 )
    console.log(`${primestart} is a prime no`)
primestart++;
}
// Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill,
// and the vending machine gave him his change in quarters.

// Write a loop that outputs how many quarters Romeo received.












