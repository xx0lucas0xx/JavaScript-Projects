
document.write(typeof "Word"); //declares typeof prints 'string'
document.write("10" + 3); //attacthes a string to a number

console.log(2 + 2); //prints results in console log
console.log(6 > 9); 

document.write(9 == 9); //checks if equal
document.write(12 == 0);

a = "12";
b = 12; 
c = "6";
d = 6;
e = 12;
document.write(a === b); //checks if equal and have same typeof
document.write(a == c);
document.write(e === b);
document.write(b === d);

document.write(6 > 9 || 8 > 7)//or operator
document.write(6 > 9 && 8 > 7)//and operator

function not1() { //not operator function
    document.getElementById("not").innerHTML = !(3 > 9);
}


