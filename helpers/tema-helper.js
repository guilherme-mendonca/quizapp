let tema = "claro"

export function trocarTema(body, botaoTema) {
    if (localStorage.getItem("tema")) { /*Se o localStorage.getItem("tema") existir eu pego a variável tema e coloca nela o tema que já existi*/
        tema = localStorage.getItem("tema")
    }

    if (tema === "claro") { /*Se o usuário clickar no botão de tema e o tema que estiver guardado no localStorage for o tema claro, troca para o tema escuro*/
        body.classList.add("escuro")
        tema = localStorage.setItem("tema", "escuro") /*Passar o nome para a gente acessar depois e o valor guardado lá */
        botaoTema.style.justifyContent = "flex-end"
    } else {
        body.classList.remove("escuro")
        tema = localStorage.setItem("tema", "claro")
        botaoTema.style.justifyContent = "flex-start"
    }
}

export function verificarTema(body, botaoTema) {
    if (localStorage.getItem("tema")) { /*Sempre que a página abrir ela vai ver se tem algum tema no localStorage se tiver ela atribui esse tema para a variável 'tema' */
        tema = localStorage.getItem("tema")
    }

    if (tema === "escuro") { /*Se o tema for escuro ele adiciona a classe escuro */
        body.classList.add("escuro")
        botaoTema.style.justifyContent = "flex-end"
    }
}