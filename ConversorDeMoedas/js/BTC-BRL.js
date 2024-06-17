let cotacaoBtcToReal;
async function fetchCotacaoBtc() {
  const URL = 'https://economia.awesomeapi.com.br/last/BTC-BRL';
  const dados = await fetch(URL);
  const retorno = await dados.json();
  cotacaoBtcToReal = parseFloat(retorno.BTCBRL.high);
}
fetchCotacaoBtc();



const InputBtc = document.querySelector("#inputBtc");
InputBtc.addEventListener("keyup", () => {
  let valorBtcDigitado = InputReais.value;
  InputReais.value = converteBtcParaReais(valorBtcDigitado);

})

const InputReais = document.querySelector("#inputReal");
InputReais.addEventListener("keyup", () => {
  let valorReaisDigitado = InputReais.value;
  InputBtc.value = converteReaisParaBtc(valorReaisDigitado);
})

function converteBtcParaReais() {
  let valorBtcConvertido = InputBtc.value * cotacaoBtcToReal;
  return valorBtcConvertido;
}
function converteReaisParaBtc() {
  let valorReaisConvertido = InputReais.value / cotacaoBtcToReal;
  return valorReaisConvertido.toFixed(7);
}