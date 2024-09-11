import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '@/app/withTypes'
import type { RootState } from '@/lib/store'

// Define a type for the slice state
interface barChartState {
	value: object,
	loading: boolean,
	error: string | null
}


// Define the initial state using that type
const initialState: barChartState = {
	value: {labels: [], data: []},
	loading: false,
	error: null
}

// Define a thunk to fetch the data from the server
export const fetchBarChart = createAppAsyncThunk(
	'barChart/fetchBarChart',
	async () => {
		const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await fetch(`${apiBaseUrl}/api/bar-chart-data/`)
		return response.json()
	}
)

export const barChartSlice = createSlice({
	name: 'barChart',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBarChart.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchBarChart.fulfilled, (state, action: PayloadAction<object>) => {
				state.value = action.payload
				state.loading = false
			})
			.addCase(fetchBarChart.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Failed to fetch data'
			})
	}
})

// Other code such as selectors can use the imported `RootState` type
export const selectBarChart = (state: RootState) => state.barChart.value
export const selectBarChartLoading = (state: RootState) => state.barChart.loading
export const selectBarChartError = (state: RootState) => state.barChart.error

export const barChartReducer = barChartSlice.reducer