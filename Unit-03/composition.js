function add2(x) {
    return x + 2
}

function multiplyBy3(x){
    return x * 3
}

function subtract1(x) {
    return x - 1
}

function compose() {
    var functions = arguments;
    return function(input) {
        var value = input;
        for (var i = 0; i < functions.length; i++) {
            value = functions[i](value);
        }
        return value;
    }
}


var allInOne = compose(add2, multiplyBy3, subtract1);
var result = allInOne(5);
console.log(result);

// let x = 5
// let y = subtract1(multiplyBy3(add2(x)))
// console.log(y)