const listaPaises = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Chile": "Santiago",
    "Colombia": "Bogotá",
    "México": "Ciudad de México",
    "Perú": "Lima"
  };
  
  const paises = document.getElementById('pais');
  const capitales = document.getElementById('capital');
  
  Object.keys(listaPaises).forEach(pais => {
    const option = document.createElement('option');
    option.value = pais;
    option.textContent = pais;
    paises.appendChild(option);
  });
  
  paises.addEventListener('change', (event) => {
    const paisSeleccionado = event.target.value;
  
    capitales.innerHTML = '';
  
    if (paisSeleccionado) {
      const capital = listaPaises[paisSeleccionado];
      
      const option = document.createElement('option');
      option.value = capital;
      option.textContent = capital;
      capitales.appendChild(option);
      capitales.disabled = false;
  
      console.log(`País seleccionado: ${paisSeleccionado}, Capital: ${capital}`);
    } else {
      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = '-- Capital correspondiente --';
      capitales.appendChild(defaultOption);
      capitales.disabled = true;
    }
  });
  