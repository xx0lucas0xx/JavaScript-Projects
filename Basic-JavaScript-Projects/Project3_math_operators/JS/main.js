// ADDITION
function addition() {
    var addition1 = 2 + 3;
    document.getElementById("cat").innerHTML = "2 + 3 =" + addition1;
}

// SUBTRACTION
function subtraction() {
    var subtraction1 = 2 - 3;
    document.getElementById("dog").innerHTML = "2 - 3 =" + subtraction1;
}

// MULTIPLICATION
function multiplication() {
    var multi1 = 2 * 3;
    document.getElementById("bird").innerHTML = " 2 * 3 =" + multi1;
}

// DIVISION
function division() {
    var div1 = 2 / 3;
    document.getElementById("hampter").innerHTML = "3 / 2 =" + div1;
}

// MULTIPUL EQUATIONS
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half then subtracted by 5 equals" + simple_Math;
}

// DIVIDING WITH %
function modulus_Operator() {
    var mafs = 30% 20;
    document.getElementById("luvs").innerHTML = "When you devide 30 by 20 you have a remainder of:" + mafs;
}

// UNARY OPERATOR
function negation() {
    var x = 10;
    document.getElementById("plane").innerHTML = -x;
}

// MAKES VAR POSITIVE
var p = 4;
p++;
document.write(p + "&nbsp;");

// MAKE VAR NEGATIVE
var n = 7.25;
n--;
document.write(n);

// WINDOW POP UP OF RANDOM NUMBER
window.alert(Math.random() * 100);

// MATH OBJECTS
function PI() {
document.getElementById("matics").innerHTML = Math.PI;
}