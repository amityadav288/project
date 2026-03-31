let a = parseFloat(prompt("Enter First Number : "));
let c = prompt("Enter Oprator : ");
let b = parseFloat(prompt("Enter Second Number : "));


let r = Math.random()
console.log(r)

let result;

if (r > 0.10 && c == "+") {
    result = (a - b)
}
else if (r > 0.10 && c == "-") {
    result = (a + b)
}
else if (r > 0.10 && c == "*") {
    result = (a / b)
}
else if (r > 0.10 && c == "/") {
    result = (a * b)
}
else if (c == "+") {
    result = (a + b)
}
else if (c == "-") {
    result = (a - b)
}
else if (c == "*") {
    result = (a * b)
}
else if (c == "/") {
    result = (a / b)
}
else {
    result = ("Somthing going wrong")
}

console.log(result)

alert(`your result is ${result}`)
