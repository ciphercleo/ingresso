let qtdPista = 100;
let qtdSuperior = 200;
let qtdInferior = 400;

function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    switch(tipo) {
        case 'pista':
            if (qtd > qtdPista) {
                alert('Quantidade indisponível para tipo pista');
            } else {
                qtdPista -= qtd;
                document.getElementById('qtd-pista').textContent = qtdPista;
                alert('Compra realizada com sucesso!');
            }
            break;
        case 'superior':
            if (qtd > qtdSuperior) {
                alert('Quantidade indisponível para tipo cadeira superior');
            } else {
                qtdSuperior -= qtd;
                document.getElementById('qtd-superior').textContent = qtdSuperior;
                alert('Compra realizada com sucesso!');
            }
            break;
        case 'inferior':
            if (qtd > qtdInferior) {
                alert('Quantidade indisponível para tipo cadeira inferior');
            } else {
                qtdInferior -= qtd;
                document.getElementById('qtd-inferior').textContent = qtdInferior;
                alert('Compra realizada com sucesso!');
            }
            break;
        default:
            alert('Tipo de ingresso inválido');
            break;
    }
}

function convertStringToInt(str) {
    return parseInt(str);
}
