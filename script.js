(function(){
    function compute() {
        var principal = parseInt(document.getElementById("principal").value);
        var rate = parseFloat(document.getElementById("rate").value);
        var years = parseInt(document.getElementById("years").value);
        var simpleInterest = (principal * rate * years) / 100;
        var targetYear = new Date().getFullYear() + years;
        document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
            "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
            "You will receive an amount of <mark>" + simpleInterest + "</mark>,<br/> " +
            "in the year <mark>" + targetYear + "</mark>";

    }

    function getSliderValue() {
        document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
    }

    function validateAmount() {
        var intPrincipal = parseInt(document.getElementById("principal").value);
        if (intPrincipal < 1) {
            alert("Enter a positive number");
            document.getElementById("principal").focus();
        }
    }
});
