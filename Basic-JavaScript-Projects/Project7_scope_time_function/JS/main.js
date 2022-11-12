var X = 9; //Global variable
function add_Numbers() {
    document.write(11 + X + "<br>");
}
function add_Numbers1(){
    document.write(X + 91 + "<br>");
}

add_Numbers();
add_Numbers1();

////////////////
function Add_numbers() { //Local variable
    var Y = 9;
    document.write(11 + Y + "<br>");
}
function Add_numbers1() {
    var Y = 3;
    document.write(Y + 91 + "<br>");
}

Add_numbers();
Add_numbers1();

////////////////
var S = 9;
function Add_Numbers() { //Number log function
    console.log(11 + S);
}
function Add_Numbers1() {
    console.log(S + 91);
}
Add_Numbers();
Add_Numbers1();

/////////////////
if (3 < 9) { //if statment
    document.write("The left number is smaller than the one on the right." + "<br>")
}

function get_Date() { //date if statment
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Cigarette() { //cigarette age if else function
    Age = document.getElementById("Age").value;
        if (Age >= 21) {
            Buy = "You are old enough to buy cigarettes."; // smoking bad
        }
        else {
            Buy = "You are not old enough to buy cigarettes";
        }
        document.getElementById("Age?").innerHTML = Buy;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}


