var fs = require('fs')
  , json = fs.readFileSync('./types.json')
  , result = {};
json = JSON.parse(json)
for (var i = json.length - 1; i >= 0; i--) {
  result[json[i].pk] = json[i].fields.name;
}

fs.writeFileSync('types.min.json', JSON.stringify(result, null, 2))
