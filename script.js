let tema = "claro"

const botaoTema = document.querySelector(".tema button")
botaoTema.addEventListener("click", trocarTema)

const body = document.querySelector("body")

function trocarTema() {
    if (localStorage.getItem("tema")) { /*Se o localStorage.getItem("tema") existir eu pego a variável tema e coloca nela o tema que já existi*/
        tema = localStorage.getItem("tema")
    }

    if (tema === "claro") { /*Se o usuário clickar no botão de tema e o tema que estiver guardado no localStorage for o tema claro, troca para o tema escuro*/
        const botaoTema = body.classList.add("escuro")
        tema = localStorage.setItem("tema", "escuro") /*Passar o nome para a gente acessar depois e o valor guardado lá */
    } else {
        const botaoTema = body.classList.remove("escuro")
        tema = localStorage.setItem("tema", "claro")
    }
}

function verificarTema() {
    if (localStorage.getItem("tema")) { /*Sempre que a página abrir ela vai ver se tem algum tema no localStorage se tiver ela atribui esse tema para a variável 'tema' */
        tema = localStorage.getItem("tema")
    }

    if (tema === "escuro") { /*Se o tema for escuro ele adiciona a classe escuro */
        body.classList.add("escuro")
    }
}

verificarTema() /*Chama a função */