//EXPRESSIONS AND STATEMENTS
let ten = 10;
console.log(ten *  ten);
var name = "steve wachira";
const greeting = "hello ";
console.log(greeting + name);
console.log(Math.max(2,4,4.5,3.6));
console.log(Math.min(21,14,1.5));
//The maths.min/max function

let YourNumber = Number(prompt("enter a number btwn 1 and 15"));
console.log("The answer is " + YourNumber * YourNumber);
/*The function Number converts the value to a number*/

var name = "steve wachira";
const greeting = "hello ";
console.log(greeting + name);

//There is only one value in JavaScript that is not equal to itself, and that is
//NaN (“not a number”).*/
//console.log(NaN == NaN);

let YourNumber = Number(prompt("enter a number btwn 1 and 15"));
if(!Number.isNaN(YourNumber)) {
console.log("The answer is " + YourNumber * YourNumber);
}
/*The Number.isNaN function is a standard JavaScript function that returns
true only if the argument it is given is NaN . The Number function happens to
return NaN when you give it a string that doesn’t represent a valid number.*/

//console.log(NaN != NaN);

/*let U = Number(prompt("my number"));
if(!Number.isNaN(U)){
	console.log("your answer is " +  U * U );
}else {
	console.log("why haven't you picked a number");
 }*/

//WHILE AND DO LOOPS
 let age = 0;
 while (age <=21) {
 	console.log(age);
 	age = age + 2;
 }

 //FOR LOOP

    for(let x = 2018; x<=2050; x+=4){
    console.log(x);

    }

    for(let x = 2018;  ;x += 1){
    if(x % 21 == 0){
    console.log(x);
    	break;
     }
    }


    for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
    console.log(current);
    break;
    }
    }

    //Dispatching on a value with switch
   /* switch (prompt("what is the name of your course?")){
        case "IT":
        console.log("you are a computer expert");
         break;
        case "teaching":
            console.log("A teacher by professional");
         break;
        case "nothing":
            console.log("you are hopeless");
        default:
            console.log("think again");
         break;
    }*/


//crazy question for interview
/*for(let digit =1; digit <= 100; digit+=1){
    if(digit % 3 == 0){
        console.log("Fizz");
      
    }else if (digit % 5 ==0) {
        console.log("Buzz");
        
    }
    else {
        console.log(digit);
    }
    
}*/

//var age = prompt("what is your age?")
//console.log("steve is "+ age +" years of age");


//Example 2
for(let dgtz = 0; dgtz<=100; dgtz+=1){
    if(dgtz % 3 ==0 && dgtz % 5 ==0){
        console.log("FizzBuzz");
    }else if(dgtz % 3 ==0){
        console.log("Fizz");
    }
     else if(dgtz % 5 ==0){
        console.log("Buzz");
    }
    else{
        console.log(dgtz);
    }
}


//FUNCTIONS
//A function definition is a regular binding where the value of the binding is
//a function.
var a = 21;

function foo(){
a = a * 2;		//what this does is that it takes the value of a * 2(i.e 21 * 2 = 42)
a = a + 3;		//then (42+3)
}



foo();

console.log(a); //prints out (42+3=45)

foo();
foo();

console.log(a); //prints results of (45*2=90) then (90+3=93)then (93*2=186)then (186+3)=189


//Example 2
/*var c = 15;

function foo(baz){ //baz is a parameter.
	c = c * 2;
	c = c + baz;
}

foo (10);

console.log(c);*/


//EXAMPLE 3
var z = 10;
function foo(b){
	z = z * 2;
	z = z + b;
}
foo(5);
foo(25);
foo(100);

console.log(z); //This should print out 250
//This is because (10 * 2 = 20)=>(20+5)=>25
//ie(25 * 2 = 50)=>(50 + 25=75)=>(75*2=150)=>(150+100)=>250

//EXAMPLE 4
var a = 10;
function foo(b){
	a = a * 3;
	a = a + b;
	return a/2;
}
var b = foo(4);

console.log(a);
console.log(b);

function greet(who, again) {
        console.log("hello Mr." +  who  +  again);
}
greet("Steve", " Ryan");

//finding perimeter of a circle
var d=21;
var PI=3.1425;
function perimeter(){
	perimeter=d*PI;
}
perimeter()
console.log("The perimeter of the circle is "+ perimeter + " cm" );

//version 2 of above code
var d=21;
var PI=3.1425;
function perimeter(){
	perimeter=d*PI;
	perimeter=perimeter*perimeter;
}
perimeter();
console.log("The perimeter of the circle is "+ perimeter + " cm" );
//explain how this code works??


