const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (idEletoAudio){
document.querySelector(idEletoAudio).play();
}

let contador = 0;

while(contador < listaDeTeclas.length){
   
    listaDeTeclas[contador].onclick = function (){
        tocaSom('#som_tecla_pom');
    };

    contador = contador + 1;
    console.log(contador);
}


