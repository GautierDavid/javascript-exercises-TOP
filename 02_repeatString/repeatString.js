
// default value parameter is a random between 0 and 999 in case there is no num paramater added
const repeatString = function(string, num = Math.floor(Math.random()) * 1000) {
    return num < 0 ? "ERROR" : string.repeat(num)
};

// Do not edit below this line
module.exports = repeatString;
