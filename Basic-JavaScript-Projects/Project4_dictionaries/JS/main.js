function Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Brown",
        Breed:"German-Shepard",
        Age:5,
        Sound:"Woof!"
    };
    delete Animal.Sound;
    document.getElementById("Delilah").innerHTML = Animal.Sound;
}