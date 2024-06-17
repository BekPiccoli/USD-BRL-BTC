let cotacaoDollarToReal;

async function fetchCotacaoDollar() {
  const URL = 'https://economia.awesomeapi.com.br/last/USD-BRL,BTC-BRL';
  const dados = await fetch(URL);
  const retorno = await dados.json();
  cotacaoDollarToReal = parseFloat(retorno.USDBRL.high);
}
fetchCotacaoDollar();


const InputDollar = document.querySelector("#inputDollar");
InputDollar.addEventListener("keyup", () => {
  let valorDollarDigitado = parseFloat(InputDollar.value)
  if (isNaN(valorDollarDigitado)) {
    InputReais.value = "0.00";
  } else {
    InputReais.value = converteDollarParaReais(InputDollar.value);
  }

  //let valorDollarDigitado = InputDollar.value;
  //console.log("Valor Dollar Digitado:", valorDollarDigitado);
  //console.log("Valor convertido:", converteDollarParaReais(valorDollarDigitado))
})
const InputReais = document.querySelector("#inputReal");
InputReais.addEventListener("keyup", () => {
  let valorReaisDigitado = parseFloat(InputReais.value);
  if (isNaN(valorReaisDigitado)) {
    InputDollar.value = "0.00";
  } else {
    InputDollar.value = converteReaisParaDollar(InputReais.value);
  }

  //let valorReaisDigitado = InputReais.value;
  //console.log("Valor Reais Digitado:", valorReaisDigitado);
  //console.log("Valor convertido: ", converteReaisParaDollar(valorReaisDigitado));
})
function converteReaisParaDollar(valor) {
  let valorReaisConvertido = InputReais.value / cotacaoDollarToReal;
  return valorReaisConvertido.toFixed(2);
}
function converteDollarParaReais(valor) {
  let valorDollarConvertido = InputDollar.value * cotacaoDollarToReal;
  return valorDollarConvertido.toFixed(2);
}