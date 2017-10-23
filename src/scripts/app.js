import request from 'superagent'
import {Router} from 'director/build/director'

import allCountries from './templateViews/allCountries.js'

const containerCountries = document.querySelector('.countries-container')

  function changeBackground() {
    let links = document.querySelectorAll('.botones a')
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {
          for (var i = 0; i < links.length; i++) {
            links[i].classList.remove('background-blue');
          };
          this.className += 'background-blue';
      });
      }
  }
  changeBackground();

  function showCountries() {
    request
      .get('https://restcountries.eu/rest/v2/all')
      .then(function (data) {
        let obj = data.body
        return obj
      })
      .then(function (obj) {
          obj.forEach(function (element) {
            containerCountries.innerHTML += allCountries(element)
          })
      })
    }

  function showCountriesByLanguage(lang) {
    // console.log(lang);
    request
      .get('https://restcountries.eu/rest/v2/all')
      .then(function (data) {
        let obj = data.body
        return obj
      })
      .then(function (obj) {
        containerCountries.innerHTML = ''
        obj.forEach(function (element) {
          let language = element.languages[0].iso639_1
          if (language === lang) {
            containerCountries.innerHTML += allCountries(element)
          }
        })

      })
  }

  const routes = {
  '/all': showCountries,
  '/languages/:id': showCountriesByLanguage
  };

const router = Router(routes);
router.init('/');
