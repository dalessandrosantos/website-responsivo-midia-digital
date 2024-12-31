const menu = document.querySelector('nav ul')
const menuIcon = document.querySelector('#menu-icon');
const iconMenu = document.querySelector('nav #menu-icon #img');


//Adicionando uma função para quando clicar na barra de menu
menuIcon.addEventListener('click', function() {

    if (iconMenu.getAttribute("src") == 'imagens/menu.png') {
        iconMenu.setAttribute("src", "imagens/close.png");
    }else {
        iconMenu.setAttribute("src", "imagens/menu.png");
    }

    menu.classList.toggle('active');
})


