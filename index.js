/* função para abrir e fechar o menu lateral quando a tela estiver pequena */

var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0"; 
}
function closemenu(){
    sidemeu.style.right = "-254px"; 
}