function Ride_Function() { //Height to ride boolean function
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "you are too short" : "you are tall enough" ;
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function Vote_Function() { //vote age boolean function
    var Age, Can_vote;
    Height = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "you are too young" : "you are old enough" ;
    document.getElementById("Vote").innerHTML = Can_vote + "to vote.";
}

//////////////////////////////////////////////////////////////CAR CLASS new this
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Ezra = new Vehicle("Dodge","Viper", 2020, "Red");
var Dani = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Nathan = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    "manufactured in" + Erik.Vehicle_Year
    
}

//////////////////////////////////////////////////////////////////

function Person(first, last, age, eye) { //person class
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

const myFather = new Person("Walter", "Rempart", 48, "brown");//const myFather

document.getElementById("dad").innerHTML = //Display age
"My father is " + myFather.age + "."; 

///////////////////////////////////////////////////////////////////////////

function Count_Function() { //count nested function
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}