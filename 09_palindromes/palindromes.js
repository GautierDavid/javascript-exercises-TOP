const palindromes = function (str) {
    let regex = /[A-Za-z]/g;
    return str.toLowerCase().match(regex).reverse().join('') === str.toLowerCase().match(regex).join('');
};

// Do not edit below this line
module.exports = palindromes;
