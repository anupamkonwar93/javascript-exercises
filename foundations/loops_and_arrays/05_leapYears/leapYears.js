const leapYears = function(year) {
    let ver1 = "";
    if ( year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        ver1 = "is a leap year : " ;
    } else {
        ver1 = "not a leap year "
    }
    return ver1
        
};

// Do not edit below this line
module.exports = leapYears;
