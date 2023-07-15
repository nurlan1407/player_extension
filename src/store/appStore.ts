import { combineReducers, configureStore } from "@reduxjs/toolkit";
import NavigationReducer from "shared/config/navigation/store/navigationState"
import SliceRed from "shared/config/navigation/store/slice"
export const setupStore = () =>(
    configureStore({
        reducer:{
            one: NavigationReducer,
            two: SliceRed
        }
    })
)
export const store = configureStore({
    reducer: {
      one: NavigationReducer,
      two: SliceRed
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch