/*
What is datatype?
     what data as contains in variable is known as data type 
     *two types of data type
     #1.primitive data type:- single value data type
         a) string 
         b)number
         c)boolean
         d)undefined
         e)null
         f)symbol
         g)bigint
     #2.non-primitive data type:-
     a)object
     b)Array
     c)function
*/
/*example of data type
let name = "avej"; //string data type
let age = 25;// number data type
let isEmployee = true; //boolean data type*/


/*
a)string:- a string represents a sequence of characters that enclosed b/w the double or single quotes
symbols ("",'',``)
example :-
let name = "allen";
let name = 'allen';
let name = `allen`;


use cases:
-names
-email
-password
-address
-messeges
-product names

*/
// example for immutable string:-

let name = "shankar";
console.log(name); 
name = "avej";//reassigning the value 
console.log(name);//it creates two containers it will dont change the value of first container


/*
b)number:- variable contains numeric value

use cases:
-age
-price
-marks
-salary
-quantity
-percentages

*/
//example for number
let a = 10;
let b = 20;
console.log(a+b);
console.log(typeof (a+b));


/*let price = 500;
let qty = prompt("enter qty")

let total = price*qty; //here if we write a code as string "24"+60 it will prints 2460 (concatenation operator)
console.log(total);*/
//two types of converstions implicit type,explicit type 
//implicit type converstion

/*let price = 500;
let qty = prompt("enter qty")

let total = price+qty;
console.log(total);*/4

//when we get a NaN
let price = 500;
let qty = prompt("enter qty")

let total = price*"four";
console.log(total);


/*
c)boolean:is going to represents only true or false
use cases
- is Employee 
-is student 
-is admin
-is logged in


*/
if (true){
    console.log("if block");
}
else{
    console.log("else block");
}


/*
d) undefined:
use cases:
-when we want to kept a default value as undefined when will user provide a data it will update to that data
we have given a variable and name but we didnt provided any value then it will give as an undefined

*/


/*
e)null:  absence of value

*/
console.log(typeof undefine);
console.log(typeof null);



/*

f) Symbol: it creates unique values



*/
/*
g) Bigint: it is stores very large individual values it represents from suffix n


*/



/*
#2 non primitive data types:
a)object:- stores data in a key value  pairs   
syntax :
key1:value1,
key2:value2,
key3:value3
 it do not allows duplicate keys is going to override with previous value 
*/
//example for object:
  let student={
    name:"shankar",
    age:25,
    course:"python full stack"

  }
  console.log(student.age);//if we want to access only age 

/*
array:going to store heterogeneous data or a multiple data types in a  single variable in the form of square we wants to go with the index value it starts from zero 

*/


