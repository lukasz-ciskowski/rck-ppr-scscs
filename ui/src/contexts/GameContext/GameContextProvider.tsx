import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { GameContext, GameContextDispatch } from "./GameContext";

interface Props {
  children: React.ReactNode;
}

function GameContextProvider({ children }: Props) {
  const [userData, setUserData] = useReducer(reducer, initialState);

  return (
    <GameContextDispatch.Provider value={setUserData}>
      <GameContext.Provider value={userData}>{children}</GameContext.Provider>
    </GameContextDispatch.Provider>
  );
}

export default GameContextProvider;
