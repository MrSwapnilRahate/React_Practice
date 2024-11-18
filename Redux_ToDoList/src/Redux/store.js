import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from './TodoSlice';

export const store = configureStore ({
    reducer: {
        todoSlice: TodoSlice.reducer,
    }
})

export default store