function room(no ,town){
	console.log("I used to live at " + town + " house no "+ no);


//I like this dudes!!!
function power(base, exponent = 2){
 	result = 1;
for(let count = 0; count < exponent; count++){
result *= base;
}
return result;
}
console.log(power(2,6));
	/*If you write an = operator after a parameter, followed by an expression, the
	value of that expression will replace the argument when it is not given.
	For example, this version of power makes its second argument optional. If
	you don’t provide it or pass the value undefined , it will default to two, and the
	function will behave like square .*/
}
room("6542","Bahati");
	//a run into the program call the room, which jumps to line 2 "console.log and returns it at function room at line 4.


function number(){
for(number = 1; number <= 100; number++){
		if(number % 3 == 0 && number % 5 == 0){
			console.log(number+" bravoh!!");
        }else if(number % 3 == 0){
			console.log(number+" excellent");
        }else if(number % 5 == 0){
			console.log(number+" awesome!!");
        }
		else{
			console.log(number);
        }
}
    
}
number();

	//I like this a modified version of a for loop, I had done previously.


	//another example doing a different stuff.
function number(){
for(number = 100; number >= 1; number-=2){
		if(number % 3 == 0 && number % 5 == 0){
			console.log(number+" bravoh!!");
        }else if(number % 3 == 0){
			console.log(number+" excellent");
        }else if(number % 5 == 0){
			console.log(number+" awesome!!");
        }
		else{
			console.log(number);
        }
}
}
number();

	//am in love with js
	//Another weird but cool example for beginner
function isEven(number){
	if(number == 0){
	console.log("even");
}else if(number == 1){
	console.log("odd");
}else{
	console.log("invalid option")
}
}
isEven(1);

	//Be calm am going to do something cool on that code soon.
	//hoping you will enjoy what I will do.


	//DATA STRUCTURES
var okey = [20,5,41,7,87,7,15.2];
console.log(okey);
console.log(okey[2+4]);
console.log(okey.length);
console.log(okey["length"]);
	//what console.log(okey)---->does is to list all elements of an array
	//what console.log(okey[2+4])---->does is move, 4 steps forward from the 2nd index of the array.
	//The 2 last parts of the code can have same functionality,but we prefer the second last.when handling property names.


<!----Methods--->
	//Both string and array objects contain, in addition to the length property, a number of properties that hold function values.
	//okey.length shows number of elements on an array.


function jina(first, last){
	console.log("Am called "+first+last);
}
jina("steve", " ryan");
	//example 2//
let jina = "Steve"
console.log(jina.toUpperCase());
console.log(jina.toLowerCase());
console.log(typeof jina.toUpperCase());//this will bring the type of 						the jina, that is a string 
console.log(typeof jina.toUpperCase);//type of function.

	//Every string has a toUpperCase property. When called, it will return a copy of the string in which all letters have been converted to uppercase. There is also toLowerCase , going the other way.

		//methods to manipulate arrays.
let number = [1,2,3,4,5];
number.push(5);
console.log(number);
console.log(number.pop());

	//The push method adds values to the end of an array, and the pop methoddoes the opposite, removing the last value in the array and returning it.

                   //OBJECTS
//Values of the type object are arbitrary collections of properties. One way tocreate an object is by using braces as an expression.

let steve = {
	work: "with diplomat inc group",
	"position" : "web developer & designer"
};
console.log(steve.position);
console.log(steve.work);

			//Example_2
let anObject = {left:1,centre:3, right:2};
console.log(anObject.centre);


		//Braces are used in two ways in javascript
	//@ the begining of a statement
			// #eg 
if(a<=20){
  console.log("This is twenty");//This is the statement
}
			// #eg2
	//Describe an object
let anObject = {left:1,centre:3, right:2};
	console.log(anObject.centre);

	//It is possible to assign a value to a property expression with the = operator.This will replace the property’s value if it already  		existed or create a new property on the object if it didn’t.


 Object.keys //Is a function used to check properties an object has.


    ???/*let number = {
	x:1, y:5, z:12
        };
   console.log(Object.keys(number));*/

 Object.assign //Is a function used to copy properties from one object  		to another.
	//#example 1
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}

//Arrays, then, are just a kind of object specialized for storing sequences of things. If you evaluate typeof [] , it produces "object"

//EXAMPLE
	let journal = [
{events: ["work", "touched tree", "pizza",
"running", "television"],
squirrel: false},
{events: ["work", "ice cream", "cauliflower",
"lasagna", "touched tree", "brushed teeth"],
squirrel: false},
{events: ["weekend", "cycling", "break", "peanuts",
"beer"],
squirrel: true},
/* and so on... */
];



			//The delete operator is used to remove value and property on an object.
let anObject = {left:1,centre:3, right:2};
delete anObject.centre;
console.log(anObject.centre);

	//#example 3
let anObject = {left:1,centre:3, right:2};
delete anObject.centre;
console.log("centre" in anObject);
	//--> the output is "false" since we deleted object with property centre.


