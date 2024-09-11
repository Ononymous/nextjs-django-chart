import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '@/app/withTypes'
import type { RootState } from '@/lib/store'

// Define a type for the slice state
interface candleStickState {
    value: object,
    loading: boolean,
    error: string | null
}

// Define the initial state using that type
const initialState: candleStickState = {
    value: {data: []},
    loading: false,
    error: null
}

// Define a thunk to fetch the data from the server
export const fetchCandleStick = createAppAsyncThunk(
    'candleStick/fetchCandleStick',
    async () => {
        const response = await fetch('http://127.0.0.1:8000/api/candlestick-data/')
        return response.json()
    }
)

export const candleStickSlice = createSlice({
    name: 'candleStick',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCandleStick.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCandleStick.fulfilled, (state, action: PayloadAction<any>) => {
                state.value = action.payload
                state.loading = false
            })
            .addCase(fetchCandleStick.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Failed to fetch data'
            })
    }
})

// Other code such as selectors can use the imported `RootState` type
export const selectCandleStick = (state: RootState) => state.candleStick.value
export const selectCandleStickLoading = (state: RootState) => state.candleStick.loading
export const selectCandleStickError = (state: RootState) => state.candleStick.error

export const candleStickReducer = candleStickSlice.reducer