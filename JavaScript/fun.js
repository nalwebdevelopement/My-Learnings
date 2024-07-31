//function declarations

function add()
{
console.log("addition");
}
add();

//function expression

const add1 = function()
{
    console.log("addtions expression");
};
add1();

//arrow function

const add2 = () =>  console.log("arrow function");
add2();

(function()
{
    console.log("immediate funcation")
})();

var x = 1;

function foo() {

   console.log(x);

   var x = 2;

}

foo();


