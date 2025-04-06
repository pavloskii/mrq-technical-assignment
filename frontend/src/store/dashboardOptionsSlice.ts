import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

interface StoreState {
  activeSymbol: string | null;
  showCardInfo: boolean;
}

const initialState: StoreState = {
  activeSymbol: null,
  showCardInfo: true
};

const selectShowCardInfo = (state: { store: StoreState }) => state.store.showCardInfo;
const selectActiveSymbol = (state: RootState) => state.store.activeSymbol;

export const dashboardOptionsSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    toggleShowCardInfo: (state) => {
      state.showCardInfo = !state.showCardInfo;
    },
    setActiveSymbol: (state, action: PayloadAction<string>) => {
      state.activeSymbol = state.activeSymbol === action.payload ? null : action.payload;
    }
  }
});

export const { toggleShowCardInfo, setActiveSymbol } = dashboardOptionsSlice.actions;

const selectors = {
  selectShowCardInfo,
  selectActiveSymbol
};

export default dashboardOptionsSlice.reducer;
export { selectors };
