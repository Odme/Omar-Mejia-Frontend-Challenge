import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './index';

const selectRootState = (state: RootState) => state.pairing;

export const selectPairings = createSelector(
  selectRootState,
  ({ pairings, loading, error }) => [pairings, loading, error],
);

export const selectIsPairingsLoading = createSelector(
  selectRootState,
  (pairing) => pairing.loading,
);
