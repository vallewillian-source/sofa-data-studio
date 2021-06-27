import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAPI } from '../../../electron/models/IApi';
import type { RootState } from '../store';

const initialState: IAPI = {
    name: "",
    description: "",
    endpoints: [],
    login_endpoint_id: ""
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.name += action.payload
    },
  },
})

export const { incrementByAmount } = counterSlice.actions

export const selectCount = (state: RootState) => state.apis.name

export default counterSlice.reducer