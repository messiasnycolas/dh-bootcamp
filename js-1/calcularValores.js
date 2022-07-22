
function calcularValor(nomeProduto, valorProduto) {
    const pegarFrete = () => {
        switch (true) {
            case valorProduto > 4000:
                return 700;
            case valorProduto > 2000:
                return 450;
            case valorProduto > 0:
                return 300;
            default:
                throw new Error('Valor do produto inválido');
        }
    }
    const formatarValor = (valorNumeral) => `R$${String(valorNumeral.toFixed(2)).replace('.', ',')}`;

    const valorFrete = pegarFrete();
    const valorFinal = valorFrete + valorProduto;

    console.log(`O produto ${nomeProduto} custa ${formatarValor(valorProduto)}. Seu custo de envio é
    ${formatarValor(valorFrete)}. Portanto, o preço final é ${formatarValor(valorFinal)}.`);
}


calcularValor('Macbook', 2500);
calcularValor('Celular', 500);
calcularValor('Playstation', 4500);
