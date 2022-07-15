import { useContext } from "react";
import { GameContext, GameContextDispatch } from "./GameContext";

export function useUser() {
    return useContext(GameContext)
}

export function useUserDispatch() {
    return useContext(GameContextDispatch)
}