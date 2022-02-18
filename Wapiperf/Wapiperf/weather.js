const axios = require('axios');
axios.post('http://api.openweathermap.org/data/2.5/weather?q=chennai&APPID=2ca71013421096abca3ec1ee27f3b9f1')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });