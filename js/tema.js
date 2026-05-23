function aplicarAparencia(modo, cor) {
    document.body.setAttribute("data-mode", modo);
    document.body.setAttribute("data-accent", cor);

    localStorage.setItem("grahaniaModo", modo);
    localStorage.setItem("grahaniaCor", cor);

    marcarAtivos();
}

function mudarModo(modo) {
    const corAtual = localStorage.getItem("grahaniaCor") || "yellow";
    aplicarAparencia(modo, corAtual);
}

function mudarCor(cor) {
    const modoAtual = localStorage.getItem("grahaniaModo") || "dark";
    aplicarAparencia(modoAtual, cor);
}

function carregarAparencia() {
    const modo = localStorage.getItem("grahaniaModo") || "dark";
    const cor = localStorage.getItem("grahaniaCor") || "yellow";

    document.body.setAttribute("data-mode", modo);
    document.body.setAttribute("data-accent", cor);

    marcarAtivos();
}

function marcarAtivos() {
    const modo = localStorage.getItem("grahaniaModo") || "dark";
    const cor = localStorage.getItem("grahaniaCor") || "yellow";

    document.querySelectorAll("[data-mode-button]").forEach((botao) => {
        botao.classList.remove("theme-button-active");

        if (botao.dataset.modeButton === modo) {
            botao.classList.add("theme-button-active");
        }
    });

    document.querySelectorAll("[data-accent-button]").forEach((botao) => {
        botao.classList.remove("theme-button-active");

        if (botao.dataset.accentButton === cor) {
            botao.classList.add("theme-button-active");
        }
    });
}

document.addEventListener("DOMContentLoaded", carregarAparencia);