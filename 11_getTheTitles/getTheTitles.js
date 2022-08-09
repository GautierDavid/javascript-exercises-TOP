const getTheTitles = function(obj) {
    let result = [];
    for(let i = 0; i < obj.length; i++) {
        result.push(obj[i]["title"])
    }
    return result
  };
  

// Do not edit below this line
module.exports = getTheTitles;
