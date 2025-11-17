document.addEventListener('DOMContentLoaded', function () {

    const menuBtn = document.getElementById('menu-btn');
    const navUl = document.querySelector('nav ul');
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const botao = document.getElementById('verificar');
    const mensagem = document.getElementById('mensagem');

    // Variável para armazenar o resultado correto da operação
    let resultadoCorreto;


    /* MENU-BTN → IR PARA menu.html*/

    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            window.location.href = "menu.html"; // Redireciona para a página do menu
        });
    }


    /*FUNÇÕES DO SISTEMA DE SEGURANÇA*/


    // Função para gerar um número aleatório entre min e max
    function gerarNumero(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Função para criar uma nova operação matemática para verificação
    function novaConta() {
        if (!pergunta) return;
        const a = gerarNumero(1, 50);
        const b = gerarNumero(1, 50);
        resultadoCorreto = a + b;
        pergunta.textContent = `${a} + ${b}`;
        resposta.value = '';
        mensagem.textContent = '';
    }

    // Adiciona evento ao botão de verificação
    if (botao) {
        botao.addEventListener('click', function () {
            const valor = Number(resposta.value); // pega o valor digitado e transforma em número
            if (valor === resultadoCorreto) {
                mensagem.textContent = 'Correto!';
                mensagem.style.color = 'green';
            } else {
                mensagem.textContent = 'Errado';
                mensagem.style.color = 'red';
            }
        });

        // Inicializa a primeira operação
        novaConta();
    }



    /*REDIRECIONAR BOTÕES DA CATEGORIA*/


    const categorias = document.querySelectorAll(".categoria-btn"); // seleciona todos os botões de categoria

    // Para cada botão de categoria, adiciona evento de clique
    categorias.forEach(item => {
        item.addEventListener("click", () => {
            const pagina = item.dataset.pagina || "monks.html";
            window.location.href = pagina; // redireciona para a página correspondente
        });
    });

});
