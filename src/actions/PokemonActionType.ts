// 말그대로 타입을 지정해주고 export 를 활용하여 사용할 객체들을 사용할수 잇게 만든다.

export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_FAIL = "POKEMON_FAIL";

export type PokmonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonSprites = {
  front_default: string;
};

export interface pokemonFailDispatch {
  type: typeof POKEMON_FAIL;
}

export interface pokemonSuccessDispatch {
  type: typeof POKEMON_SUCCESS;
  payload: {
    abilities: PokemonAbility[];
    sprites: PokemonSprites;
  };
}

export type PokemonDispatchType = pokemonFailDispatch | pokemonSuccessDispatch;
