window.cipher = {
  // A
  encode: (offset, string) => {
    let mensajeCodificado = '';
      for (let indice = 0; indice < string.length; indice++) {
        let numeroAscii = string.toUpperCase().charCodeAt(indice); // de letra a numero
        if (numeroAscii === 32){
          mensajeCodificado += ' ' ;
        } else {
        let nuevoNumAscii = (numeroAscii - 65 + offset)%26 + 65;
        let nuevaLetraGenerada = String.fromCharCode(nuevoNumAscii); //de numero a letra
        //mensajeCodificado = mensajeCodificado + nuevoCaracterCodificado;
        mensajeCodificado += nuevaLetraGenerada;
        }
      }
    return mensajeCodificado;
  },
  decode: (offset, string) => {
    let mensajeDescifrado = '';
    for (let indice = 0; indice < string.length; indice++){
      let codLetra = string.charCodeAt(indice);
      if(codLetra === 32){
      mensajeDescifrado+= ' ';
      }else{
      let numeroAscii = (codLetra  + 65 - offset )%26 + 65 ;
      let letraAscii = String.fromCharCode(numeroAscii);
      mensajeDescifrado += letraAscii;
    }
  }

    return mensajeDescifrado;
  },
  //createCipherWithOffset: function(){
    //return;
//} 

}
