/*
const botao = document.getElementById("bt-dh") 
botao.onclick = function() {
    console.log("43 é a resposta!")
}
*/

// Usando Event Listener
const botao = document.getElementById("bt-dh") 
botao.addEventListener("click", function() {
    console.log("43 é a resposta!")
})