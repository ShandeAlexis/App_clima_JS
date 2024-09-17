let apy_key = "306701c411f38048606eefd5f5f33db4";
let url_base = "https://api.openweathermap.org/data/2.5/weather";
let kelvin_difference = 273.15
document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${url_base}?q=${ciudad}&appid=${apy_key}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const humedad = data.main.humidity;
  const temperatura = data.main.temp;
  const descripcion = data.weather[0].description;
  const icono = data.weather[0].icon;
  
  const ciudadTitulo = document.createElement('h2')
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;
  const temperaturaInfo = document.createElement('p')
  temperaturaInfo.textContent = `La temperatura es de : ${Math.floor(temperatura-kelvin_difference)}°C`
  const humedadInfo = document.createElement('p')
  humedadInfo.textContent = `La humedad es de : ${humedad}%`
  const iconInfo = document.createElement('img')
  iconInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`
  const descripcionText = document.createElement('p')
  descripcionText.textContent = `La descripcion meteorológica es: ${descripcion} `

  divDatosClima.appendChild(ciudadTitulo)
  divDatosClima.appendChild(iconInfo)
  divDatosClima.appendChild(humedadInfo)
  divDatosClima.appendChild(temperaturaInfo)
  divDatosClima.appendChild(descripcionText)
}
