import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value : 0,
}

export const counterSlice = createSlice({
    name: counterSlice,
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incementByValue: (state, action) => {
            state.value += action.playload
        }
    }
})

export const { increment, decrement, incrementByValue } = counterSlice.actions

export default counterSlice.reducer