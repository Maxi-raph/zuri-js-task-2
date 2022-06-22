const a = parseFloat(prompt("Enter First Number"))
const b = parseFloat(prompt("Enter Second Number"))
const operator = prompt("+-*/%")

function calc(arg1, arg2) {
    if (operator == "+") {        
        alert(arg1 + arg2)
    }
    else if (operator == "-") {
        alert(arg1 - arg2)
    }
    else if (operator == "*") {
        alert(arg1 * arg2)
    }
    else if (operator == "/") {
        alert(arg1 / arg2)
    }
    else if (operator == "%") {
        alert(arg1 % arg2)
    }
    else{
        alert("invalid")
    }
}
calc(a,b)