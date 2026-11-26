const convertToCelsius = function(fara) {
   const cels = Math.round(( fara - 32 ) / 1.8 );
    return cels ;
};

 const convertToFahrenheit = function(cels) {
   const fara = Math.round(( cels * 1.8 )) + 32 ;
    return fara ;
 };

// // Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


// rough work 
// for conversion of  far to cel and cel to far 

// let fara = ( cels * 1.8) + 32 ;
// let cels = ( fara - 32) / 1.8 ;





