let display = document.getElementById("display");

function clicar(num) {
let ultimo = conta[conta.length -1];
let operadores = "+-*/";
if (conta === "" && (num === "*" || num === "/")) {
  return;
}
if (operadores.includes(num)) {
    if (operadores.includes(ultimo)) {
      conta = conta.slice(0, -1);
    }
  }
  conta = conta + num;
display.innerText = (conta)
console.log("clicou");
}
function limpar(){
conta = "";
display.innerText = (conta)
}
function resultado (){
let res = eval(conta);
display.innerText = (res);
conta = res;
}
function apagar (){
conta = conta.slice(0, -1);
display.innerText = (conta);
}
let conta = "";

