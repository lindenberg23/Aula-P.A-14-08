let quantidade = 0;

function adicionar() {

    let nome = document.getElementById("inputT").value;

    quantidade = Number(document.getElementById("inputQ").value);

    let preco = document.getElementById("inputP").value;

    document.getElementById("exibidorTexto").innerHTML =
        "O nome do produto é " + nome +
        "<br>Quantidade: " + quantidade +
        "<br>Preço: " + preco;
}

function retirar() {

    let quantidade2 = Number(document.getElementById("inputQe").value);

    quantidade = quantidade - quantidade2;


    document.getElementById("exibidorTexto").innerHTML =
        "O nome do produto é " + document.getElementById("inputT").value +
        "<br>Quantidade: " + quantidade +
        "<br>Preço: " + document.getElementById("inputP").value;

    document.getElementById("exibidorTexto2").innerHTML =
        "Sobrou: " + quantidade + " Itens";
}

function limpar() {

    document.getElementById("inputT").value = "";
    document.getElementById("inputQ").value = "";
    document.getElementById("inputP").value = "";
    document.getElementById("inputQe").value = "";

    document.getElementById("exibidorTexto").innerHTML = "";
    document.getElementById("exibidorTexto2").innerHTML = "";

    quantidade = 0;
}