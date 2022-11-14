function Sentence() { //Concatenate cat string
    var one = "I love my cat";
    var two =  "She is very calm and sweet";
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

function Movie() { //
    var text = "Indiana Jones is a great movie";
    var position = text.search("Indiana");
    document.getElementById("Jones").innerHTML = position;
}

function string_Method() {
    var X = 360;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function percision_Method() {
    var X =1243487.98421489651489651361681;
    document.getElementById("Percision").innerHTML = X.toPrecision(10);
}