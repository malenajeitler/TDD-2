// Electrons.js
function Electrons() {}
Electrons.prototype.core = function(dice_values) {
    return dice_values[dice_values.length - 1] - 1;
};
