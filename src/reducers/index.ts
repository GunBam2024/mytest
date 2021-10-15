//2번 정보를 전달해줄 다리같은 역활을 한다.

import PokemonReducer from "./PokemonReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  PokemonReducer,
});

export default rootReducer;
