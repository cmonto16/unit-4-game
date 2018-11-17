

var random = Math.floor(Math.random() * 120) + 1;
var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber = 0;
var numberOptions = 4;
var crystals = $("#crystals");

function createCrystal(index) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/gem-clip-art-" + index + "_160.png");
    imageCrystal.attr("data-value", randomCrystalValue());
    crystals.append(imageCrystal);
}

function randomTargetNumber() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
}

function randomCrystalValue() {
    return Math.floor(Math.random() * 12) + 1;
}

function resetHTML() {
    $("#wins-text").html(wins);
    $("#losses-text").html(losses);
    $("#computer-guess").html(targetNumber);
    $("#crystals").empty();
    $("#guesses-text").html(counter);
}

function totalReset() {
    randomTargetNumber();
    counter = 0;
    resetHTML();
    resetCrystals();
}

function resetCrystals() {
    for (var i = 0; i < numberOptions; i++) {
        createCrystal(i);
    }
}

function crystalClick () {
    
    counter += parseInt($(this).attr("data-value"));
    $("#guesses-text").html(counter);
    if (counter == targetNumber) {
        wins++;
        totalReset();
    }
    else if (counter > targetNumber) {
        losses++;
        totalReset();
    };
};
$(document).on("click", ".crystal-image", crystalClick);
totalReset();
