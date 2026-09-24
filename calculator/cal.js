const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const ans = document.getElementById("ans")
const sign = document.getElementById("sign")
const an = document.getElementById("an-s")

function add() {
    sign.innerText = "+";
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let sum = n1 + n2
    return sum,n
}
function sub() {
    sign.innerText = "-";
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let sum = n1 - n2
    let n =2
    console.log(sum)
    ans.innerText = "Answer is:" + sum;
}
function multi() {
    sign.innerText = "*";
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let sum = n1 * n2
    let n =3
    console.log(sum)
    ans.innerText = "Answer is:" + sum;
}
function divi() {
    sign.innerText = "/";
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let sum = n1 / n2
    let n =4
    console.log(sum)
    ans.innerText = "Answer is:" + sum;
}
function aws(n) {
    let aws = add()
    console.log(n)
    ans.innerText = "Answer is:" + aws;
    
}