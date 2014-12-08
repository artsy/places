
# Cities

Extracts @dzucconi's cities component into a tiny module to share between Artsy web apps. Overkill? Only you can be the judge of that.

## Example

````coffeescript
{Cities} = require('cities');

ny = _.findWhere Cities, slug: 'new-york'
````

## License

MIT