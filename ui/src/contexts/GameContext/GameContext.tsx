import React from "react";
import { GameActions } from "./actions";
import { initialState } from "./reducer";
import { GameState } from "./types";

export const GameContext = React.createContext<GameState | null>(initialState);
export const GameContextDispatch = React.createContext<
  React.Dispatch<GameActions>
>(() => {});
