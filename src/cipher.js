window.cipher = {
  // ... alert('aqui esta mi funcion de decode y encode')
  encode: (offset, string) => {
    let mensajeCodificado = '';
      for (let indice = 0; indice < string.length; indice++) {
        let codigoCaracter = string.toUpperCase().charCodeAt(indice); // de letra a numero
        if (codigoCaracter === 32){
          mensajeCodificado += " "
        } else {
        let nuevoCaracter = (codigoCaracter - 65 + offset)%26 + 65;
        let nuevoCaracterCodificado = String.fromCharCode(nuevoCaracter); //de numero a letra
        //mensajeCodificado = mensajeCodificado + nuevoCaracterCodificado;
        mensajeCodificado += nuevoCaracterCodificado;
        }
      }
    return mensajeCodificado;
  },
  decode:(offset, string) =>{
    let mensajeDescifrado = '';
    for (let indice = 0; indice < string.length; indice++){
      let codLetra = string.toUpperCase().charCodeAt(indice);
      let numeroAscii = (codLetra  + 65 - offset )%26 + 65 ;
      let letraAscii = String.fromCharCode(numeroAscii);
      mensajeDescifrado += letraAscii;

    }

    return mensajeDescifrado;
  },
  //createCipherWithOffset: function(){
    //return;
//} 

}
