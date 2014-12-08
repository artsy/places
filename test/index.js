var Cities = require('../index.js').Cities,
    FeaturedCities = require('../index.js').FeaturedCities,
    _ = require('underscore');

describe('Cities', function() {

  it('contains a list of cities', function(done) {
    Cities.should.be.instanceof(Array);
    Cities.length.should.not.equal(0);
    done();
  });

  it('contains New Delhi', function(done) {
    var nd = _.find(Cities, function(city){
      return city.slug == 'new-delhi';
    });
    nd.should.be.instanceof(Object);
    done();
  });

});

describe('Featured cities', function() {

  it('contains a only a list of featured cities', function(done) {
    FeaturedCities.should.be.instanceof(Array);
    FeaturedCities.length.should.equal(9);
    done();
  });

  it('contains New York', function(done) {
    var ny = _.find(FeaturedCities, function(city){
      return city.slug == 'new-york';
    });
    ny.should.be.instanceof(Object);
    done();
  });

});