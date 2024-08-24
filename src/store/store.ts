import { configureStore } from '@reduxjs/toolkit';
import showComponents from './slices/showComponents';

export const store = configureStore({
  reducer: {
    showComponents,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
