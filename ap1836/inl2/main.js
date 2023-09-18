"use strict";

/* Dag Fredriksson och da281a */
/**
 * Uppgift 1
 * =========
 */

const max = function(number1, number2) {
    let result = 0;
    if (number1 >= number2) {
        result = number1;
    } else if (number1 < number2) {
        result = number2;
    }
    return result;
  };
  const min = function(number1, number2) {
    let result = 0;
    if (number1 <= number2) {
        result = number1;
    } else if (number1 > number2) {
        result = number2;
    }
    return result;
  };