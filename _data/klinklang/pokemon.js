var csv = require('csv-parser')
var fs = require('fs')

var data = {};
fs.createReadStream('pokemon2.csv')
  .pipe(csv())
  .on('data', function(d) {

    console.log(d)
  })
  .on('end', function() {

    // for (var i = 1; i < 10; i++) {
    //   fs.writeFileSync('pokemon.json', JSON.stringify(data, null, 2))
    // }

  })
