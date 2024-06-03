const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(1)
    .then((pokemon) => console.log({ pokemon }))
    .catch( ( err ) => console.error( err ))
    .finally( () => console.log('Finalmente'))
