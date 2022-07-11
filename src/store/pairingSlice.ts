/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PairingData } from '../interfaces/pairing';
import { getAll } from '../api';

const sliceKeyName = 'pairings';

export const fetchAllPairings = createAsyncThunk(
  `${sliceKeyName}/fetchAll`,
  async () => {
    const response = await getAll();
    return response.data as PairingData;
  },
);

export interface PairingState {
  pairings: PairingData | null;
  loading: boolean;
  error: SerializedError | null;
}

const initialState: PairingState = {
  pairings: null,
  loading: false,
  error: null,
};

export const pairingSlice = createSlice({
  name: sliceKeyName,
  initialState,
  reducers: {
    updatePairings: (state, action: PayloadAction<PairingData | null>) => {
      state.pairings = { ...action.payload };
    },
  },
  extraReducers: (builder): void => {
    builder.addCase(fetchAllPairings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllPairings.fulfilled, (state, { payload }) => {
      state.pairings = payload;
      state.loading = false;
    });
    builder.addCase(fetchAllPairings.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

export const { updatePairings } = pairingSlice.actions;

export default pairingSlice.reducer;
