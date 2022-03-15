var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var intPrincipal = IntFloat(principal);
var floatRate = parseFloat(rate);
var intYears = parseInt(years);

function compute() {
    var simpleInterest = (floatPrincipal * floatRate * IntYears) / 100;
    var targetYear = new Date().getFullYear() + intYears;
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + intPrincipal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + floatRate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + simpleInterest + "</mark>,<br/> " +
        "in the year <mark>" + targetYear + "</mark>";

}

function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}

function validateAmount() {
    if (intPrincipal < 1) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
