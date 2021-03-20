const showConnexion = document.getElementById('identification')
const backToMain = document.querySelector('.accueil')
const hide = document.getElementById('main')
const show = document.getElementById('second')

showConnexion.addEventListener('click', () =>
{
    showConnexion.style.backgroundColor = "#DBD6D2";
    showConnexion.style.color = "#383D42";
    backToMain.style.backgroundColor = "#383D42";
    backToMain.style.color = "#DBD6D2";
    hide.style.display = "none";
    show.style.display = "block";
})

backToMain.addEventListener('click', () =>
{
    backToMain.style.backgroundColor = "#DBD6D2";
    backToMain.style.color = "#383D42";
    showConnexion.style.backgroundColor = "#383D42";
    showConnexion.style.color = "#DBD6D2";
    hide.style.display = "flex";
    show.style.display = "none";
})

