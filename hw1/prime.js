#!/usr/bin/env node

// Identify if number is prime or not
var isprime = function(n) {
    var value = 1;
    if (n<3){
	value = 1;
	return value;}
    else{
      for(var i = 2; i < n; i++){
	if((n%i) == 0){
	value = 0;
	break;
	}
	else{}
      }
    return value;
    }
};


// Find first K prime numbers via basic for loop
var firstkprime = function() {
    var arr = [];
    var k = 0;
    var i = 2;
    while(k<100) {
	if(isprime(i)){
	arr.push(i);
	}
	else{}
	i++;
	k = arr.length;
    }
    return arr;
};

// Print to console
var fmt = function(arr) {
    return arr.join(",");
};
out = fmt(firstkprime());
console.log(out);
var outfile = "primes.txt";
var fs = require('fs');
fs.writeFileSync(outfile,out);
