const allCountries = function(element){

  return `
      <div class="country-card">
        <img class="country-flag" src=${element.flag} alt="flag">
        <h4 class="country-name">${element.name}</h4>
        <p class="country-capital">${element.capital}</p>
      </div>
  `
}


export default allCountries
