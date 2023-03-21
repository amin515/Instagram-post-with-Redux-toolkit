import { configureStore } from '@reduxjs/toolkit';
import timelineSlice from '../features/Timeline/timelineSlice';


export const store = configureStore({
  reducer: {
    timeline : timelineSlice
  },
});
