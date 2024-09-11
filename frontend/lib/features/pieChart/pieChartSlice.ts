import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '@/app/withTypes'
import type { RootState } from '@/lib/store'

// Define a type for the slice state
interface pieChartState {
    value: object
    loading: boolean
    error: string | null
}

// Define the initial state using that type
const initialState: pieChartState = {
    value: { labels: [], data: [] },
    loading: false,
    error: null
}

export const fetchPieChart = createAppAsyncThunk(
    'pieChart/fetchPieChart',
    async () => {
        const response = await fetch('http://127.0.0.1:8000/api/pie-chart-data/')
        return response.json()
    }
)

export const pieChartSlice = createSlice({
    name: 'pieChart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPieChart.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchPieChart.fulfilled, (state, action: PayloadAction<any>) => {
                state.value = action.payload
                state.loading = false
            })
            .addCase(fetchPieChart.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Failed to fetch data'
            })
    }
})

// Other code such as selectors can use the imported `RootState` type
export const selectPieChart = (state: RootState) => state.pieChart.value
export const selectPieChartLoading = (state: RootState) => state.pieChart.loading
export const selectPieChartError = (state: RootState) => state.pieChart.error