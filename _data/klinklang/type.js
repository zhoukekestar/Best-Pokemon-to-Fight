var csv = require('csv-parser')
var fs = require('fs')

var data = {
  "normal": "普"
};
fs.createReadStream('type.csv')
  .pipe(csv())
  .on('data', function(d) {

    data[d["Normal"].toLowerCase()] = d["一般"].substring(0, 1);
  })
  .on('end', function() {


    fs.writeFileSync('type.zh.json', JSON.stringify(data, null, 2))


  })
