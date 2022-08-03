const sumAll = function(...args) {
    
    for(const arg of args) {
        if(arg < 0 || typeof arg !== 'number') return "ERROR"
    }

    let total = 0;
    for(let i = Math.min(...args); i <= Math.max(...args); i++) {
      total += i
    }
    return total
  };

// Do not edit below this line
module.exports = sumAll;
