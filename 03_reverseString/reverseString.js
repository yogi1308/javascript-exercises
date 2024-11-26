const reverseString = function(string) {
    let reversedString = ""
    let stringLength = string.length
    for (i = stringLength; i > 0; --i) {
        reversedString = reversedString.concat(string.charAt(i - 1))
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
