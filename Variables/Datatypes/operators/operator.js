
/*
What is an operator?
     It is an special symbol or keyword used to perform operations on value two operant single operants 


     why do we used an operators
     *calculation 

Types of operators 
1)Arthmetic operators = Mathematical operation 
                  ( + , -, * ,/,%)

2)Assignment operator =Assign value to variable
=,+=, -=, *=, /=,%=,

3) Comparision operator:
==,===,!=,!==,>,<,>=,<=


4)Logical operator:
used to combine the multple condition boolean value
&&: use of this is when both conditions will get true that time only is going to writtn value as a true if one condition get false it write false 
! logical or 


5) ternary operator :
is a shortend form of if else
    syntax :condition?  expressionIf true : expressionIf false


6) unary operator:
perform in single operant 
+,-,++,--,type of opertors
+---- it converts to any number it may be a negative number it may be a positive number  
//  - = negates the number
++ (increment)   two types:
1)post increment : (value ++);first it will print the value later it increment the value
2)pre increment :(++ value);first it increment the value later it will print the value

--(decrement)
1)post decrement :(value --);
2)pre decrement :(value -- );



*/



//example of comparion :
// == compares the values
// === compares both values and datatype

let x = 10;
let y = "10";
console.log( x==y);;

//Logical operator:example
console.log(10>15 && 30<=12);
console.log(10>5 && 10<30);

//logical!
console.log(!(10>5 || 30<=12));

console.log(true && false || true && !false);

//example for ternary operator 

let marks = 75;
let result= (marks>=35)? "pass":"fail";
console.log(result);

console.log(typeof ("5"));
console.log(typeof (+"5"));//it prints output as an number because we r using unary operator it converts string to number

console.log(true);
console.log(-false);








