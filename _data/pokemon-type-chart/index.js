var fs = require('fs');

fs.writeFileSync('types_chart.lowercase.json', (fs.readFileSync('./types.json') + '').toLowerCase());
