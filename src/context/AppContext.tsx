import { createContext } from "react";
import { AppState } from "../interface/interface";

type State={
    state?:AppState
}


export const Context=createContext<State>({} as State);