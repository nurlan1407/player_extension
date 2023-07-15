import React from 'react'
import { BookMarksAsync } from 'pages/bookMarks/ui/bookMarksAsync'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import exp from 'constants'


export interface ISlice{
    endpoint: number
}
const initialState:ISlice = { endpoint: 1}

export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers:{
        changeDestination(state,action: PayloadAction<number>){
            state.endpoint = action.payload
        }
    }
})


export const {changeDestination} = slice.actions
export default slice.reducer

