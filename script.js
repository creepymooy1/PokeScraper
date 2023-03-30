var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://pokedextracker.com/u/creepymooy/galar-dex", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  var value = $(".mobile").children().first().text();
  fs.appendFileSync('pokedextracker.txt', value + '\n');
console.log("found: " + value);
});
