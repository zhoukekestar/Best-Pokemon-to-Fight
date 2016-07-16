var csv = require('csv-parser')
var fs = require('fs')

var data = {};
fs.createReadStream('pokemon.csv')
  .pipe(csv())
  .on('data', function(d) {

    data[d.id] = d.identifier;

  })
  .on('end', function() {

    for (var i = 1; i < 10; i++) {
      fs.writeFileSync('pokemon.json', JSON.stringify(data, null, 2))
    }

  })
