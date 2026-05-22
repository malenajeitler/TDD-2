// Electrons.js
function Electrons() {}
Electrons.prototype.core = function(dice_values) {
    var result = dice_values[dice_values.length - 1] ;
    if(dice_values.length > 5) {
        if(result === 3) {
            result -= 1;
        }
        else {
            result += 10;
        }
    }
    else {
        result += 1;
    }
    return result;
};
