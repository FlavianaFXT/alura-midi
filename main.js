const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (idEletoAudio){
document.querySelector(idEletoAudio).play();
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
   
    tecla.onclick = function (){
         tocaSom(idAudio);
     };

     console.log(contador);
 }


