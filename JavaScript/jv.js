const btn = document.getElementById('b-tn')
const inp = document.getElementById('in')
const outp = document.getElementById('out')

btn.addEventListener('click', () => {
    outp.innerText= "don't press"
})

inp.addEventListener('input', () =>{
    outp.innerText= "you entered: " +inp.value
} )
const first = document.getElementById('fn')
const last = document.getElementById('ln')
const su = document.getElementById('sub')
const form = document.getElementById('for')

form.addEventListener('submit', (event) => {
    event.preventDefualt()
    console.log("hai");
    
})