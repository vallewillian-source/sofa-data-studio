import { configureStore } from '@reduxjs/toolkit'
import { routerReducer } from './reducers/router.reducer'

export const store = configureStore({
    reducer: {
        router: routerReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
  })


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
