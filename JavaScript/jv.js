// const n = 50
// for(let i= 1; i<=n; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log("FizzBuzz")
//     }else if(i%3 === 0){
//         console.log("Fizz")
//     }else if(i%5 === 0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }
const cart = [
  { id: 1, name: "Keyboard", price: 1500, qty: 1, inStock: true },
  { id: 2, name: "Mouse", price: 600, qty: 2, inStock: true },
  { id: 3, name: "Monitor", price: 9000, qty: 1, inStock: false },
  { id: 4, name: "USB Cable", price: 200, qty: 3, inStock: true },
];

const h = cart.filter(c => c.inStock === true)
console.log(h)

h.forEach(a =>(
    console.log(a.name+" "+"x"+a.qty+" = "+a.price*a.qty)

))

const m = h.reduce((n,a)=>(
    n = n + a.price*a.qty

),0)
console.log(m)
