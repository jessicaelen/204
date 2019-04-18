//queryselector busca a tag no html// 
let titulo = document.querySelector("h1");
let emocionalDaAna = document.querySelector("p");
let corpo = document.querySelector("body");
let imagem= document.querySelector('img');
let dar = document.querySelector("#darchoco");
let pegar= document.querySelector("#pegarchoco")

//manipulando o html
//innerhtml acessa o conteudo existente na tag podendo modifica-lo//
emocionalDaAna.innerHTML ="ana vai ganhar chocolate";
imagem.src= "https://i.pinimg.com/originals/fa/11/c2/fa11c23eddc07d0dd8b26432750df85e.png";

//manipulando css
//style.(oq quer modificar) modificar o estilo da tag//
titulo.style.color= 'green';
titulo.style.fontSize= '12pt';
corpo.style.backgroundColor="gray";

//trocar o humor da ana//
function darChocolate(){
    corpo.style.backgroundColor= "yellow";
    emocionalDaAna.innerHTML= "a ana fica feliz por ganhar chocolate";
    imagem.src="http://imagensemoldes.com.br/wp-content/uploads/2018/06/Emoji-Sorriso-T%C3%ADmido-PNG.png";
}

function tomarChocolate(){
    corpo.style.backgroundColor="gray";
    imagem.src= "https://i.pinimg.com/originals/fa/11/c2/fa11c23eddc07d0dd8b26432750df85e.png";
}

botao.onclick= darChocolate;
botao.onclick= tomarChocolate;
