
let btnCifrar =  document.getElementById('btnCifrar');
btnCifrar.addEventListener("click",() => {
    let offset = document.getElementById("txtOffset").value;
    let ingMensaje = document.getElementById("ingMensaje").value;
    let encode = cipher.encode(offset, ingMensaje);
    document.getElementById("desMensaje").value = encode;
} );


let btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener("click",() => {
    document.getElementById("txtOffset").value = "";
    document.getElementById("ingMensaje").value = "";
    document.getElementById("desMensaje").value = "";
});