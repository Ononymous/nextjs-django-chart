import { configureStore } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  candlestick: [],
  lineChart: [],
  barChart: [],
  pieChart: [],
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setCandlestickData: (state, action: PayloadAction<any>) => {
      state.candlestick = action.payload;
    },
    setLineChartData: (state, action: PayloadAction<any>) => {
      state.lineChart = action.payload;
    },
    setBarChartData: (state, action: PayloadAction<any>) => {
      state.barChart = action.payload;
    },
    setPieChartData: (state, action: PayloadAction<any>) => {
      state.pieChart = action.payload;
    },
  },
});

export const {
  setCandlestickData,
  setLineChartData,
  setBarChartData,
  setPieChartData,
} = chartSlice.actions;

export const store = configureStore({
  reducer: {
    chart: chartSlice.reducer,
  },
});

export const makeStore = () => {
  return store;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>