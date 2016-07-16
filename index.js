var fs = require('fs')
  , mypokemon = JSON.parse(fs.readFileSync('./mypokemon.json'))
  , chart = JSON.parse(fs.readFileSync('./data/types_chart.json'))
  , pokemons = JSON.parse(fs.readFileSync('./data/output.min.json'))

var type2type = function(t1, t2) {
  for (var i = 0, len = chart.length; i < len; i++) {
    if (chart[i].name === t1) {
      var effect = chart[i];
      if (effect.immunes.indexOf(t2) !== -1)
        return {reason: t1 + ' 2 ' + t2 + ' is 0\n', value: 0};
      if (effect.weaknesses.indexOf(t2) !== -1)
        return {reason: t1 + ' 2 ' + t2 + ' is 0.5\n', value: 0.5};
      if (effect.strengths.indexOf(t2) !== -1)
        return {reason: t1 + ' 2 ' + t2 + ' is 2\n', value: 2};
      return {reason: '', value: 1};
    }
  }
  return {reason: '', value: 1};
}

var bestPokemonToFight = function(opponent) {

  var opponent = pokemons[(+opponent) - 1];
  console.log('opponent types:' + opponent.types.join(','))
  for (var i = 0; i < mypokemon.length; i++) {
    var currentPokemon = pokemons[(+mypokemon[i]) - 1];
    var val = 1;
    console.log(opponent.name + ' vs ' + currentPokemon.name);

    var result = 1
      , exp = '1 * '
      , reason = ''
    for (var j = 0; j < opponent.types.length; j++) {
      for (var k = 0; k < currentPokemon.types.length; k++) {
        var t = type2type(opponent.types[j], opponent.types[k])

        result *= t.value;
        exp += ' * ' + t.value
        reason += t.reason;
      }
    }

    console.log('exp:' + exp + ' result:' + result)
    console.log(reason)
  }
}

bestPokemonToFight(2)
