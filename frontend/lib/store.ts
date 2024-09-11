import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { lineChartReducer } from './features/lineChart/lineChartSlice'
import { barChartReducer } from './features/barChart/barChartSlice'
import { pieChartReducer } from './features/pieChart/pieChartSlice'
import { candleStickReducer } from './features/candleStick/candleStickSlice'

const rootReducer = combineReducers({
  lineChart: lineChartReducer,
  barChart: barChartReducer,
  pieChart: pieChartReducer,
  candleStick: candleStickReducer
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']