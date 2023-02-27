function Sentence() { //Concatenate cat string
    var one = "I love my cat.";
    var two =  " She is very calm and sweet";
    var Sentence = one.concat(two);
    document.getElementById("Concatenate").innerHTML = Sentence;
}

function slice_Method() { //Slice method Tim
    var Sentence = "It had been a long day at work for Tim."
    var Section = Sentence.slice(35,38)
    document.getElementById("Slice").innerHTML = Section;
}

function Machine() { //Upper case string method
    var text = "I love Machine Girl";
    var result = text.toUpperCase();
    document.getElementById("Girl").innerHTML = result;
}

function Movie() { //search method
    var text = "Indiana Jones is a great movie";
    var position = text.search("Indiana");
    document.getElementById("Jones").innerHTML = position;
}

function string_Method() { //turns var into string
    var X = 360;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function percision_Method() { //shortens number to percision
    var X = 1243487.98421489651489651361681;
    document.getElementById("Percision").innerHTML = X.toPrecision(10);
}

function fixed_Method() { //turns var into string and rounds
    var X = 1738;
    document.getElementById("Fixed").innerHTML = X.toFixed(3);
}

let text = "Hello"; //returns primative value of string
let result = text.valueOf();
    document.getElementById("Hello").innerHTML= result;