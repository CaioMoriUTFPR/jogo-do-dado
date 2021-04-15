
var numeroAleatorio1 = Math.floor(Math.random() * 6) + 1; //1-6

var imagemDadoAleatorio = "dado" + numeroAleatorio1 + ".png"; //dado1.png - dado6.png

var fonteImagemAleatoria = "images/" + imagemDadoAleatorio; //images/dado1.png - images/dado6.png

var imagem1 = document.querySelectorAll("img")[0];

imagem1.setAttribute("src", fonteImagemAleatoria);


var numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;

var fonteImagemAleatoria2 = "images/dado" + numeroAleatorio2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", fonteImagemAleatoria2);


//Se o jogador 1 ganhar
if (numeroAleatorio1 > numeroAleatorio2) {
  document.querySelector("h1").innerHTML = "🚩 Jogador 1 Ganhou!";
}
else if (numeroAleatorio2 > numeroAleatorio1) {
  document.querySelector("h1").innerHTML = "Jogador 2 Ganhou! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Empate!";
}
