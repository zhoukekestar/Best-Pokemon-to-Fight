var csv = require('csv-parser')
var fs = require('fs')

var data = {};
fs.createReadStream('type.csv')
  .pipe(csv())
  .on('data', function(d) {

    data[d["en"].toLowerCase()] = d["zh"].substring(0, 1);

  })
  .on('end', function() {


    fs.writeFileSync('type.zh.json', JSON.stringify(data, null, 2))


  })
