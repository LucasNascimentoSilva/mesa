let audios = [
    {caminho:'audios/Cavalo.mp3', legenda: 'cavalo'}, 
    {caminho:'audios/aimamae.mp3', legenda: 'Ai mamae'},
    {caminho:'audios/receba.mp3', legenda: 'receba'},
    {caminho:'audios/carinha.mp3', legenda: 'oia carinha'},
    {caminho:'audios/mds.mp3', legenda: 'meu deus'},
    {caminho:'audios/gas.mp3', legenda: 'Ó gas'},
    {caminho:'audios/fla.mp3', legenda: 'flamengo'},
    {caminho:'audios/ajuda.mp3', legenda: 'ajuda yoda'},
    {caminho:'audios/paulo.mp3', legenda: 'paulinho'},
];
let botoes = document.querySelectorAll('.butao');
let legendas = document.querySelectorAll ('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector ('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
       let som = audios[botao.getAttribute('data-item')];
       audioTag.setAttribute('src', som.caminho);
       audioTag.addEventListener('loadeddata', () => {
        audioTag.play();
       });
    });
});