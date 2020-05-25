//Task 1
let a = 3; 
let b = 5;
let c; 

let output
// task descriptions
output = 'let a = 3;\n';
output += 'let b = 5;\n';
output += 'let c;\n';
output += '--------\n';

// using operators
output += 'a + b = ' + (a + b) + '\n';
output += 'a - b = ' + (a - b) + '\n';
output += 'a * b = ' + (a * b) + '\n';
output += 'a / b = ' + (a / b) + '\n';
output += 'a % b = ' + (a % b) + '\n';
output += 'a += b = ' + (a + b) + '\n';
output += 'a -= b = ' + (a) + '\n';
output += 'a *= b = ' + (a * b) + '\n';
output += 'a /= b = ' + (a) + '\n';
output += 'a %= b = ' + (a) + '\n';
output += 'a == b: ' + (a == b) + '\n';
output += 'a != b: ' + (a != b) + '\n';
output += 'a>b: ' + (a > b) + '\n';
output += 'a<b: ' + (a < b) + '\n';
output += '!a && !c: ' + (!a && !c) + '\n';
output += '!a || !c: ' + (!a || !c) + '\n';


alert(output);

//Task 2
//Declare the variable first_name and assign it with the value of your first name;
let first_name = 'Alan';
//Declare the variable last_name and assign it with the value of your last name;
let last_name = 'Sibbald';
//Declare the variable email and assign it with the value of your email;
let email = 'sibb0013@algonquinlive.com';
//Declare the variable output;
let output2;
//Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
//Assign output with gotten expression;
output2 = `My name is ${first_name} ${last_name}. You can contact me at ${email}`;

//Print the output in JavaScript console.
console.log(output2); 