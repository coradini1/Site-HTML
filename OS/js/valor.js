// var lanches = {
//   bigMac: { preco: 10, quantidade: 0 },
//   mcClub: { preco: 8, quantidade: 0 },
//   quarteirão: { preco: 14, quantidade: 0 },
//   bigTasty: { preco: 12, quantidade: 0 },
//   mcChickenBacon: { preco: 20, quantidade: 0 },
//   mcNificoBacon: { preco: 13, quantidade: 0 },
// };
// var elementInput = document.getElementById("quantidade");
// var elementTudo = document.getElementById("tudo");
// var elementTotal = document.getElementById("total");

// function atualizaPreco() {
//   var total = 0;
//   for (var lanche in lanches) {
//     total += lanches[lanche].preco * lanches[lanche].quantidade;
//   }
//   elementTotal.innerHTML = total.toFixed(2);
//   console.log(total);
// }

// atualizaPreco();

// elementBigMac.addEventListener("click", function () {
//   lanches.bigMac.quantidade++;
//   console.log(lanches.bigMac.quantidade);
// });

// var lancheAtivo;

// elementInput.addEventListener("change", function () {
//   lanches.bigMac.quantidade = elementInput.value;
//   console.log(lanches.bigMac.quantidade);
//   lancheAtivo = 10 * lanches.bigMac.quantidade;
//   console.log(lanches.bigMac.quantidade);
// });

// elementInput.addEventListener("change", function () {
//   lanches.mcClub.quantidade = elementInput.value;
//   lancheAtivo = lanches.mcClub.preco * lanches.mcClub.quantidade;
//   console.log(lanches.mcClub.quantidade);
// });

// elementInput.addEventListener("change", function () {
//   lanches.quarteirão.quantidade = elementInput.value;
//   lancheAtivo = lanches.quarteirão.preco * lanches.quarteirão.quantidade;
//   console.log(lanches.quarteirão.quantidade);
// });

// elementInput.addEventListener("change", function () {
//   lanches.bigTasty.quantidade = elementInput.value;
//   lancheAtivo = lanches.bigTasty.preco * lanches.bigTasty.quantidade;
//   console.log(lanches.bigTasty.quantidade);
// });

// elementInput.addEventListener("change", function () {
//   lanches.mcChickenBacon.quantidade = elementInput.value;
//   lancheAtivo =
//     lanches.mcChickenBacon.preco * lanches.mcChickenBacon.quantidade;
//   console.log(lanches.mcChickenBacon.quantidade);
// });

// elementInput.addEventListener("change", function () {
//   lanches.mcNificoBacon.quantidade = elementInput.value;
//   lancheAtivo = lanches.mcNificoBacon.preco * lanches.mcNificoBacon.quantidade;
//   console.log(lanches.mcNificoBacon.quantidade);
// });

// elementTudo.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(lancheAtivo);
//   elementTotal.innerText = lancheAtivo;
// });

let formLanche = document.forms[0];
let totalValorLanche = document.getElementById("total");

function onSubmitLanche(e) {
  e.preventDefault();
  let valorLanche = document.getElementById("selectlanche").value;
  let quantidadeLanche = document.getElementById("quantidade").value;
  totalValorLanche.innerHTML = `R$${+valorLanche * +quantidadeLanche}`;
  console.log(`${+valorLanche * +quantidadeLanche}`);
}

window.onload = () => {
  formLanche.onsubmit = onSubmitLanche;
};

function alerta() {
  window.alert("Pedido confirmado!");
}
