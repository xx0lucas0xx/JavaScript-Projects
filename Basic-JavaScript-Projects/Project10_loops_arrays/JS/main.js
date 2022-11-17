function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

let text = "Hi there!";
let length = text.length;

document.getElementById("string").innerHTML = length;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Harp"]
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

var Animals = ["Cat", "Dog", "Hedgehog", "Racoon"];
var Content = "";
var M;
function array_Function() {
    for (M = 0; M < Animals.length; M++) {
    Content += Animals[M] + "<br>";
    }
    document.getElementById("Array").innerHTML = Content;
}

function constant_function() {
    const Musical_Instrument = {type:" guitar ", brand:"Seagull ", color:"Dark Brown ", tuner:"has built in tuner"};
    Musical_Instrument.price = " $600 ";
    document.getElementById("Constant").innerHTML = "The cost of the" +
    Musical_Instrument.type + "was" + Musical_Instrument.price + "and it " + Musical_Instrument.tuner;
}

function maths() {
    let X = 10;
    document.getElementById("math").innerHTML = 23 + X;
}


document.getElementById("Name").innerHTML
= nameFunction("Lucas");

function nameFunction(name) {
    return "Hello " + name;
}

let SCP = {
    Number: 610,
    Class: "Keter ",
    Abilities: "Abnormal Growths ",
    Type_Species: "Paracetic Mutant ",
    Description: function() {
        return "SCP-" + this.Number + "'s abilities include " + this.Abilities
        + ", and it is considered a " + this.Type_Species;
    }
};
document.getElementById("SCP_Des").innerHTML = SCP.Description();

let txt = "";
for (let a = 0; a < 12; a++) {
    if (a === 9) {break;}
    if (a === 5) {continue;}
    txt += "Number " + a + "<br>"
}
document.getElementById("Break").innerHTML = txt;


