const findTheOldest = function(people) {
    let result = [];
    let age = 0;
    
    people.map(person => {

        if(!person.hasOwnProperty("yearOfDeath")) person.yearOfDeath = new Date().getFullYear();

        if(person.yearOfDeath - person.yearOfBirth > age) {
            age = person.yearOfDeath - person.yearOfBirth;
            result = person;
        }
    });
    
    return result;
  
  };

// Do not edit below this line
module.exports = findTheOldest;
