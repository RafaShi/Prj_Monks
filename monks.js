document.addEventListener('DOMContentLoaded', function () {
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const botao = document.getElementById('verificar');
    const mensagem = document.getElementById('mensagem');

    let resultadoCorreto;

    function gerarNumero(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function novaConta() {
        const a = gerarNumero(1, 50);
        const b = gerarNumero(1, 50);
        resultadoCorreto = a + b;
        pergunta.textContent = `${a} + ${b}`;
        resposta.value = '';
        mensagem.textContent = '';
    }

    botao.addEventListener('click', function () {
        const valor = Number(resposta.value);
        if (valor === resultadoCorreto) {
            mensagem.textContent = 'Correto!';
            mensagem.style.color = 'green';
        }
        else {
            mensagem.textContent = 'Tente novamente.';
            mensagem.style.color = 'red';
        }
    });

    novaConta();
});
