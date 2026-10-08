
const display = () => {
    const taskdis = document.getElementById('hu')
    let name =document.getElementById('muse')
    let na = document.getElementById("ma")
    if(name.value.trim().length === 0){
        na.innerText = "Enter any tasks"
    }else{
        taskdis.innerHTML += `<div class="hed" id="list">
             
            <h2>${name.value}</h2>
            <button onclick=dele(a)>Delete</button>
            </div>`
    }
}