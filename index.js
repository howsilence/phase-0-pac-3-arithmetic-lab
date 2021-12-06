function add(a, b) {
    return a + b
};
function subtract(a,b) {
    return a - b
};
function multiply(a,b) {
    return a * b
};
function divide(a,b) {
    return a / b
};
function increment(n) {
    n++
    return n
};
function decrement(n) {
    n--
    return n
};
function makeInt(n) {
   if (parseInt(n, 10)) {
       return n
   }
   if (!parseInt(n, 10)) {
       return n = 0 || NaN
   }
};
function preserveDecimal(n) {
    if (parseFloat(n)) {
        return parseFloat(n)
    } 
    if (!parseFloat(n)) {
        return n = NaN
    }
};