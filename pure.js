//EXPRESSIONS AND STATEMENTS
let ten = 10;
console.log(ten *  ten);
var name = "steve wachira";
const greeting = "hello ";
console.log(greeting + name);
console.log(Math.max(2,4,4.5,3.6));
console.log(Math.min(21,14,1.5));
//The maths.min/max function

/*let YourNumber = Number(prompt("enter a number btwn 1 and 15"));
console.log("The answer is " + YourNumber * YourNumber);
The function Number converts the value to a number*/

/*var name = "steve wachira";
const greeting = "hello ";
console.log(greeting + name);*/

//There is only one value in JavaScript that is not equal to itself, and that is
//NaN (“not a number”).*/
//console.log(NaN == NaN);

/*let YourNumber = Number(prompt("enter a number btwn 1 and 15"));
if(!Number.isNaN(YourNumber)) {
console.log("The answer is " + YourNumber * YourNumber);
}
The Number.isNaN function is a standard JavaScript function that returns
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

