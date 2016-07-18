var csv = require('csv-parser')
var fs = require('fs')

var data = {};
fs.createReadStream('pokemon.csv')
  .pipe(csv())
  .on('data', function(d) {

    data[d['en'].toLowerCase()] = d['zh']
  })
  .on('end', function() {

    fs.writeFileSync('pokemon.zh.json', JSON.stringify(data, null, 2))

  })
