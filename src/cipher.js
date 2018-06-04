window.cipher = {
  // funcion codificar
  encode: (offset, string) => {
    let mensajeCodificado = '';
     for (let letra of string){
        let numeroAscii = letra.toUpperCase().charCodeAt(); // de letra a numero
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
  // funcion decodificar
  decode: (offset, string) => {
    let mensajeDescifrado = '';
    for (let letra of string){
      let codLetra = letra.charCodeAt();
      if(codLetra === 32){
      mensajeDescifrado += ' ';
      }else{
      let numeroAscii = (codLetra  + 65 - offset )%26 + 65 ;
      let letraAscii = String.fromCharCode(numeroAscii);
      mensajeDescifrado += letraAscii;
    }
  }
    return mensajeDescifrado;
  },
  createCipherWithOffset: () => {
    return;
  } 
}
 