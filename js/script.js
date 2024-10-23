var path = window.location.pathname;
    
// Seleciona o link correto com base na URL
if (path.includes("home.html")) {
    document.getElementById("home-link").classList.add("active");
} else if (path.includes("about.html")) {
    document.getElementById("sobre-link").classList.add("active");
} else if (path.includes("contato.html")) {
    document.getElementById("contato-link").classList.add("active");
} else if (path.includes("hardskills.html")) {
    document.getElementById("hardskills-link").classList.add("active");
} 



document.addEventListener("DOMContentLoaded", function () {
    // Verifica a largura da janela
    function checkWidth() {
        if (window.innerWidth < 1024) {
            // Se a largura for menor que 1024px, mostra a mensagem de bloqueio
            document.querySelector('.mobile-block').style.display = 'flex';
            document.querySelector('.site-content').style.display = 'none';
        } else {
            // Se a largura for maior ou igual a 1024px, esconde a mensagem de bloqueio
            document.querySelector('.mobile-block').style.display = 'none';
            document.querySelector('.site-content').style.display = 'block';
        }
    }

    // Executa a verificação inicial
    checkWidth();

    // Adiciona um evento de resize para verificar a largura ao redimensionar a janela
    window.addEventListener('resize', checkWidth);
});


// Selecionar todos os links clicáveis (cards e links da navbar)
const clickableElements = document.querySelectorAll('a.nav-link, .navbar-brand, .botaoNavbar, .cardPerfil, .cardSociais, .cardLanding, .cardServicos');

// Selecionar o bloco de transição
const transitionBlock = document.getElementById('transition-block');

// Adicionar evento de clique aos links
clickableElements.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir que o link navegue instantaneamente
        
        const link = event.target.closest('a').href; // Pega o link que foi clicado

        // Ativar a animação do retângulo para crescer de cima para baixo
        transitionBlock.style.height = "100%";

        // Aguarde o fim da animação (800ms), depois redirecione
        setTimeout(() => {
            window.location.href = link; // Redireciona para o link clicado
        }, 800); // O tempo deve coincidir com o transition do CSS
    });
});

window.addEventListener('load', () => {
    const transitionBlock = document.getElementById('transition-block');
    
    setTimeout(() => {
        transitionBlock.style.height = "0%"; // Reduz a altura para 0, revelando os elementos
    }, 100); // Pequeno delay para garantir que o retângulo apareça antes de começar a esconder
});



function descricaoCargo1(){
    var descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    return descricao;
}

function descricaoCargo2(){
    var descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    return descricao;
}

function descricaoCargo3(){
    var descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    return descricao;
}

function descricaoCargo4(){
    var descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    return descricao;
}

function updateDescription(title, imageSrc, description) {
    // Atualiza o título do cargo
    document.getElementById('cargoTitle').innerText = title;

    // Atualiza a imagem do cargo
    const imgElement = document.getElementById('cargoImage');
    imgElement.src = imageSrc;
    imgElement.alt = title;

    // Atualiza a descrição do cargo
    document.getElementById('cargoDescription').innerHTML = description;
}

