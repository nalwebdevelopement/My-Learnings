1// Create a 10 Variable
let add1 = 2;
let add2  = 10;

let sub1 = 20;
let sub2 = 50; 

let mul1 = 3;
let mul2 = 6;

let div1 = 45;
let div2 = 9;

let mod1 = 50;
let mod2 = 11;

console.log(`***************** Concatination of String ***************`)
let s1 = "xys";
let s2 = "sdfs";
let s3 = s1 + s2;
console.log (`${s3}`);

const agetodrive = 16;



// 2. Perform calculations(*operator) on vars and create new Vars
let addition = add1 + add2;
console.log(`Addtion Result :, ${addition}`);

let sub = sub2 - sub1;
console.log(`Subtraction of sub1 and sub2: ${sub}`);

let mul = mul1 * mul2;
console.log(`Multiplicatoin of mul1 and mul2 = ${mul}`);

let div = div1 + div2;
console.log(`Division of div1 and div2 ${div}`);

let mod = mod1%mod2;
console.log(`MOdulo result= ${mod}`);

    // 3. Create 3 if Statements and test their outputs in console.

    //Print no is odd or even
let no=7;
    if(no% 2 === 0)
    {
        console.log(`${no} is even no`);

    }
    else{
    console.log(`${no} is odd no`);

  }

  console.log(`*********no is prime or not***********`);
  if((no % no === 1) && (no % 1 === no))
    {
        console.log(`${no} is PRIME NO`);
    }
    else
    {
        console.log(`${no} is NOT A PRIME NO`);
    }


    console.log(`*********Age eligible to drive***********`);
 if( agetodrive >= 16)
{
    console.log(`${agetodrive} is elgible age to drive`);
}
else
{
    console.log(`${agetodrive} is not  elgible age to drive`);
}

 // 4. Use 2 Logical Operators


 
    // 5. Interpolate All 10 of your variables in a console log


// While loops  




