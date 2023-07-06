import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore"
import { AnyAction, ThunkMiddleware } from "@reduxjs/toolkit"
import { State } from "../store"

export const logger = (store: ToolkitStore<State, AnyAction, [ThunkMiddleware<State, AnyAction>]>) => () => () => {

}