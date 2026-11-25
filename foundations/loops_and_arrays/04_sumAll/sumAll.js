const sumAll = function(n , a) {
    let sum = 0;
    if ( n > a) {
    for ( let i = a ; i <= n ; i++ ) {
      sum += i;
    }   

    }
    else if ( a > n ) {
    for ( let i = n ; i <= a ; i++ ) {
     sum += i;
    }
    }
    else sum = "ERROR";
    return sum;

};

// // Do not edit below this line
// module.exports = sumAll;







