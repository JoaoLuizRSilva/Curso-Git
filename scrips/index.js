let buttonSomar = document.querySelector("#somar");
let result = document.querySelector(".result");
function soma(a, b){
    return a + b
}

buttonSomar.addEventListener("click", ()=>{
    let v1 = document.querySelector("#val01").value;
    let v2 = document.querySelector("#val02").value;
    let resultadoDaSoma = soma(Number(v1), Number(v2))
    result.innerHTML = `Resultado da soma: ${resultadoDaSoma}`;
})
