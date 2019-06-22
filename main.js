
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   console.log(JSON.stringify(myJson));
  });

