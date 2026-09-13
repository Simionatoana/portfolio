function enviarWhats() {
   
    const numeroTelefone = "5519991133736"; 

    const marca = document.getElementById("marca").value;
    const defeito = document.getElementById("defeito").value;

    const mensagem = `Olá, gostaria de um orçamento!\n- *Marca:* ${marca}\n- *Problema:* ${defeito}`;

    const mensagemFormatada = encodeURIComponent(mensagem);

    window.open(`https://wa.me/${numeroTelefone}?text=${mensagemFormatada}`, "_blank");
}