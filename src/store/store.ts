import { configureStore } from '@reduxjs/toolkit';
import wallReducer from './wallsSlice/wallSlice';
import selectedwallReducer  from './selectedwallSlice';

export const store = configureStore({
    reducer: {
        wall: wallReducer,
        selectedwall: selectedwallReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;