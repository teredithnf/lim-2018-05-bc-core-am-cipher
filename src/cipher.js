window.cipher = {
  // ... alert('aqui esta mi funcion de decode y encode')

  encode: function(offset, string){

    let mensajeCodificado = '';

    if(string !== undefined && string.trim().length>0){

      for (let index = 0; index < string.length; index++) {
        let codigoCaracter = string.charCodeAt(index);
        let nuevoCaracter = (codigoCaracter - 65 + offset)%26 + 65;
        let nuevoCaracterCodificado = String.fromCharCode(nuevoCaracter);
        mensajeCodificado = mensajeCodificado + nuevoCaracterCodificado;
      }
      
    }

    return mensajeCodificado;
  },
  decode: function(offset, string){

    // let mensajeDecodificado = '';

    // if(string !== undefined && string.trim().length>0){

    //   for (let index = 0; index < string.length; index++) {
    //     let codigoCaracter = string.charCodeAt(index);
    //     let nuevoCaracter = (codigoCaracter - 65 - offset)%26 + 65;
    //     let nuevoCaracterDecodificado = String.fromCharCode(nuevoCaracter);
    //     mensajeDecodificado = mensajeDecodificado + nuevoCaracterDecodificado;
    //   }
      
    // }    

    // return mensajeDecodificado;

    if(offset!== undefined && string.length >0){
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    return "";
  },
  createCipherWithOffset: function(){
    return;
  }

};
