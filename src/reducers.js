import Pokemon from './pokemon';

const initialState = {
  pokemon: Pokemon,
  searchTerm: '',
  pokemonCaught: [],
};

export default function pokemon(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_INPUT_CHANGED':
      const { searchTerm } = action.payload;
      return {
        ...state,
        searchTerm: searchTerm,
        pokemon: searchTerm ? Pokemon.filter( pokemon => pokemon.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1, )
          : Pokemon,
      };

      case 'MARK_CAUGHT':
        return {
          ...state,
          pokemonCaught: [...state.pokemonCaught, action.payload.name],
        };
      
    default:
      return state;
  }
}
