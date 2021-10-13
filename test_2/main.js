"use strict";

let numb1 = 27;
let numb2 = 27.8;
let numb3 = 41.7;
let numb4 = 45;
let numb5 = -11.552;
let numb6 = 0.2;

function roundNumb(numb) {
    var remainderOfFive = numb % 5;
   
    if (remainderOfFive === 0) {
        return numb;
    } else if (remainderOfFive >= 2.5) {
        return (numb-remainderOfFive+5);
    } else {
        if (remainderOfFive < 2.5){
        return (numb-remainderOfFive);}
    }
    }
    
    console.log(roundNumb(numb1));
    console.log(roundNumb(numb2));
    console.log(roundNumb(numb3));
    console.log(roundNumb(numb4));
    console.log(roundNumb(numb5));
    console.log(roundNumb(numb6));