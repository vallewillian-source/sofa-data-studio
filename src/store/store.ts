import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './reducers/api.reducer'

const store = configureStore({
    reducer: {
        apis: apiReducer
    },
  })


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
