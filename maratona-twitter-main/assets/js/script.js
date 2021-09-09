//VAR=>má pratica, não utilizar
//let
//const
//let numero = 0;
//const nome = "Bruna";
//const boleano = false;

//console.log(numero)
//console.log(nome)
//console.log(boleano)
/* 
 operadores logicos
 ==/===
 < / >=
 !=/!==
 */

/*let numero2 = 3;
let numero3 = 5;

let soma = 2 + 2;
let soma2 = numero2 + numero3;

console.log(soma)
console.log(soma2)
console.log(soma2)

 
    

const cabecalho = document.querySelector('header')


*/
const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipal__listaTweets")


function pegarTweet(event) {
    event.preventDefault();

    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea)
}


tweetar.addEventListener('click', pegarTweet);


function criarTweet(tweetTexto) {
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()


    const tweet = {
        nome: "Daniel",
        foto: "./assets/img/ProfilePic.png ",
        usuario: "@danielkenzie",
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }

    listarTemplateTweet(tweet)
}


function listarTemplateTweet(tweet) {

    const { nome, foto, usuario, texto, tempo } = tweet

    //criano elementos para listar o template
    let li = document.createElement("li")
    li.classList.add("conteudoPrincipal__tweets")
    let img = document.createElement("img")
    img.src = foto
    li.classList.add("tweet__fotoPerfil")
    let div = document.createElement("div")
    li.classList.add("tweet__conteudo")
    let h2 = document.createElement("h2")
    h2.innerText = nome
    let span = document.createElement("span")
    span.innerText = `${usuario} - ${tempo}`
    let p = document.createElement("p")
    p.innerText = texto

    //adicionando elementos dentro da div
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    //adicionando elementos dentro da li
    li.appendChild(img)
    li.appendChild(div)
    feed.appendChild(li)
    textarea.value = ""
}