var rateSlider = document.getElementById("rateSlider");
document.getElementById("rateSliderPreview").innerHTML = rateSlider.value + "%";

rateSlider.oninput = function () {
  document.getElementById("rateSliderPreview").innerHTML = this.value + "%";
}

function compute() {
  var principal = parseInt(document.getElementById("principal").value);
  if (principal < 1 || isNaN(principal)) {
    alert("Enter Positive Amount!");
    document.getElementById("principal").focus();
  } else {
    var rate = parseFloat(document.getElementById("rateSlider").value);
    var years = parseInt(document.getElementById("years").value);
    var simpleInterest = (principal * rate * years) / 100;
    var targetYear = new Date().getFullYear() + years;
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" +
      "at an interest rate of <mark>" + rate + "%</mark>.<br/>" +
      "You will receive an amount of <mark>" + simpleInterest + "</mark>,<br/> " +
      "in the year <mark>" + targetYear + "</mark>";
  }
}
