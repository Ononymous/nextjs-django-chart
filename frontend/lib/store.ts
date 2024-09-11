import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { lineChartReducer } from './features/lineChart/lineChartSlice'
import { barChartReducer } from './features/barChart/barChartSlice'
import { pieChartReducer } from './features/pieChart/pieChartSlice'
import { candleStickReducer } from './features/candleStick/candleStickSlice'

// Combine all reducers
const rootReducer = combineReducers({
  lineChart: lineChartReducer,
  barChart: barChartReducer,
  pieChart: pieChartReducer,
  candleStick: candleStickReducer
})

// creates a store with the root reducer
export const makeStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']