// const axios = require('axios')

axios
  .get('https://api.github.com/users/jobegood49')
  .then(response => console.log(response.data))
  .catch(err => console.log(err))
