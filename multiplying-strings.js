function multiply(a, b) {
    const result = (Number(a) * Number(b)).toString();

    if (result == '0') {
        return result;
    } else if (result.charAt(0) == 0) {
        return result.substr(1);
    }else {
        return result;
    }
}

console.log(multiply("1020303004875647366210", "2774537626200857473632627613")) // "0"