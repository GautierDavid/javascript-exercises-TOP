const fibonacci = function(n) {
    if(n < 1) return "OOPS"

    if(typeof(n) === "string") n = Number(n)

    const fib = [1, 1];

    for (let i = 0; fib.length < n; i++) {
      fib.push(fib[i] + fib[i + 1])
    }
    
    return fib.at(-1)
  };

// Do not edit below this line
module.exports = fibonacci;
