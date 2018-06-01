
let btnCifrar =  document.getElementById('btnCifrar');
btnCifrar.addEventListener('click',() => {
    let offset = parseInt(document.getElementById('txtOffset').value);
    let ingMensaje = document.getElementById('ingMensaje').value;
    let encode = cipher.encode(offset, ingMensaje);
    document.getElementById('desMensaje').innerHTML = encode;
} );

let btnDescifrar = document.getElementById('btnDescifrar');
btnDescifrar.addEventListener('click',() => {
    let offset =parseInt(document.getElementById("txtOffset").value);
    let ingMensaje = document.getElementById("ingMensaje").value;
    let decode = cipher.decode(offset, ingMensaje);
    document.getElementById("desMensaje").innerHTML = decode;
});


let btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener("click",() => {
    document.getElementById("txtOffset").value = "";
    document.getElementById("ingMensaje").value = "";
    document.getElementById("desMensaje").innerHTML = "";
});