var _ = require('underscore');
var Cities = require('./cities.js');

var selected = [
  'new-york',
  'london',
  'los-angeles',
  'paris',
  'berlin',
  'miami',
  'san-francisco',
  'hong-kong',
  'milan',
  'tokyo'
];

module.exports =
  _.filter(Cities, function( city ){
    return _.contains(selected, city.slug);
  });
