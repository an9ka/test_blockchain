"use strict";

let city = ["Москва", "Санкт-Петербург", "Воронеж"];

function  Comma(towns) {
    if (Array.isArray(towns)){
    let result = (towns.join(", ")+".");
    return result;
    }
    return 'It`s not an array';
}



console.log(Comma(city));
