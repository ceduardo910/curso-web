/*var resposta = confirm("Deseja Exlcuir?")
console.log (resposta);*/

const a = 10
const b = 33

function somar(a, b) {
    return a + b;
}

//console.log (somar(2,5));

document.querySelector("#calcular").addEventListener("click", function () {
    let valora = document.querySelector("#valora").value;
    let valorb = document.querySelector("#valorb").value;
    if (valora.length > 0 && valorb.length > 0) {
        alert(parseInt(valora) + parseInt(valorb));
    }else{
        alert("Digite os Valores do cálculo")
    }
});


    