import { configureStore } from '@reduxjs/toolkit';
import data1Slice from './data1Slice';

const store = configureStore({
    reducer: {
        data1: data1Slice,
    }
});

export default store;