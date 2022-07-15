import LoginScreen from "components/LoginScreen/LoginScreen";
import React, { useState } from "react";
import { GameStage } from "./types";

function Game() {
  const [stage, setState] = useState<GameStage>(GameStage.LOGIN);

  const handleNextState = () => setState((p) => p + 1);

  return <>{stage === GameStage.LOGIN && <LoginScreen />}</>;
}

export default Game;
