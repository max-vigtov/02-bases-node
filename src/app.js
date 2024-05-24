const {getAge, getUUID} = require('./plugins');


const getPokemonById = require('./js-foundation/06-promises');

 console.log(getPokemonById(4, (pokemon) => {
    console.log(pokemon);
 }));