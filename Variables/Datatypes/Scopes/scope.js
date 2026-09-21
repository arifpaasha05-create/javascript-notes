/*
Rules for Naming variables in javascript:

1) variables names can contain letters ,digits,underscores, and dollar signs.
example:
let ca$h = 1000:
var word = "hello";
const pi = 3.14;
var c@sh = 2000;

2)numbers are not allowed at the beggining of a variable name.
examples;
var 1stName = "john";
let 2ndName = "doe";
const 3rdName ="smith";
let student1 = "alicce"; this was an correct

3)spaces are not allowed in variable name;
example:
let student name = "ravi";
var my variable = 10;

4)  case sensitive :variable names are case-sensitive ,meaning uppercase 
example:
let name = "Ravi"// we used lower case
let Name = "Ravi"//first later we used uppercase
let NAME = "Ravi"//we r using uppercase

5)Reserved keywords : variable names cannot be same as reserved keywords
example:
var if = 10;
let class = "math";class is also ye predefined word in java 

6) CamelCase:- first letter we use as a lowercases second word first letter we use an uppercase
example:
let myStudentNameIs = "ravi";


7) naming convensions:
it tells us how we should name the variables professionally.
example:
let a = "ravi";
let studentName = "ravi"

*/



/* SCOPE
What is scope?
it goes to determines where variables can be accessed in the program


types of Scopes
1. global scope
2.block scope
3.functional scope

1.what is mean by global scope?
a variable declared outside the function or block in known as global scope

2.what is mean by blockscope?












*/
 //example for global scope:
 let name ="ravi";
 function showName(){
    console.log(name);
    document.write(name);
 }
 showName();
 console.log(name);

 //example for blockscope

/* {
    let number =100;
    var number2 =200;
    console.log(number);
    console.log(number2);
 }
  console.log(number2);
 console.log(number);*/


 //example for function scope;

//*debugger*/
function test() {
    let number =100;
    var number2 =200;
    console.log(number);
    console.log(number2);
 }
 /* console.log(number2);//number2 is not defined because it access only in function scope
 console.log(number);*/
 test();


let country = "india";//scope chaining
function outer(){
   let state = "karnataka";
   function inner(){
      let city = "bangalore";
      console.log(country);
      console.log(state);
      console.log(city);
   }
   inner();
}
outer()