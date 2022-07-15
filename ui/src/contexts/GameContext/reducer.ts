import { GameActions } from "./actions";
import { GameState } from "./types";

export const initialState: GameState = {
  user: null,
};

export function reducer(state: GameState, action: GameActions): GameState {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: {
          username: action.payload.username,
        },
      };
    default:
      return state;
  }
}
