var _ = require('underscore');
var Cities = require('./cities.js');

module.exports = [
  _.findWhere(Cities, {slug:'new-york'}),
  _.findWhere(Cities, {slug:'london'}),
  _.findWhere(Cities, {slug:'los-angeles'}),
  _.findWhere(Cities, {slug:'paris'}),
  _.findWhere(Cities, {slug:'berlin'}),
  _.findWhere(Cities, {slug:'miami'}),
  _.findWhere(Cities, {slug:'san-francisco'}),
  _.findWhere(Cities, {slug:'hong-kong'}),
  _.findWhere(Cities, {slug:'milano'}),
  _.findWhere(Cities, {slug:'sao-paolo'}),
  _.findWhere(Cities, {slug:'tokyo'})
];

