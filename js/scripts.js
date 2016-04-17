//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

$("#findPrimes").click(function() {
  var yourPrimes=[];
  var yourNumber=parseInt($("#primesTo").val());
  for(i=1; i<=yourNumber; i++) {
    yourPrimes.push(i);
  }

  $("#results").text(yourPrimes);
});
