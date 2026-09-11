const input = document.getElementById("idInput");
const botao = document.getElementById("addButton");
const lista = document.getElementById("listaTarefas");

botao.addEventListener("click", function(){
    const txtTarefa = input.value;

    if(txtTarefa.trim() === ""){
        return;
    }

    const novaTarefa = document.createElement("li");

    novaTarefa.textContent = txtTarefa

    lista.appendChild(novaTarefa);

    input.value = "";
});

lista.addEventListener("click", function (event) {

    if(event.target.tagName === "LI") {
        event.target.remove();
    }
});