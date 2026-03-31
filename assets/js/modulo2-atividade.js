// MÓDULO 2 QUESTÃO MULTIPLAESCOLHA
var resposta3 = "b"; // Resposta correta
$("input[name=questao3]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps3 = $("input[name=questao3]:checked");
    if (resps3.length) {

        resps3.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value === "b") {
            $("#b").addClass("resposta-correta")
            $("#a, #c, #d").removeClass("resposta-incorreta")
        } else if (value === "a") {
            $("#b").removeClass("resposta-correta")
            $("#c, #d").removeClass("resposta-incorreta")
            $("#a").addClass("resposta-incorreta")
        } else if (value === "c") {
            $("#b").removeClass("resposta-correta")
            $("#a, #d").removeClass("resposta-incorreta")
            $("#c").addClass("resposta-incorreta")
        } else if (value === "d") {
            $("#b").removeClass("resposta-correta")
            $("#a, #c").removeClass("resposta-incorreta")
            $("#d").addClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta3 == value ? mensagem = "Correto, áreas como áreas de serviço, quintais, jardins, varandas, galpões, entre outros, são indicados para instalação de EDL’s, porém em ambientes de sombra e protegidos da chuva e do sol." :
            mensagem = "Errado. As EDL’s devem ser instaladas em ambientes de sombra e protegidos da chuva e do sol, porém devem ser instaladas em locais abertos, para permitir a disseminação do larvicida pelas fêmeas para outros depósitos. Devem ser instaladas até 1,5m aumentando assim a oportunidade de visita das fêmeas de <i>Aedes</i>. As EDL’s devem ficar distante do manuseio de crianças para evitar danos ao dispositivo. O piriproxifem é eficaz em doses muito baixas e praticamente sem toxicidade para vertebrados (incluindo o ser humano e os animais domésticos).";
        $("#mensagem3").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem3").empty();
    }
});

// BOTÃO AVANÇAR
document.addEventListener("DOMContentLoaded", function () {
    const botaoAvancar = document.getElementById("botaoAvancar");

    // Desabilite o botão "Avançar" inicialmente
    botaoAvancar.setAttribute("disabled", "true");
    $("#botaoAvancar").addClass("desabilitado");

    // Adicione um evento de clique ao botão "Avançar"
    botaoAvancar.addEventListener("click", function (event) {
        // Verifique se ambas as questões foram respondidas
        const questao3Respondida = document.querySelector('input[name="questao3"]:checked');

        if (!questao3Respondida) {
            // Se uma das questões não foi respondida, impeça o avanço
            event.preventDefault();
        }
    });

    // Adicione um evento de mudança aos inputs das questões
    const inputsQuestao3 = document.querySelectorAll('input[name="questao3"]');

    // Verifique se há respostas armazenadas e redefina as respostas
    const resetAnswers = () => {
        inputsQuestao3.forEach((input) => {
            input.checked = false;
        });
    };

    // Chame a função de redefinir respostas ao carregar a página
    resetAnswers();

    function verificarRespostas() {
        // Verifique se ambas as questões foram respondidas
        const questao3Respondida = document.querySelector('input[name="questao3"]:checked');

        // Habilite o botão "Avançar" apenas quando ambas as questões forem respondidas
        if (questao3Respondida) {
            botaoAvancar.removeAttribute("disabled");
            $("#botaoAvancar").removeClass("desabilitado");
        } else {
            botaoAvancar.setAttribute("disabled", "true");
        }
    }

    inputsQuestao3.forEach(function (input) {
        input.addEventListener("change", verificarRespostas);
    });
});