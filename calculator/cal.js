const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const ans = document.getElementById("ans")

function add() {
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let sum = n1 + n2
    console.log(sum)
    ans.innerText = "Answer is:" + sum;
}
function sub() {
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let sum = n1 - n2
    console.log(sum)
    ans.innerText = "Answer is:" + sum;
}
function multi() {
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let sum = n1 * n2
    console.log(sum)
    ans.innerText = "Answer is:" + sum;
}
function divi() {
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let sum = n1 / n2
    console.log(sum)
    ans.innerText = "Answer is:" + sum;
}