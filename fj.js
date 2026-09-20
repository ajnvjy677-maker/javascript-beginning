
// function calculator(b, c, a) {
//     let d = 0
//     switch (a) {
//         case '-':
//             d = b - c
//             console.log(d);
//             break;
//         case '+':
//             d = b + c
//             console.log(d)
//             break;
//         case '*':
//             d = b * c
//             console.log(d)
//             break;

//         case '/':
//             d = b / c
//             console.log(d)
//             break;

//         default:
//             console.log("faah")
//             break;
//     }
// }
// calculator(4,4,'/');
// let n=1
// while(n<=5){
//     let b=""
//     let a=1
//     while( a<=n){
//         b +="*"
//     }console.log(b)
// }
function offline(price){
    console.log("enjoy your food")
    console.log(price)
}
function online(price){
    console.log("parselling your order")
    total=price+5
    console.log(total)
}
function order(name,price,typeorder){
    console.log(name+" order successfully")
    typeorder(price)
}
order("maggi",120,online)