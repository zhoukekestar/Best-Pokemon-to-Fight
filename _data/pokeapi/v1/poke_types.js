var csv = require('csv-parser')
var fs = require('fs')

var data = {};
fs.createReadStream('poke_types.csv')
  .pipe(csv())
  .on('data', function(d) {
    var id = d.pokemon_id + ''
      , type = d.type_id;

    data[id] = data[id] || [];
    data[id].push(type);
  })
  .on('end', function() {

    for (var i = 1; i < 10; i++) {
      fs.writeFileSync('poke_types.json', JSON.stringify(data, null, 2))
    }

  })
