//*************Arithmatic operator

let x = 10;
let y = 5;
let result = x+y;
let result1 = x-y;
let result2 = x/y;
let result4 = x % y; 
let result3 = x*y;
let result5 = x ** y;



console.log('Arithmatic result is:' + result);
console.log('Arithmatic result is:' + result1);
console.log('Arithmatic result is:' + result2);
console.log('Arithmatic result reminder is:' + result4);
console.log('Arithmatic result is:' + result3);
console.log('Arithmatic exponential power is:' + result5);

//**************Assignmet operators
let x1 = 10;
let y1 = 20;

x1 -=5; //x=x-5
y1 +=5; //y = y+5;
console.log('value of x1 is:' + x1)
console.log('value of y1 is:' + y1)


//*********comparison operation

let x2 = 10;
let y2 = 5;
let z = '10';
console.log(x2==y2);
console.log(x2==z);
console.log(x2===z);
console.log("not equals to :" + x2!=z); //not equals to 

console.log( x2!==y2); 

//**********logical operators
// &&  logical And
// || logical OR
// ! logical Not

let A = true;
let B = false;
console.log("logical OR operator is " + A||B); //true if any of condition is true
console.log("logical AND operator is : " + A&&B); //true only if both the condition are true
console.log("logical NOT operator is " + !A); //return  true if both the condition is false and vice versa
console.log("greater then and operator: "+ (10>5) && (6<3));
console.log("greater then OR operator: " + (10>5)|| (6<3));

//***** Type operators */
// typeof we can use to find the data type of javascript variable

let firstName = "Arpita";

console.log(typeof firstName);
console.log(typeof 344.6);
console.log(typeof true);

let lastName = new String('gupta');
let num = new Number(123)

console.log(lastName instanceof String );
console.log(num instanceof Number);

//******Bitwise operator */

let a = 1;
let b = 2;
console.log("bitwise operator And operator "+ a & b);
console.log("bitwise operator OR " + a|b);

console.log("XOR operation: " + 2^1); 







