/* jshint node:true */

(function run () {
  'use strict';

  var sm = require('source-map');

  var rawSourceMap = {
    version: 3,
    file: 'min.js',
    names: ['bar', 'baz', 'n'],
    sources: ['one.js', 'two.js'],
    sourceRoot: 'http://example.com/www/js/',
    mappings: 'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA'
  };

  var smc = new sm.SourceMapConsumer(rawSourceMap);

  console.log(smc.sources);
// [ 'http://example.com/www/js/one.js',
//   'http://example.com/www/js/two.js' ]

  var map = require('./minified.map');

})();
