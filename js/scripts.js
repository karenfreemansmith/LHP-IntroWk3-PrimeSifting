//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
function isPrime(x) {
  for(var i=2; i<x; i++) {
    if(x%i===0) {
      return false;
    }
  }
  return true;
}

function findPrimes(x) {
  var primes=[];
  for(var i=1; i<x; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

$("#findPrimes").click(function() {
  var resultsText="";
  var yourPrimes=findPrimes(parseInt($("#primesTo").val()));

  yourPrimes.forEach(function(prime) {
    resultsText += prime + ", ";
  });
  $("#results").text(resultsText);
});
