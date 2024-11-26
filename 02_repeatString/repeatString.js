const repeatString = function(string, number) {
    if (number < 0){
        return "ERROR"
    }
    finalString = ""
    for (i = 0; i < number; ++i) {
        finalString = finalString.concat(string)
    }
    return finalString;
}

// Do not edit below this line
module.exports = repeatString;
