console.log("Site Rici & Greg carregado com sucesso!");

function validarNome() {
    let nome = document.getElementById("nome");
    let erroVazio = document.getElementById("erroNomeVazio");
    let erroNumero = document.getElementById("erroNomeNumero");


    if (/[0-9]/.test(nome.value)) {
        nome.classList.add("erro");
        nome.classList.remove("correto");
        erroNumero.classList.remove("d-none");
        erroVazio.classList.add("d-none");


        nome.value = nome.value.replace(/[0-9]/g, "");
        return;
    }

    if (nome.value.trim() === "") {
        nome.classList.add("erro");
        nome.classList.remove("correto");
        erroVazio.classList.remove("d-none");
        erroNumero.classList.add("d-none");
        return;
    }


    if (nome.value.trim().length < 3) {
        nome.classList.add("erro");
        nome.classList.remove("correto");
        erroVazio.classList.add("d-none");
        erroNumero.classList.add("d-none");
        return;
    }


    nome.classList.remove("erro");
    nome.classList.add("correto");
    erroVazio.classList.add("d-none");
    erroNumero.classList.add("d-none");
}


function enviarWhatsApp() {
    let nome = document.getElementById("nome");
    let instrumento = document.getElementById("instrumento");
    let problema = document.getElementById("problema");

    let erroNome = document.getElementById("erroNome");
    let erroInstrumento = document.getElementById("erroInstrumento");
    let erroProblema = document.getElementById("erroProblema");

    let valido = true;


    if (nome.value.trim() === "" || nome.value.trim().length < 3) {
        nome.classList.add("erro");
        nome.classList.remove("correto");
        erroNomeVazio.classList.remove("d-none");
        valido = false;
    } else {
        nome.classList.remove("erro");
        nome.classList.add("correto");
        erroNomeVazio.classList.add("d-none");
    }



    if (instrumento.value.trim() === "") {
        instrumento.classList.add("erro");
        instrumento.classList.remove("correto");
        erroInstrumento.classList.remove("d-none");
        valido = false;
    } else {
        instrumento.classList.remove("erro");
        instrumento.classList.add("correto");
        erroInstrumento.classList.add("d-none");
    }


    if (problema.value.trim() === "") {
        problema.classList.add("erro");
        problema.classList.remove("correto");
        erroProblema.classList.remove("d-none");
        valido = false;
    } else {
        problema.classList.remove("erro");
        problema.classList.add("correto");
        erroProblema.classList.add("d-none");
    }


    if (!valido) return;


    let mensagem = `Olá, meu nome é ${nome.value}. 
Tenho um ${instrumento.value} e preciso de ajuda com o seguinte problema: ${problema.value}`;

    let numero = "5517991133482";

    let link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank");
}


const elementos = document.querySelectorAll(".animar");

const animarScroll = () => {
    const alturaTela = window.innerHeight;

    elementos.forEach(el => {
        const distanciaTopo = el.getBoundingClientRect().top;

        if (distanciaTopo < alturaTela - 100) {
            el.classList.add("mostrar");
        }
    });
};

window.addEventListener("scroll", animarScroll);
animarScroll();

let index = 0;

function atualizarCarousel() {
    const carousel = document.getElementById("carousel");
    const largura = 260;
    carousel.style.transform = `translateX(${-index * largura}px)`;
}


function avancar() {
    const total = document.querySelectorAll(".card-insta").length;
    if (index < total - 1) {
        index++;
    } else {
        index = 0;
    }
    atualizarCarousel();
}

function voltar() {
    const total = document.querySelectorAll(".card-insta").length;
    if (index > 0) {
        index--;
    } else {
        index = total - 1;
    }
    atualizarCarousel();
}


setInterval(avancar, 4000);

