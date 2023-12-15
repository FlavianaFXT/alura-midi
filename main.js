function pomSoundPlay(){
    document.querySelector('#som_tecla_pom').play();
}

function clapSoundPlay(){
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick = pomSoundPlay;

