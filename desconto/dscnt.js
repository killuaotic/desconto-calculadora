const nomeClient = prompt("Digite o seu nome: ");
const valorCompra = parseFloat(prompt("Digite o valor da sua compra: "));
const resultado = document.getElementById("resultado");

if (isNaN(valorCompra)) {
    resultado.innerHTML = "Valor da compra inválido. Digite um número.";
} else {
    const usuarioVip = confirm("Você é um usuário VIP? Clique em 'OK' para sim ou 'Cancelar' para não.");
    const valorOriginal = valorCompra;
    let desconto = 0;

    if (usuarioVip) {
        desconto = valorOriginal * 0.2;
    } else if (valorOriginal >= 500) {
        desconto = valorOriginal * 0.15;
    } else if (valorOriginal >= 200) {
        desconto = valorOriginal * 0.1;
    }

    const valorFinal = valorOriginal - desconto;
    const mensagem = "Olá, " + nomeClient + "!<br>" +
        "Valor da compra: R$ " + valorOriginal.toFixed(2) + "<br>" +
        "Desconto aplicado: R$ " + desconto.toFixed(2) + "<br>" +
        "Valor final da compra: R$ " + valorFinal.toFixed(2) + ".";

    resultado.innerHTML = mensagem;
}