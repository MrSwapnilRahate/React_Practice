import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './createSlice'

export const Store = configureStore (
    {
        reducer: {
        counter: counterSlice,
    },
    }
)