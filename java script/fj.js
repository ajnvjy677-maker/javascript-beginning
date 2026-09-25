const add= document.getElementById("count-add")
const wel= document.getElementById("we-l")
const sav = document.getElementById("pr-e")
let coin=0
const a="Welcome to count number web "
const name="arjun"
wel.innerText=a+name
function addcoin(){
    coin += 1
    add.innerText = coin
}
function save(){
    let pre = coin + "-"
    sav.innerText += pre
}
function re(){
    coin=0 
    add.innerText=coin
}
function del(){
    sav.innerText="previous score:"
}