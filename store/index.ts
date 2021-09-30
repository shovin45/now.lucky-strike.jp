import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

export type state = {
  url: string | null
}

export type UpdatePayload = string

const initialState: state = {
  url: '',
}

export const slice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    update(state, action: PayloadAction<UpdatePayload>) {
      state.url = action.payload
    },
    reset(): state {
      return initialState
    },
  },
})

const store = configureStore({
  reducer: slice.reducer,
})

export default store
