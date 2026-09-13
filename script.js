// CONFIGURAÇÃO DOS SEUS DADOS DE CONTATO
const SEU_NUMERO_WHATSAPP = "5548988713986";  
const SEU_USUARIO_INSTAGRAM = "seu.usuario"; 


const typingElement = document.getElementById("typing-text");
const textToType = " | Dev Front-End";
let index = 0;

function typeEffect() {
    if (index < textToType.length) {
        typingElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// 2. Funções de Redirecionamento
function abrirWhatsApp() {
    const mensagem = encodeURIComponent("Olá Molina! Vi seu portfólio e gostaria de conversar.");
    const url = `https://wa.me/${SEU_NUMERO_WHATSAPP}?text=${mensagem}`;
    window.open(url, "_blank");
}

function abrirInstagram() {
    const url = `https://www.instagram.com/by.devmolina?stkn=MXRhcGgxbnZvaHFheQ==/${SEU_USUARIO_INSTAGRAM}`;
    window.open(url, "_blank");
}

// 3. Adicionar eventos de clique aos botões do WhatsApp e Instagram
document.getElementById("btn-whatsapp-nav").addEventListener("click", abrirWhatsApp);
document.getElementById("btn-whatsapp-hero").addEventListener("click", abrirWhatsApp);
document.getElementById("btn-whatsapp-footer").addEventListener("click", abrirWhatsApp);
document.getElementById("link-whatsapp").addEventListener("click", (e) => {
    e.preventDefault();
    abrirWhatsApp();
});

document.getElementById("btn-instagram-about").addEventListener("click", abrirInstagram);
document.getElementById("link-instagram").addEventListener("click", (e) => {
    e.preventDefault();
    abrirInstagram();
});