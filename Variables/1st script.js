
/*Meaning of Variables in JavaScript
    A variable is a container for storing data values. it allows you to refer thestore and manipulate data in your program.
    Variable can held the data type like (strings ,objects boolean And more )
    
    
    syntax of variable declaration 
     * Vartype varaiableName = value;
    type of variable declaration
    1. var:- used to declare a variable in JavaScript. It has function scope and can be re-declared and updated within its scope. 
    *) scope:-Particular area of the program where a variable is accessible.
    a)Funtion scope:- A variable declared with var is accessible within the function in which it is defined, as well as any nested functions.
    b) re-declare and re-assighnment in allowed
    c)var can hoisted and assigned with undefined:- automatically what we declared it  moves to on top 
  
    */
//example of funtional scope:-
var x = 10;// automatically globalscope variable because it is declared outside the function
function scopetest() {
  var x = 20;//var is a type ,x is a name, = is an terminator, 10 is a value,
  x=200;
  console.log(x); // use of this clg if we want to debug anything if we want to display output on console we use this clg it prints the value of x
  document.write("value of x inside function: " + x); //print particular value is going to display on document on a browser not on console tab
}
scopetest(); // calling the function to execute the code inside it
x=100;
console.log(x); // this will give an error because x is not accessible outside the function scope


//example of declaration:-
var a;//declaring a varaible a
var a =5;// declaration and assignment

//example of re-declaration :-
var a = 10; // re -declaration  we r declaring same variable but changing the value this is known as re-declaration 
console.log(a); //  the declared value is 5 but we re-declared it to 10 so the output will be 10

//example of re-assignment:-
a = 20; // re-assignment we r changing the value of variable 5 to 20 we dont use a type because we have already declared it so we just change the value of variable


var b;//declaring a variable b
b= 15;// assignment
b = 25;// re-assignment
var b = 50;//re-declaration and re-assignment

//if we declare a var type 
var z;// output will be undefined because we have not assigned any value to it yet

console.log(z); // it gets an error z is not defined because we have not declared it yet

z= 30;//if we assign a value to it then it will print the value of z 
console.log(z); // 

console.log(c);// if we interchange the line what will be the output?
var c = "hoisted"; 
//console.log(c);      //]this is declaration of hoisting code

var c ;
//c = "hoisted"; 
console.log(c); //} re-declaration and re-assignment of hoisting code
c = "hoisted";


if(true){
  var d = "global"; //
  console.log(d);

}
console.log(d);


/* 2.let  
= it has a block scope:- if we declare a let inside a block we can access it only in block itslef
= re declaration is not allowed in let 
= we can re-assign the value in let
= let can be hoisted but not intialized with undefined

*/


//example of block scope:-

{ //we can consider this as block scope
    let e ="block scope";
   // let e = "re-declaration"; //example of re-declaration its throw an a error identifier 'e' has already been declared
   e ="re-declaration"; // re-assignment is allowed in let 
    console.log(e);

}


//if we try to access the console.log(e);outside the block it throws the error as e is not defined
console.log(e);

// it can be hoisted but not initialized with undefined
{
 console.log(f);
  let f =50000;
}

let e;
console.log(e);
e = 50000;

/* 3.const
= it has a block scope:- if we declare a const inside a block we can access it only in block itslef
= re declaration is not allowed in const 
= we can not re-assign the value in const
= const can be hoisted but not intialized with undefined
*/
