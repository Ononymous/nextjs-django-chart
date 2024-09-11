import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '@/app/withTypes'
import type { RootState } from '@/lib/store'

// Define a type for the slice state
interface lineChartState {
    value: object,
    loading: boolean,
    error: string | null
}

// Define the initial state using that type
const initialState: lineChartState = {
    value: {labels: [], data: []},
    loading: false,
    error: null
}

// Define a thunk to fetch the data from the server
export const fetchLineChart = createAppAsyncThunk(
    'lineChart/fetchLineChart',
    async () => {
        const response = await fetch('http://127.0.0.1:8000/api/line-chart-data/')
        return response.json()
    }
)

export const lineChartSlice = createSlice({
    name: 'lineChart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLineChart.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchLineChart.fulfilled, (state, action: PayloadAction<any>) => {
                state.value = action.payload
                state.loading = false
            })
            .addCase(fetchLineChart.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Failed to fetch data'
            })
    }
})

// Other code such as selectors can use the imported `RootState` type
export const selectLineChart = (state: RootState) => state.lineChart.value
export const selectLineChartLoading = (state: RootState) => state.lineChart.loading
export const selectLineChartError = (state: RootState) => state.lineChart.error

export const lineChartReducer = lineChartSlice.reducer