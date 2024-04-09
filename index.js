// 1. Fibonacci series :
// ---------------------
//The Fibonacci series is the sequence where each number is the sum of the previous two numbers of the
//sequence. The first two numbers of the Fibonacci series are 0 and 1 and are used to generate the
//Fibonacci series.
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log("Fibonacci Series:");
  console.log(fib);
}
fibonacci(10);

// 2.Factorial
// -----------
function factorial(n) {
  var a = 1;
  for (var i = 1; i <= n; i++) {
    a = i * a;
  }
  console.log(`Factorial of ${n} is:`);
  console.log(a);
}
factorial(6);

// 3.Palindrome
// ------------

function palindrome(data) {
  var a = data.split("");
  var b = [];
  for (var i = 0; i < a.length; i++) {
    b[i] = a[a.length - i - 1];
  }
  if (a.join() === b.join()) {
    console.log("Given String " + data + " is Palindrome");
  } else {
    console.log("Given String " + data + " is Not Palindrome");
  }
}
palindrome("amma");

// 4. Maximum and Minimun
// ----------------------

function maxmin() {
  let n = [5, 3, 7, 2, 10];
  console.log("Maximum value in given array:", Math.max(...n));
  console.log("Maximum value in given array:", Math.min(...n));
}
maxmin();

// 5. Anagrams
// -----------
//An anagram of a string is another string that contains the same characters, only the order of characters can be different. 
// For example, “abcd” and “dabc” are an anagram of each other
function anagrams(str1, str2) {
    let a = str1.toLowerCase().split('').sort().join("")
    let b = str2.toLowerCase().split('').sort().join("")
    if(a === b){
        console.log("Anagram True")
    }else{
        console.log("Anagram False")
    }

}
anagrams("Triangle", "Integral")
