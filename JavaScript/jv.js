const btn = document.getElementById('b-tn')
const inp = document.getElementById('in')

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
const outp = document.getElementById('out')
const eml = document.getElementById('em')
const pas = document.getElementById('pw')



form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    if(first.value.trim() === ""){
        outp.innerText +="Enter your First name "
    }

    if(first.value.length > 20){
        outp.innerText +="don't enter long name"
    }

    if(last.value.length > 20){
        outp.innerText +="don't enter long name"
    }

    if(last.value.trim() === ""){
        outp.innerText +="Enter your Last name"
    }
    
    const email =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!eml.value.match(email)){
        outp.innerText +="Enter your Email correctly"
    }

    const pass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,}$/

    if (!pas.value.match(pass)) {
        outp.innerText +="Enter your password correctly"
    }
})
