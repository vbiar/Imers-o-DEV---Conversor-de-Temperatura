function conversorTemperatura() {
  var temperatura = parseFloat(document.getElementById("temperatura").value);
  var escalaAtual = document.getElementById("escalaAtual").value;
  var escalaDesejada = document.getElementById("escalaDesejada").value;
  var valorConvertido;
  var temperaturaConvertida;
  var elementoTemperaturaConvertida = document.getElementById("temperaturaConvertida");

  if (escalaAtual === "celsius" && escalaDesejada === "fahrenheit") {
    valorConvertido = ((temperatura * 9) / 5 + 32).toFixed(1);

    temperaturaConvertida =
      "A temperatura em Fahrenheit é de " + valorConvertido + "°F";
    document.getElementById("temperaturaConvertida").innerHTML = temperaturaConvertida;
  } else if (escalaAtual === "kelvin" && escalaDesejada === "celsius") {
    valorConvertido = (temperatura - 273.15).toFixed(1);

    temperaturaConvertida =
      "A temperatura em Celsius é de " + valorConvertido + "°C";
    document.getElementById(
      "temperaturaConvertida"
    ).innerHTML = temperaturaConvertida;
  } else if (escalaAtual === "celsius" && escalaDesejada === "kelvin") {
    valorConvertido = temperatura + 273.15

    temperaturaConvertida =
      "A temperatura em Kelvin é de " + valorConvertido + "K";
    document.getElementById(
      "temperaturaConvertida"
    ).innerHTML = temperaturaConvertida;
  } else if (escalaAtual === "fahrenheit" && escalaDesejada === "celsius") {
    valorConvertido = ((temperatura - 32) * 5 / 9).toFixed(1);

    temperaturaConvertida =
      "A temperatura em Celsius é de " + valorConvertido + "°C";
    document.getElementById(
      "temperaturaConvertida"
    ).innerHTML = temperaturaConvertida;
  } else if (escalaAtual === "fahrenheit" && escalaDesejada === "kelvin") {
    valorConvertido = ((temperatura - 32) * 5 / 9 + 273.15).toFixed(1);

    temperaturaConvertida =
      "A temperatura em Kelvin é de " + valorConvertido + "K";
    document.getElementById(
      "temperaturaConvertida"
    ).innerHTML = temperaturaConvertida;
  } else if (escalaAtual === "kelvin" && escalaDesejada === "fahrenheit") {
    valorConvertido = ((temperatura - 273.15) * 9 / 5 + 32).toFixed(1);

    temperaturaConvertida =
      "A temperatura em Fahrenheit é de " + valorConvertido + "°F";
    document.getElementById(
      "temperaturaConvertida"
    ).innerHTML = temperaturaConvertida;
  } else {
    temperaturaConvertida =
      "Valores inválidos. Favor tentar novamente!";
    document.getElementById(
      "temperaturaConvertida"
    ).innerHTML = temperaturaConvertida;
  }
}
