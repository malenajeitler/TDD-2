// Electrons.js
function Electrons() {}
Electrons.prototype.core = function(dice_values) {
    var electronSum = 0;
    dice_values.forEach((element) => {
        if (element === 3) {
            electronSum += 2;
        }
        else if (element === 5) {
            electronSum += 4;
        }
    })

    return electronSum;
};
