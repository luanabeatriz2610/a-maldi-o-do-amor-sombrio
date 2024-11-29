let musica;

function preload(){
  musica = loadSound("fundo.mp3");
}

function setup(){
  musiaca.play();
  musica.loop();
}

const avança =
document.querySelectorAll(".proximo");
avança.forEach(button =>{
  button.addEventListener('click', function(){
    const atual = document.querySelector('.ativo');
   const proximoPasso = 'passo-'+
   this.getAttribute('data-proximo');
  atual.classList.remove('ativo');
    
    document.getElementByid( proximoPasso).cassList.add
    ('ativo');
 })
}) 
  
