//Selcionando o Botao
let buttonSomar = document.querySelector("#somar");
//Selecionando div resultado
let result = document.querySelector(".result");

//Criando fuhção de soma
function soma(a, b){
    return a + b
}

//Escutador de eventos do botao
buttonSomar.addEventListener("click", ()=>{
    let v1 = document.querySelector(".val01").value;
    let v2 = document.querySelector(".val02").value;
    let resultadoDaSoma = soma(Number(v001), Number(v278))
    result.innerHTML = `Resultado da soma: ${resultadoDaSoma}`;
})
