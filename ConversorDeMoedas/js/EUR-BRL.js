let cotacaoEurToReal;
async function fetchCotacaoEur() {
  const URL = "https://economia.awesomeapi.com.br/last/EUR-BRL"
  const dados = await fetch(URL);
  const retorno = await dados.json();
  cotacaoEurToReal = parseFloat(retorno.EURBRL.high);
}
fetchCotacaoEur();

const InputEur = document.querySelector("#inputEuro");
InputEur.addEventListener("keyup", () => {
  let valorEurDigitado = InputEur.value;
  InputReais.value = converteEurParaReais(valorEurDigitado);
})

const InputReais = document.querySelector("#inputReal")
InputReais.addEventListener("keyup", () => {
  let valorReaisDigitado = InputReais.value;
  InputEur.value = converteReaisParaEur(valorReaisDigitado);
})

function converteEurParaReais(){
  let valorEurConvertido = InputEur.value * cotacaoEurToReal;
  return valorEurConvertido.toFixed(2);
}

function converteReaisParaEur(){
  let valorReaisConvertido = InputReais.value / cotacaoEurToReal;
  return valorReaisConvertido.toFixed(2);
} 