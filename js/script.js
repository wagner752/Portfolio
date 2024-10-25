var path = window.location.pathname;
    
// Seleciona o link correto com base na URL
if (path.includes("index.html")) {
    document.getElementById("home-link").classList.add("active");
} else if (path.includes("about.html")) {
    document.getElementById("sobre-link").classList.add("active");
} else if (path.includes("contato.html")) {
    document.getElementById("contato-link").classList.add("active");
} else if (path.includes("hardskills.html")) {
    document.getElementById("hardskills-link").classList.add("active");
} 

function checkWidth() {
    if (window.innerWidth < 1024) {
        document.querySelector('.mobile-block').style.display = 'flex';
        document.querySelector('.site-content').style.display = 'none';
    } else {
        document.querySelector('.mobile-block').style.display = 'none';
        document.querySelector('.site-content').style.display = 'block';
    }
}
// Selecionar o bloco de transição
const transitionBlock = document.getElementById('transition-block');

// Função para iniciar a animação
function startTransition(link) {
    transitionBlock.style.height = "100%"; // Ativa a animação do retângulo para crescer de cima para baixo

    // Aguarde o fim da animação (800ms), depois redirecione
    setTimeout(() => {
        window.location.href = link; // Redireciona para o link clicado
    }, 800); // O tempo deve coincidir com o transition do CSS
}

// Função para alterar a página e iniciar a transição
function changePage(link) {
    startTransition(link); // Inicia a animação
}

// Manipulação de eventos de clique para links
document.querySelectorAll('a.nav-link, .navbar-brand, .botaoNavbar, .cardPerfil, .cardSociais, .cardLanding, .cardServicos').forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir que o link navegue instantaneamente
        const link = event.target.closest('a').href; // Pega o link que foi clicado
        changePage(link); // Chama a função para mudar de página
    });
});

// Inicializa a transição ao carregar a página
window.addEventListener('load', () => {
    setTimeout(() => {
        transitionBlock.style.height = "0%"; // Reduz a altura para 0, revelando os elementos
    }, 100); // Pequeno delay para garantir que o retângulo apareça antes de começar a esconder
});

// Interceptar as navegações de página
history.pushState = (f => function pushState() {
    const ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('pushstate'));
    return ret;
})(history.pushState);

history.replaceState = (f => function replaceState() {
    const ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('replacestate'));
    return ret;
})(history.replaceState);

window.addEventListener('popstate', () => {
    // Aqui, você pode iniciar a transição quando o usuário voltar à página anterior
    const currentPage = window.location.href;
    startTransition(currentPage); // Inicia a animação ao voltar
});

// Quando o usuário altera a URL (por exemplo, com o History API)
window.addEventListener('pushstate', () => {
    const currentPage = window.location.href;
    startTransition(currentPage); // Inicia a animação ao mudar a página
});

window.addEventListener('replacestate', () => {
    const currentPage = window.location.href;
    startTransition(currentPage); // Inicia a animação ao substituir a página
});

window.addEventListener('popstate', () => {
    console.log('Popstate event triggered');
    const currentPage = window.location.href;
    
    // Verifica se a cortina já está baixada
    if (transitionBlock.style.height === "100%") {
        console.log('Transition block is currently down, hiding it.');
        transitionBlock.style.height = "0%"; // Tenta subir a cortina
    } else {
        startTransition(currentPage); // Inicia a animação ao voltar
    }
});


function descricaoCargo1(){
    var descricao = "Durante minha trajetória na Gentil Negócios, aperfeiçoei minhas habilidades, finalizei minha graduação e obtive as primeiras certificações na área de TI. Atuei continuamente no suporte técnico, chegando ao nível N3 em serviços específicos, além de ser o responsável pelos atendimentos do time de técnicos em campo. Participei de projetos de implementação de serviços e melhorias, sempre com foco na continuidade e no sucesso do negócio. Ao longo dessa jornada, mantive um desempenho acima da média (avaliado em feedbacks 360° entre os colaboradores) e alinhado aos valores da empresa, recebendo feedbacks construtivos. Em agosto de 2024, tive meu desligamento anunciado (e, aqui, um parêntese: só Deus sabe o porquê disso!), e agora estou em busca de recolocação na área de Cibersegurança."
    return descricao;
}

function descricaoCargo2(){
    var descricao = "Saí da Potigás e entrei na Gentil Negócios em junho de 2021 como estagiário, assumindo a responsabilidade pelo atendimento de N1 e N2 no escritório e nas lojas do Grupo Boticário no RN, CE, MA e PB. Os atendimentos cobriam incidentes e requisições relacionados à infraestrutura e à manutenção de todo o parque tecnológico da Gentil e do Boticário, além de atuar como ponto focal de comunicação entre a indústria e a Gentil Negócios. Dentro de um mês, comecei a colaborar em pequenos projetos de melhoria na empresa e fui efetivado, tornando-me o estagiário mais rapidamente promovido na organização."
    return descricao;
}

function descricaoCargo3(){
    var descricao = " Iniciei meu estágio sendo responsável pelos atendimentos N1 na empresa, realizando a tratativa de incidentes de redes e software. Fui bastante elogiado pelo excelente trabalho em equipe e pela redução significativa de novos incidentes no HelpDesk. Durante esse período, aprendi sobre documentação, boas práticas e virtualização de ambientes, além de contribuir para o desenvolvimento de serviços utilizados pela empresa. Fui sempre metódico e organizado com as demandas que me eram atribuídas. Encerrei meu contrato devido ao fato de a empresa ser uma Sociedade de Economia Mista e não poder contratar novos colaboradores."
    return descricao;
}

function descricaoCargo4(){
    var descricao = "Em paralelo ao estágio na Potigás, fui Bolsista de Apoio Técnico no LabInfo (Laboratório de Informática do Centro de Biociências da UFRN), onde, junto com meu time, éramos responsáveis por prestar suporte técnico a todo o setor da UFRN. Realizávamos atendimentos N1 e N2, manutenção de hardware, redes e sistema de som, além de gerenciar e realizar a manutenção preventiva em todos os computadores do setor, garantindo a operação eficiente do parque tecnológico."
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

