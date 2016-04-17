//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

$("#findPrimes").click(function() {
  var yourPrimes=[];
  var prime=2;
  var yourNumber=parseInt($("#primesTo").val());
  for(i=1; i<=yourNumber; i++) {
    yourPrimes.push(i);
  }
  for(i=1; i<=yourPrimes.length; i++) {
      prime=yourPrimes[i];
      var filtered=yourPrimes.filter(isPrime);
      yourPrimes=filtered;
  }

  $("#results").text(yourPrimes);

  function isPrime(value) {
    return value %prime !== 0 || value=== prime;
  }
});
