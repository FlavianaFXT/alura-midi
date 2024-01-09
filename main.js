const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio') {
        
            elemento.play();
      
    }else{
        alert('Elemento não encontrado ou seletor inválido');
    }
}

// let contador = 0;
const tecla = listaDeTeclas[contador]
const instrumento = tecla.classList[1];
//TEMPLATE STRING
const idAudio = `#som_${instrumento}`;


// console.log(instrumento)

//ENQUANTO
// while(contador < tecla.length){
   
//    tecla.onclick = function (){
//         tocaSom(idAudio);
//     };

//     contador = contador + 1;
//     console.log(contador);
// }

for(let contador=0; contador < tecla.length; contador++){
   
    tecla.onkeydown = function(evento.code){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        } 
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
 }


