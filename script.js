function converter() {
    // Use const para valores que não serão reatribuídos
    const Money = document.getElementById('money');
    const Res = document.getElementById('res');

    // Converta o valor do input para número
    var valorEmDolar = parseFloat(Money.value);

    // Verifique se o valor inserido é um número válido
    if (isNaN(valorEmDolar)) {
        Res.innerHTML = 'Por favor, insira um valor numérico válido.';
        return;
    }

    // Use const para valores fixos que não serão modificados
    const cotacaoDoDolar = 4.82;

    // Realize o cálculo
    var valorEmReal = valorEmDolar * cotacaoDoDolar;
    valorEmReal = valorEmReal.toFixed(2);

    // Atualize o conteúdo da div de resultado
    Res.innerHTML = `Valor convertido: ${valorEmReal} reais`;
}
