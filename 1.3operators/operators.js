//alert("Hello")

// Operator and Operand
var num1 = 22;
console.log(num1);
num1 = -num1; // - is the unary operator and num1 is operand, becz the - is working on only 1 operand its called unary operator
console.log(num1);

var num2 = 25;
var result = 2 + num2; // + is the binary operator and num2 and 2 is operand, becz the + is working on only 2 operands its called binary operator
console.log(result);

var x = 5;
var y = 2;
// Arithmatics operations
console.log("Result of addition is "+ (x +y ));
console.log("Result of substraction is "+ (x - y));
console.log("Result of multipilication is "+ (x * y));
console.log("Result of division is " + (x /y ));
console.log("Result of exponent is " + (x ** y ));//25
//console.log("Result of x++ is " + (x++ ));//5
console.log("Result of ++x is " + (++x ));

y = y++;// y+1
y += 1;// = y+1
y -=1;// = y-1
y *=y;// = y*y

console.log("Hello " + " - " + " world ");

var firstname = "John";
var lastname = "Doe";

console.log(y);
console.log("Your 1st name is " +firstname+ " and last name is " +lastname+ " hence your fullname is "+firstname+" "+lastname)
console.log(`Your 1st name is ${firstname} and last name is ${lastname} hence your fullname is ${firstname} ${lastname}`);


