window.cipher = {
  // ... alert('aqui esta mi funcion de decode y encode')
  encode: function(offset, string){
    let mensajeCodificado = '';
      for (let indice = 0; indice < string.length; indice++) {
        let codigoCaracter = string.charCodeAt(indice); // de letra a numero
        let nuevoCaracter = (codigoCaracter - 65 + offset)%26 + 65;
        let nuevoCaracterCodificado = String.fromCharCode(nuevoCaracter); //de numero a letra
        mensajeCodificado = mensajeCodificado + nuevoCaracterCodificado;
      }
    return mensajeCodificado;
  },
  decode: function(offset, string){
    let mensajeDescifrado = '';
    for (let indice = 0; indice < string.length; indice++){
      let codLetra = string.charCodeAt(indice);
      let numeroAscii = (codLetra  + 65 - offset )%26 + 65 ;
      let letraAscii = String.fromCharCode(numeroAscii);
      mensajeDescifrado = mensajeDescifrado + letraAscii;

    }

    return mensajeDescifrado;
  },
  createCipherWithOffset: function(){
    return;
  }

}
