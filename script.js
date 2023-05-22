

var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var muneco = document.querySelector(".contenedor-imagen");
var parrafo = document.querySelector(".contenedor-parrafo");
var subtitulo = document.querySelector(".contenedor-subtitulo");
var resultado = document.querySelector(".contenedor-resultados");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar (){
    ocultarAdelante();
    var textarea = recuperarTexto();
    resultado.textContent = encriptarTexto(textarea);
}

function desencriptar (){
    ocultarAdelante();
    var textarea = recuperarTexto();
    resultado.textContent = desencriptarTexto(textarea);
}

function recuperarTexto (){
    ocultarAdelante();
    var textarea = document.querySelector(".textarea");
    return textarea.value.toLowerCase();
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    parrafo.classList.add("ocultar");
    subtitulo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

        for(var i = 0; i < texto.length; i++){
            if(texto[i]=="a"){
                textoFinal = textoFinal + "ai"
            }
            else if(texto[i]=="e"){
                textoFinal = textoFinal + "enter"
            }
            else if(texto[i]=="i"){
                textoFinal = textoFinal + "imes"
            }
            else if(texto[i]=="o"){
                textoFinal = textoFinal + "ober"
            }
            else if(texto[i]=="u"){
                textoFinal = textoFinal + "ufat"
            }
            else{
                textoFinal = textoFinal + texto[i]
            }
        }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

        for(var i = 0; i < texto.length; i++){
            if(texto[i]=="a"){
                textoFinal = textoFinal + "a"
                i = i+1;
            }
            else if(texto[i]=="e"){
                textoFinal = textoFinal + "e"
                i = i+4;
            }
            else if(texto[i]=="i"){
                textoFinal = textoFinal + "i"
                i = i+3;
            }
            else if(texto[i]=="o"){
                textoFinal = textoFinal + "o"
                i = i+3;
            }
            else if(texto[i]=="u"){
                textoFinal = textoFinal + "u"
                i = i+3;
            }
            else{
                textoFinal = textoFinal + texto[i];
            }
        }
    return textoFinal;
}

const botonCopiar = document.querySelector(".boton-copiar");
    botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".contenedor-resultados").textContent;
    navigator.clipboard.writeText(contenido);
})