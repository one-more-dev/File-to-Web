const filePath = document.getElementById('filePath');
const text_list = document.querySelectorAll('[data-radio]');
const listOrder = document.getElementById('list');
const listSeparator = document.getElementById('list_separator');
const lineInput = document.getElementById('lines');
const form = document.getElementsByTagName('form')[0];

let radioSelected = false;

function textOrList(){
    if(text_list[1].checked == true){
        listOrder.disabled = false
        listSeparator.disabled = false
    }else{
        listOrder.disabled = true
        listSeparator.disabled = true    
    }
}

for(let radio = 0; radio<text_list.length; radio++){
    text_list[radio].addEventListener("change",()=> {
        textOrList()
        radioSelected = true
    })
}

form.addEventListener("submit", (e)=>{
    filePath.value.trim()
    if(filePath.value == "" || radioSelected === false){
        e.preventDefault()
        return window.alert("Insert a path and select 'Text' or 'List'")
    }
    if(lineInput.checked){
        lineInput.value = true
    }
    location.href = window.location.href + filePath.value;
})


textOrList()