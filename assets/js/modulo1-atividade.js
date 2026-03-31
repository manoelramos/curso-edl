// MÓDULO 1 QUESTÃO 1
var resposta = "Verdadeiro"; // Resposta correta
$("input[name=questao1]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps = $("input[name=questao1]:checked");
    if (resps.length) {

        resps.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value === "Verdadeiro") {
            $("#true1").addClass("resposta-correta")
            $("#false1").removeClass("resposta-incorreta")
        } else if (value === "Falso") {
            $("#true1").removeClass("resposta-correta")
            $("#false1").addClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta == value ? mensagem = "Correto, os ovos de <i>Aedes aegypti</i> e <i>Aedes albopictus</i> são postos, diretamente sobre a superfície líquida ou em substrato úmido, acima da coluna de água, porém uma mesma postura pode ser distribuída em diferentes substratos “oviposição em saltos”, estratégia que permite aumentar a sobrevivência e dispersão desses mosquitos."
            : mensagem = "Errado, embora possam concentrá-los em um único local de oviposição, a maioria de vezes, uma mesma postura pode ser distribuída em diferentes substratos “oviposição em saltos”, estratégia que permite aumentar a sobrevivência e dispersão desses mosquitos.";
        $("#mensagem1").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem1").empty();
    }
});

// MÓDULO 1 QUESTÃO 2
var resposta2 = "Falso"; // Resposta correta
$("input[name=questao2]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps2 = $("input[name=questao2]:checked");
    if (resps2.length) {

        resps2.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value === "Falso") {
            $("#false2").addClass("resposta-correta")
            $("#true2").removeClass("resposta-incorreta")
        } else if (value === "Verdadeiro") {
            $("#false2").removeClass("resposta-correta")
            $("#true2").addClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta2 == value ? mensagem = "Correto, as arboviroses são doenças multifatoriais, e as medidas de controle vetorial em cada localidade devem ser avaliadas segundo o cenário epidemiológico, características sociodemográficas, capacidade operacional e recursos próprios dos programas de controle locais. Apesar de que a estratégia de disseminação de larvicida apresenta resultados promissores no controle de <i>Aedes</i> (especialmente em criadouros crípticos e de difícil acesso), se considera uma estratégia complementar às ações de rotina nos programas de controle vetorial." :
            mensagem = "Errado, a Organização Pan-Americana de Saúde e o Ministério da Saúde, orientam aos tomadores de decisões para aplicar o Manejo Integrado de Vetores (MIV) para o monitoramento e controle de vetores, visando otimizar o uso de recursos direcionados aos programas de controle, melhorar a eficácia e a eficiência das ações, através de análise situacional, desenho de operação e planejamento, implementação, monitoramento e avaliação.";
        $("#mensagem2").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem2").empty();
    }
});


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
        const questao1Respondida = document.querySelector('input[name="questao1"]:checked');
        const questao2Respondida = document.querySelector('input[name="questao2"]:checked');

        if (!questao1Respondida || !questao2Respondida) {
            // Se uma das questões não foi respondida, impeça o avanço
            event.preventDefault();
        }
    });

    // Adicione um evento de mudança aos inputs das questões
    const inputsQuestao1 = document.querySelectorAll('input[name="questao1"]');
    const inputsQuestao2 = document.querySelectorAll('input[name="questao2"]');
    const inputsQuestao3 = document.querySelectorAll('input[name="questao3"]');

    // Verifique se há respostas armazenadas e redefina as respostas
    const resetAnswers = () => {
        inputsQuestao1.forEach((input) => {
            input.checked = false;
        });

        inputsQuestao2.forEach((input) => {
            input.checked = false;
        });

        inputsQuestao3.forEach((input) => {
            input.checked = false;
        });
    };

    // Chame a função de redefinir respostas ao carregar a página
    resetAnswers();

    function verificarRespostas() {
        // Verifique se ambas as questões foram respondidas
        const questao1Respondida = document.querySelector('input[name="questao1"]:checked');
        const questao2Respondida = document.querySelector('input[name="questao2"]:checked');
        const questao3Respondida = document.querySelector('input[name="questao3"]:checked');

        // Habilite o botão "Avançar" apenas quando ambas as questões forem respondidas
        if (questao1Respondida && questao2Respondida) {
            botaoAvancar.removeAttribute("disabled");
            $("#botaoAvancar").removeClass("desabilitado");
        } else {
            botaoAvancar.setAttribute("disabled", "true");
        }
    }

    inputsQuestao1.forEach(function (input) {
        input.addEventListener("change", verificarRespostas);
    });

    inputsQuestao2.forEach(function (input) {
        input.addEventListener("change", verificarRespostas);
    });
});