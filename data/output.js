var fs = require('fs')
  , types = JSON.parse(fs.readFileSync('./types.json'))
  , names = JSON.parse(fs.readFileSync('./pokemon_names.json'))
  , pokemon_types = JSON.parse(fs.readFileSync('./pokemon_types.json'))
  , result = [];

for (var temp in pokemon_types) {
  var cur = pokemon_types[temp];
  var tps = [];
  for (var i = 0, len = cur.length; i < len; i++)
    tps.push(types[cur[i]]);
  result.push({id: temp, name: names[temp], types: tps})
}

fs.writeFileSync('output.json', JSON.stringify(result, null, 2))
fs.writeFileSync('output.min.json', JSON.stringify(result))

// fs.writeFileSync('types_chart.lowercase.json', (fs.readFileSync('./types_chart.json') + '').toLowerCase());
