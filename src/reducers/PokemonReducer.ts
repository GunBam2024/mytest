import {
  POKEMON_FAIL,
  POKEMON_SUCCESS,
  PokmonType,
  PokemonDispatchType,
} from "../actions/PokemonActionType";
interface InitialState {
  success: boolean;
  pokemon?: PokmonType;
}

const initalState: InitialState = {
  success: false,
};

const PokemonReducer = (
  state = initalState,
  action: PokemonDispatchType
): InitialState => {
  switch (action.type) {
    case POKEMON_FAIL:
      return {
        ...state,
        success: false,
      };

    case POKEMON_SUCCESS:
      const { abilities, sprites } = action.payload;
      return {
        ...state,
        success: true,
        pokemon: {
          abilities,
          sprites,
        },
      };

    default:
      return state;
  }
};

export default PokemonReducer;
