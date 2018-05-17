function validar(){
    var name = document.getElementById("name").value;
    var reversed = "";
    var resultado = document.getElementById("results");

    for(var i = name.length - 1; i >= 0; i--){
        reversed += name[i];
    }
    resultado.textContent = reversed;
}