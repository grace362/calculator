function appendItems(value){
    document.getElementById("display").value += value
}
function clearItems(){
    document.getElementById("display").value = ""
}

function resultItems(){
    const result = eval (document.getElementById("display").value);
    document.getElementById("display").value = result
}
function clearLastItems(){
    const clear= document.getElementById("display");
    clear.value = clear.value.slice(0,-1)
}