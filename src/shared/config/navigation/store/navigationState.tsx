import React from 'react'
import { BookMarksAsync } from 'pages/bookMarks/ui/bookMarksAsync'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import exp from 'constants'


export enum NavEndpoint{
    BOOKMARKS = 'bookMarks',
    READ = 'read',
    NOT_FOUND = 'notFound'
}

export interface NavigationState{
    endpoint:NavEndpoint
}
const initialState:NavigationState = { endpoint: NavEndpoint.BOOKMARKS}

export const slice = createSlice({
    name:"lox",
    initialState:"lox",
    reducers:{
        change(state, action:PayloadAction<string>){
            
        }
    }
})

export const NavigationSlice = createSlice({
    name: 'Navigation',
    initialState: initialState,
    reducers:{
        changeDestination(state,action: PayloadAction<NavEndpoint>){
            state.endpoint = action.payload
        }
    }
})


export const {changeDestination} = NavigationSlice.actions
export default NavigationSlice.reducer

export const sliceRed = slice.reducer