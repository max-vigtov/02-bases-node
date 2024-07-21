const { http } = require('../plugins')

export const getPokemonById = async( id: number|string ): Promise<string> => {
   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

   const pokemon = await http.get( url );
   console.log(pokemon.name);
   return pokemon.name;
    
}